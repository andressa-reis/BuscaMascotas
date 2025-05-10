import AsyncStorage from '@react-native-async-storage/async-storage';
import Checkbox from 'expo-checkbox';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function IniciarSesionScreen() {
  const [isChecked, setChecked] = useState(false);
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [mostrarError, setMostrarError] = useState(false);
  const router = useRouter();

  const esCorreoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
  const esFormularioValido = correo && esCorreoValido && password.length >= 8;

  const handleLogin = async () => {
    try {
      const correoGuardado = await AsyncStorage.getItem('correoUsuario');
      const nombreGuardado = await AsyncStorage.getItem('nombreUsuario');

      if (correo === correoGuardado) {
        await AsyncStorage.setItem('usuarioLogueado', nombreGuardado || '');
        router.push('/sesionIniciada');
      } else {
        Alert.alert('Error', 'Correo incorrecto o no registrado.');
      }
    } catch (error) {
      Alert.alert('Error', 'Ha ocurrido un error al iniciar sesión.');
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.topHeader}>
          <View style={styles.logoTextContainer}>
            <Image source={require('../assets/images/logo.png')} style={styles.logo} />
            <Text style={styles.appName}>BuscaMascotas</Text>
          </View>
          <TouchableOpacity style={styles.registerButton} onPress={() => router.push('/crear-cuenta')}>
            <Text style={styles.registerText}>Crear Cuenta</Text>
          </TouchableOpacity>
        </View>

        <Image source={require('../assets/images/lupadog.png')} style={styles.dogImage} />

        <Text style={styles.title}>Iniciar Sesión</Text>
        <Text style={styles.subtitle}>
          Accede a tu cuenta para ayudar a encontrar mascotas perdidas en Canarias.
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          placeholderTextColor="#888"
          value={correo}
          onChangeText={(text) => {
            setCorreo(text);
            setMostrarError(false);
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#888"
          secureTextEntry
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            setMostrarError(false);
          }}
        />

        {mostrarError && (
          <Text style={styles.errorText}>
            Introduce un correo válido y una contraseña de al menos 8 caracteres.
          </Text>
        )}

        <View style={styles.checkboxContainer}>
          <Checkbox value={isChecked} onValueChange={setChecked} />
          <Text style={styles.checkboxLabel}>Recordarme</Text>
        </View>

        <TouchableOpacity
          style={[styles.loginButton, { opacity: esFormularioValido ? 1 : 0.5 }]}
          disabled={!esFormularioValido}
          onPress={() => {
            if (esFormularioValido) {
              handleLogin();
            } else {
              setMostrarError(true);
            }
          }}
        >
          <Text style={styles.loginButtonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.forgotText}>🔒 ¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff' },
  topHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  logoTextContainer: { flexDirection: 'row', alignItems: 'center' },
  logo: { width: 40, height: 40 },
  appName: { fontSize: 18, fontWeight: 'bold', marginLeft: 8, color: '#000' },
  registerButton: { backgroundColor: '#2F80ED', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 6 },
  registerText: { color: '#fff', fontWeight: 'bold' },
  dogImage: { width: 100, height: 100, alignSelf: 'center', resizeMode: 'contain', marginBottom: 20 },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 8 },
  subtitle: { fontSize: 14, textAlign: 'center', marginBottom: 20, color: '#555' },
  input: {
    backgroundColor: '#f2f2f2',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
    color: '#000' 
  },
  checkboxContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  checkboxLabel: { marginLeft: 8, fontSize: 14 },
  loginButton: { backgroundColor: '#2F80ED', padding: 14, borderRadius: 10, alignItems: 'center', marginBottom: 16 },
  loginButtonText: { color: '#fff', fontWeight: 'bold' },
  forgotText: { textAlign: 'center', color: '#2F80ED', fontSize: 13 },
  errorText: { color: 'red', fontSize: 13, marginBottom: 10, textAlign: 'center' },
});
