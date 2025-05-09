import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function MapaPipo() {
    const router = useRouter();
  
    const abrirEnGoogleMaps = () => {
      Linking.openURL('https://www.google.com/maps/search/?api=1&query=Av.+los+Majuelos,+Santa+Cruz+de+Tenerife');
    };
  
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          {/* Encabezado */}
          <View style={styles.header}>
            <View style={styles.logoContainer}>
              <Image source={require('../assets/images/logo.png')} style={styles.logo} />
              <Text style={styles.logoText}>BuscaMascotas</Text>
            </View>
            <Image source={require('../assets/images/Bell2.png')} style={styles.bell} />
            <Image source={require('../assets/images/GenericAvatar.png')} style={styles.avatar} />
          </View>
  
          <Text style={styles.title}>Última Ubicación de Pipo</Text>
  
          <Image source={require('../assets/images/mapa3.png')} style={styles.mapa} />
  
          <TouchableOpacity style={styles.botonMapa} onPress={abrirEnGoogleMaps}>
            <Text style={styles.textoBotonMapa}>📍 Abrir en Google Maps</Text>
          </TouchableOpacity>
  
          <Text style={styles.label}>
            <Text style={styles.negrita}>Última vez visto</Text> - Av. los Majuelos, Santa Cruz de Tenerife
          </Text>
          <Text style={styles.label}>
            <Text style={styles.negrita}>Fecha:</Text> 12/03/2025 · 17:45h
          </Text>
  
          <View style={styles.estadoContenedor}>
            <Text style={styles.estado}>Activo</Text>
          </View>
  
          <Image source={require('../assets/images/pipo.png')} style={styles.imagenMascota} />
        </ScrollView>
  
        {/* Barra inferior */}
        <View style={styles.tabBar}>
          <TouchableOpacity onPress={() => router.push('/sesionIniciada')}>
                    <Image source={require('../assets/images/Home.png')} style={styles.iconoTab} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => router.push('/explorarMascotas')}>
                    <Image source={require('../assets/images/MapPin.png')} style={styles.iconoTab} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => router.push('/publicarMascota')}>
                            <Image source={require('../assets/images/PlusCircle.png')} style={styles.iconoTab} />
                          </TouchableOpacity>
                  <TouchableOpacity onPress={() => router.push('/misAnuncios')}>
                      <Image source={require('../assets/images/File text.png')} style={styles.iconoTab} />
                       </TouchableOpacity>
                  <TouchableOpacity onPress={() => router.push('/MisMensajes')}>
                            <Image source={require('../assets/images/Message square.png')} style={styles.iconoTab} />
                          </TouchableOpacity>
        </View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    scrollContent: { paddingBottom: 100, paddingHorizontal: 16 },
    header: {
      flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16
    },
    logoContainer: { flexDirection: 'row', alignItems: 'center' },
    logo: { width: 30, height: 30 },
    logoText: { marginLeft: 8, fontSize: 18, fontWeight: 'bold', color: '#000' },
    bell: { width: 24, height: 24 },
    avatar: { width: 32, height: 32, borderRadius: 16 },
  
    title: { fontSize: 20, fontWeight: 'bold', marginTop: 10, marginBottom: 16, textAlign: 'center' },
    mapa: { width: '100%', height: 160, borderRadius: 12, marginBottom: 12 },
    botonMapa: {
      backgroundColor: '#fff', borderColor: '#2F80ED', borderWidth: 1,
      padding: 10, borderRadius: 8, alignItems: 'center', marginBottom: 16
    },
    textoBotonMapa: { color: '#2F80ED', fontWeight: 'bold' },
  
    label: { marginBottom: 6, fontSize: 14 },
    negrita: { fontWeight: 'bold' },
  
    estadoContenedor: {
      backgroundColor: '#FFE699', paddingHorizontal: 12, borderRadius: 8,
      alignSelf: 'center', marginVertical: 12
    },
    estado: { fontWeight: 'bold' },
  
    imagenMascota: {
      width: 150, height: 150, borderRadius: 16,
      alignSelf: 'center', marginTop: 10, marginBottom: 20
    },
  
    tabBar: {
      flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 60,
      borderTopWidth: 1, borderTopColor: '#ccc', backgroundColor: '#fff'
    },
    iconoTab: { width: 28, height: 28 },
  });