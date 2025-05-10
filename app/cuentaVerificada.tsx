import { useRouter } from 'expo-router';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CuentaVerificada() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <View style={styles.logoTextContainer}>
          <Image source={require('../assets/images/logo.png')} style={styles.logo} />
          <Text style={styles.appName}>BuscaMascotas</Text>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={() => router.push('/iniciar-sesion')}>
          <Text style={styles.loginText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>¡Cuenta Verificada con éxito!</Text>
      <Image source={require('../assets/images/cuentaexito.png')} style={styles.checkIcon} />
      <Text style={styles.subtitle}>
        Tu cuenta ya está activa.{"\n"}Ahora puedes iniciar sesión y empezar a explorar mascotas perdidas cerca de ti.
      </Text>
      <Image source={require('../assets/images/BuscaDog4.png')} style={styles.image} />
      
      <TouchableOpacity style={styles.startButton} onPress={() => router.push('/iniciar-sesion')}>
        <Text style={styles.startButtonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20, justifyContent: 'center' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30 },
  logoTextContainer: { flexDirection: 'row', alignItems: 'center' },
  logo: { width: 30, height: 30 },
  appName: { fontSize: 18, fontWeight: 'bold', marginLeft: 8, color: '#000' },
  loginButton: { backgroundColor: '#2F80ED', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 6 },
  loginText: { color: '#fff', fontWeight: 'bold' },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 16 },
  checkIcon: { width: 100, height: 100, alignSelf: 'center', resizeMode: 'contain', marginBottom: 16 },
  subtitle: { fontSize: 14, textAlign: 'center', color: '#555', marginBottom: 20 },
  image: { width: 120, height: 120, alignSelf: 'center', resizeMode: 'contain', marginBottom: 20 },
  startButton: {
    backgroundColor: '#2F80ED',
    padding: 14,
    marginHorizontal: 40,
    borderRadius: 10,
    alignItems: 'center',
  },
  startButtonText: { color: '#fff', fontWeight: 'bold' },
});

