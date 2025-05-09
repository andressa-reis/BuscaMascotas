import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ExplorarMascotas() {
  const [rangoSeleccionado, setRangoSeleccionado] = useState('');
  const [notificacionesActivas, setNotificacionesActivas] = useState(false);
  const router = useRouter();

  const mapa = rangoSeleccionado
    ? require('../assets/images/mapa2.png')
    : require('../assets/images/mapa1.png');

  const campana = notificacionesActivas
    ? require('../assets/images/Bell2.png')
    : require('../assets/images/Bell.png');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/images/logo.png')} style={styles.logo} />
          <Text style={styles.logoText}>BuscaMascotas</Text>
        </View>
        <View style={styles.iconsContainer}>
          <TouchableOpacity onPress={() => setNotificacionesActivas(!notificacionesActivas)}>
            <Image source={campana} style={styles.bell} />
          </TouchableOpacity>
          <Image source={require('../assets/images/GenericAvatar.png')} style={styles.avatar} />
        </View>
      </View>

      {/* Scrollable content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Explorar mascotas perdidas cerca de ti</Text>

        <TouchableOpacity style={styles.locationButton}>
          <Image source={require('../assets/images/MapPin.png')} style={styles.pinIcon} />
          <Text style={styles.buttonText}>Establecer mi ubicación</Text>
        </TouchableOpacity>

        <Image source={mapa} style={styles.mapa} />

        <Text style={styles.label}>Mostrar Mascotas Perdidas:</Text>
        {['1 km', '3 km', '5 km'].map((rango) => (
          <TouchableOpacity
            key={rango}
            style={styles.radioContainer}
            onPress={() => setRangoSeleccionado(rango)}
          >
            <View style={styles.radioCircle}>
              {rangoSeleccionado === rango && <View style={styles.radioDot} />}
            </View>
            <Text style={styles.radioLabel}>Dentro de {rango}</Text>
          </TouchableOpacity>
        ))}

        <Text style={styles.alertaTitulo}>🔔 Activar notificaciones cercanas</Text>
        <Text style={styles.alertaTexto}>
          “Recibe alertas cuando se publique una nueva mascota perdida cerca de ti”.
        </Text>

        <Image source={require('../assets/images/BuscaDog5.png')} style={styles.dogImage} />
      </ScrollView>

      {/* Barra inferior */}
      <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => router.push('/sesionIniciada')}>
          <Image source={require('../assets/images/Home.png')} style={styles.iconoTab} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/images/MapPin.png')} style={styles.iconoTab} />
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
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20,
  },
  logoContainer: { flexDirection: 'row', alignItems: 'center' },
  logo: { width: 30, height: 30 },
  logoText: { fontSize: 18, fontWeight: 'bold', marginLeft: 8, color: '#000' },
  iconsContainer: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  bell: { width: 24, height: 24 },
  avatar: { width: 32, height: 32, borderRadius: 16 },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 80 },
  title: { fontSize: 20, fontWeight: 'bold', marginVertical: 10, textAlign: 'center' },
  locationButton: {
    flexDirection: 'row', alignSelf: 'center', backgroundColor: '#2F80ED',
    paddingVertical: 8, paddingHorizontal: 16, borderRadius: 8, alignItems: 'center', gap: 6,
  },
  pinIcon: { width: 18, height: 18 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  mapa: {
    width: '100%', height: 150, resizeMode: 'contain',
    marginTop: 16, borderRadius: 8,
  },
  label: { fontWeight: 'bold', marginTop: 20, marginBottom: 8 },
  radioContainer: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  radioCircle: {
    width: 18, height: 18, borderRadius: 9, borderWidth: 2, borderColor: '#2F80ED',
    alignItems: 'center', justifyContent: 'center', marginRight: 10,
  },
  radioDot: { width: 10, height: 10, borderRadius: 5, backgroundColor: '#2F80ED' },
  radioLabel: { fontSize: 14 },
  alertaTitulo: { fontWeight: 'bold', marginTop: 20 },
  alertaTexto: { fontSize: 13, fontStyle: 'italic', marginTop: 4 },
  dogImage: { width: 120, height: 120, resizeMode: 'contain', alignSelf: 'center', marginTop: 20 },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
  iconoTab: {
    width: 28,
    height: 28,
  },
});
