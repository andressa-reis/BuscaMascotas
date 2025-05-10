import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function VerificacionScreen() {
  const router = useRouter();
  const [codigo, setCodigo] = useState('');

  const verificarCodigo = () => {
    router.push('/cuentaVerificada');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Encabezado */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image source={require('../assets/images/logo.png')} style={styles.logo} />
            <Text style={styles.appName}>BuscaMascotas</Text>
          </View>
          <TouchableOpacity style={styles.loginButton} onPress={() => router.push('/iniciar-sesion')}>
            <Text style={styles.loginText}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </View>

        {/* Verificar cuenta BuscaMascota */}
        <Text style={styles.title}>Verifica tu Cuenta</Text>
        <Image source={require('../assets/images/BuscaDog3.png')} style={styles.dogImage} />
        <Text style={styles.description}>
          Te hemos enviado un enlace a tu correo electrónico. También te hemos enviado un código por SMS. Introduce el código para completar tu verificación.
        </Text>

        <TextInput
          style={styles.codeInput}
          placeholder="______"
          placeholderTextColor="#999"
          keyboardType="number-pad"
          maxLength={6}
          value={codigo}
          onChangeText={setCodigo}
        />

        <TouchableOpacity style={styles.verifyButton} onPress={verificarCodigo}>
          <Text style={styles.verifyButtonText}>Verificar ahora</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.resendText}>Reenviar código</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 40,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  loginButton: {
    backgroundColor: '#2F80ED',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  loginText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
  },
  dogImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginVertical: 10,
  },
  description: {
    textAlign: 'center',
    fontSize: 14,
    color: '#555',
    marginBottom: 20,
  },
  codeInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 12,
    fontSize: 20,
    letterSpacing: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  verifyButton: {
    backgroundColor: '#2F80ED',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  verifyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  resendText: {
    color: '#2F80ED',
    textAlign: 'center',
    fontSize: 14,
  },
});
