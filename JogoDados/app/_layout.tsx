import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      {/* Aqui estamos dizendo que a nossa única tela é a index e escondendo o cabeçalho */}
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}