import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.mainContent}>
          {/* Logo + texto y botón */}
          <View style={styles.topHeader}>
            <View style={styles.logoTextContainer}>
              <Image source={require('../assets/images/logo.png')} style={styles.logo} />
              <Text style={styles.appName}>BuscaMascotas</Text>
            </View>
            <TouchableOpacity style={styles.loginButton} onPress={() => router.push('/iniciar-sesion')}>
            <Text style={styles.loginText}>Iniciar Sesión</Text>
            </TouchableOpacity>
          </View>

          {/* Titulos */}
          <Text style={styles.title}>
            Encuentra y ayuda a encontrar mascotas perdidas en Canarias
          </Text>
          <Text style={styles.subtitle}>
            Publica anuncios, recibe alertas y contacta de forma segura
          </Text>

          {/* Crear Cuenta */}
          <TouchableOpacity onPress={() => router.push('/crear-cuenta')} style={styles.createAccountButton}>
         <Text style={styles.createAccountText}>Crear Cuenta gratis</Text>
         </TouchableOpacity>
        </View>

        {/* Info y BuscaDog */}
        <View style={styles.middleSection}>
          <View style={styles.infoColumn}>
            <View style={styles.infoItem}>
              <Image source={require('../assets/images/pinIcon.png')} style={styles.icon} />
              <Text style={styles.infoText}>Publica la Ubicación de tu mascota</Text>
            </View>
            <View style={styles.infoItem}>
              <Image source={require('../assets/images/pataIcon.png')} style={styles.icon} />
              <Text style={styles.infoText}>Contacta con rescatistas</Text>
            </View>
            <View style={styles.infoItem}>
              <Image source={require('../assets/images/safeIcon.png')} style={styles.icon} />
              <Text style={styles.infoText}>Sistema seguro con usuarios verificados</Text>
            </View>
          </View>

          <Image source={require('../assets/images/BuscaDog1.png')} style={styles.dogImage} />
        </View>
        <View style={styles.footer}>
         <Text style={styles.footerText}>Aviso Legal</Text>
         <Text style={styles.footerText}>Política de Privacidad</Text>
         <Text style={styles.footerText}>Contacto</Text>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 20,
  },
  mainContent: {
    alignItems: 'center',
    marginBottom: 40,
  },
  topHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
  },
  logoTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#000',
  },
  loginButton: {
    backgroundColor: '#2F80ED',
    paddingHorizontal: 12,
    paddingVertical: 6,
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
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  createAccountButton: {
    backgroundColor: '#2F80ED',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
    width: '100%',
  },
  createAccountText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  middleSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
  },
  infoColumn: {
    flex: 1,
    marginRight: 10,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  infoText: {
    flex: 1,
    fontSize: 14,
  },
  dogImage: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 40,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  footerText: {
    fontSize: 12,
    color: '#666',
  },  
});
