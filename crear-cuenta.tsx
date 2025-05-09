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

export default function CrearCuenta() {
  const router = useRouter();
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [repiteContrasena, setRepiteContrasena] = useState('');

  const esCorreoValido = (email: string) => /\S+@\S+\.\S+/.test(email);

  const guardarDatos = async () => {
    if (!nombre || !correo || !contrasena || !repiteContrasena) {
      Alert.alert('Error', 'Todos los campos son obligatorios');
      return;
    }
    if (!esCorreoValido(correo)) {
      Alert.alert('Error', 'El correo electrónico no es válido');
      return;
    }
    if (contrasena.length < 8) {
      Alert.alert('Error', 'La contraseña debe tener al menos 8 caracteres');
      return;
    }
    if (contrasena !== repiteContrasena) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }
    if (!aceptaTerminos) {
      Alert.alert('Error', 'Debes aceptar los términos y condiciones');
      return;
    }

    try {
      await AsyncStorage.setItem('nombreUsuario', nombre);
      await AsyncStorage.setItem('correoUsuario', correo);
      router.push('/verificacion');
    } catch (error) {
      console.error('Error al guardar los datos', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/images/logo.png')} style={styles.logo} />
          <Text style={styles.appName}>BuscaMascotas</Text>
        </View>
        <TouchableOpacity style={styles.loginButton} onPress={() => router.push('/iniciar-sesion')}>
          <Text style={styles.loginText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>

      <Image source={require('../assets/images/dogcrearcuenta.png')} style={styles.dogImage} />
      <Text style={styles.title}>Crear una Cuenta</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nombre y Apellidos"
          placeholderTextColor="#888"
          value={nombre}
          onChangeText={setNombre}
        />
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="DNI/NIE/NIF"
            placeholderTextColor="#888"
          />
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Teléfono móvil"
            placeholderTextColor="#888"
            keyboardType="phone-pad"
          />
        </View>
        <TextInput
          style={styles.input}
          placeholder="Correo Electrónico"
          placeholderTextColor="#888"
          value={correo}
          onChangeText={setCorreo}
          keyboardType="email-address"
        />
        <View style={styles.row}>
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Contraseña"
            placeholderTextColor="#888"
            secureTextEntry
            value={contrasena}
            onChangeText={setContrasena}
          />
          <TextInput
            style={[styles.input, styles.halfInput]}
            placeholder="Repite Contraseña"
            placeholderTextColor="#888"
            secureTextEntry
            value={repiteContrasena}
            onChangeText={setRepiteContrasena}
          />
        </View>
        <Text style={styles.passwordInfo}>Debe tener al menos 8 caracteres</Text>
        <View style={styles.checkboxContainer}>
          <Checkbox value={aceptaTerminos} onValueChange={setAceptaTerminos} />
          <Text style={styles.checkboxLabel}>Acepto los términos y condiciones</Text>
        </View>
        <TouchableOpacity style={styles.createButton} onPress={guardarDatos}>
          <Text style={styles.createButtonText}>Crear Cuenta</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.verificationBox}>
        <Text style={styles.verificationText}>
          🔒 Verificación Segura{'\n'}Verificaremos tu cuenta mediante un enlace en tu correo y un código SMS
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: '#fff', paddingBottom: 40 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  logoContainer: { flexDirection: 'row', alignItems: 'center' },
  logo: { width: 32, height: 32 },
  appName: { fontSize: 18, fontWeight: 'bold', marginLeft: 8, color: '#000' },
  loginButton: { backgroundColor: '#2F80ED', paddingVertical: 6, paddingHorizontal: 10, borderRadius: 6 },
  loginText: { color: '#fff', fontWeight: 'bold' },
  dogImage: { width: 120, height: 120, resizeMode: 'contain', alignSelf: 'center', marginVertical: 20 },
  title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  inputContainer: { marginBottom: 20 },
  input: {
    backgroundColor: '#f0f0f0',
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
    color: '#000' 
  },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  halfInput: { width: '48%' },
  passwordInfo: { fontSize: 12, color: '#777', marginBottom: 10 },
  checkboxContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 20 },
  checkboxLabel: { fontSize: 14, marginLeft: 8 },
  createButton: {
    backgroundColor: '#2F80ED',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center'
  },
  createButtonText: { color: '#fff', fontWeight: 'bold' },
  verificationBox: { backgroundColor: '#FFF3CD', padding: 12, borderRadius: 8, marginTop: 10 },
  verificationText: { fontSize: 13, color: '#856404', textAlign: 'center' }
});
