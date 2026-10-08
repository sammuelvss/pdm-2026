# Jogo de Dados - Mobile (Expo Go) 🎲

Aplicação mobile desenvolvida em **React Native** com **Expo** e **TypeScript**, replicando o jogo de dados web para dispositivos móveis.

## Como Jogar

1. O jogo possui **5 rodadas**.
2. No turno de cada jogador, clique em **Jogar Dado** para rolar dois dados de 1 a 6.
3. O **Jogador A** joga primeiro, seguido pelo **Jogador B**.
4. Quem somar mais pontos nos dois dados vence a rodada.
5. Em caso de pontuações iguais, ocorre um empate na rodada.
6. Ao final da 5ª rodada, é exibido o placar final e o vencedor da partida, com a opção de **Jogar Novamente**.

## Como Executar no Expo Go

1. Certifique-se de estar na pasta do projeto:
   ```bash
   cd JogoDados
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor Expo:
   ```bash
   npx expo start
   ```
   *Se estiver utilizando Codespaces ou quiser conectar remotamente pelo celular, utilize:*
   ```bash
   npx expo start --tunnel
   ```

4. Abra o aplicativo **Expo Go** no seu smartphone Android ou iOS e escaneie o código QR gerado no terminal.
