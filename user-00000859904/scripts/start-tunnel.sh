#!/bin/bash

# Mata qualquer processo anterior do cloudflared ou expo na porta 8081
pkill -f cloudflared 2>/dev/null || true
pkill -f "expo start" 2>/dev/null || true
sleep 1

echo "🚀 Iniciando túnel Cloudflare..."
rm -f /tmp/cf_tunnel.log

# Inicia o cloudflared em background e salva o log
cloudflared tunnel --url http://localhost:8081 --no-autoupdate > /tmp/cf_tunnel.log 2>&1 &
CF_PID=$!

# Aguarda a URL aparecer no log (até 30s)
CF_URL=""
for i in $(seq 1 30); do
  CF_URL=$(grep -o 'https://[a-z0-9-]*\.trycloudflare\.com' /tmp/cf_tunnel.log 2>/dev/null | head -1)
  if [ -n "$CF_URL" ]; then
    break
  fi
  echo "  Aguardando URL do tunnel... ($i/30)"
  sleep 1
done

if [ -z "$CF_URL" ]; then
  echo "❌ Erro: não foi possível obter a URL do cloudflared."
  echo "--- Log do cloudflared ---"
  cat /tmp/cf_tunnel.log
  kill $CF_PID 2>/dev/null
  exit 1
fi

echo ""
echo "✅ Tunnel ativo: $CF_URL"
echo ""

# Inicia o Expo usando a URL pública do cloudflare como proxy
EXPO_PACKAGER_PROXY_URL="$CF_URL" npx expo start

# Ao encerrar o Expo, mata o cloudflared também
echo "Encerrando tunnel..."
kill $CF_PID 2>/dev/null

