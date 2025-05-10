import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Pantalla no encontrada' }} />
      <ThemedView style={styles.container}>
        <ThemedText type="title">¡Ups! Esta pantalla no existe.</ThemedText>
        <ThemedText>Puede que la dirección esté mal escrita o la pantalla haya sido eliminada.</ThemedText>
        <Link href="/sesionIniciada" style={styles.link}>
          <ThemedText type="link">Volver a Inicio</ThemedText>
        </Link>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 20,
    paddingVertical: 15,
  },
});
