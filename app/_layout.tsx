import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import DvDScreen from '@/src/atoms/DvDScreen/DvDScreen';
import { TaskProvider } from '@/src/hooks';
import { useState } from 'react';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });
  const [showDvdScreen, setShowDvdScreen] = useState(false);

  let tempo: number;

  function dvdScreen() {
      setShowDvdScreen(true);
  }

  function resetTimer() {
      setShowDvdScreen(false);
      clearTimeout(tempo);
      tempo = setTimeout(dvdScreen, 10000)
      // 1000 milliseconds = 1 second
  }

  window.onload = resetTimer;
  window.onmousemove = resetTimer;
  window.onkeydown = resetTimer;

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <>
      <h1>{showDvdScreen}</h1>
      { showDvdScreen ?
        <DvDScreen />
        :
        <TaskProvider>
          <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack>
              <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
              <Stack.Screen name="task-details" options={{ headerShown: false }} />
              <Stack.Screen name="+not-found" />
            </Stack>
            <StatusBar style="auto" />
          </ThemeProvider>
        </TaskProvider>
      }
    </>
  );
}
