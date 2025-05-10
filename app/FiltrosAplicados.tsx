import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';


export default function FiltrosAplicados() {
  const [notificacionesActivas, setNotificacionesActivas] = useState(false);
  const router = useRouter();

  const campana = notificacionesActivas
    ? require('../assets/images/Bell2.png')
    : require('../assets/images/Bell.png');

  const mascotasFiltradas = [
    {
      nombre: 'Max',
      raza: 'Pastor Alemán',
      ubicacion: 'Calle Molinos de San Benito - San Cristóbal de la Laguna',
      fecha: '18/03/2025',
      recompensa: true,
      imagen: require('../assets/images/max.png'),
    },
    {
      nombre: 'Pipo',
      raza: 'Labrador',
      ubicacion: 'Avda. Los Majuelos, Taco - La Laguna',
      fecha: '05/03/2025',
      recompensa: true,
      imagen: require('../assets/images/pipo.png'),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/images/logo.png')} style={styles.logo} />
          <Text style={styles.logoText}>BuscaMascotas</Text>
        </View>
        <TouchableOpacity onPress={() => setNotificacionesActivas(!notificacionesActivas)}>
          <Image source={campana} style={styles.bell} />
        </TouchableOpacity>
        <Image source={require('../assets/images/GenericAvatar.png')} style={styles.avatar} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Buscar mascotas perdidas</Text>
        <Text style={styles.subtitulo}>Resultados filtrados por tus preferencias:</Text>

        {mascotasFiltradas.map((m, index) => (
          <View key={index} style={styles.tarjeta}>
            <Image source={m.imagen} style={styles.imagenMascota} />
            <View style={styles.infoMascota}>
              <View style={styles.filaSuperior}>
                <View>
                  <Text><Text style={styles.negrita}>Nombre:</Text> {m.nombre}</Text>
                  <Text><Text style={styles.negrita}>Raza:</Text> {m.raza}</Text>
                  <Text><Text style={styles.negrita}>Última vez visto:</Text> {m.ubicacion}</Text>
                  <Text><Text style={styles.negrita}>Fecha:</Text> {m.fecha}</Text>
                </View>
                <View style={styles.estadoContenedor}>
                  <Text style={styles.estado}>Activo</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => router.push('/anuncioPipo')}>
  <Text style={styles.verAnuncio}>Ver anuncio completo</Text>
</TouchableOpacity>
              {m.recompensa && <Text style={styles.recompensa}>🎯 Recompensa Ofrecida</Text>}
              <View style={styles.botonesRow}>
  <TouchableOpacity
    style={styles.botonAccion}
    onPress={() => {
      if (m.nombre === 'Pipo') {
        router.push('/mapaPipo');
      }
    }}>
    <Text style={styles.textoBoton}>📍 Mapa</Text>
  </TouchableOpacity>
  <TouchableOpacity
    style={styles.botonAccion}
    onPress={() => router.push('/ChatPipo')}>
    <Text style={styles.textoBoton}>💬 Abrir Chat</Text>
               </TouchableOpacity>
             </View>
            </View>
          </View>
        ))}
        <TouchableOpacity style={styles.cargarMas}>
          <Text style={styles.textoCargar}>Cargar más</Text>
        </TouchableOpacity>
      </ScrollView>

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
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16,
  },
  logoContainer: { flexDirection: 'row', alignItems: 'center' },
  logo: { width: 30, height: 30 },
  logoText: { marginLeft: 8, fontSize: 18, fontWeight: 'bold', color: '#000' },
  bell: { width: 24, height: 24, marginRight: 10 },
  avatar: { width: 32, height: 32, borderRadius: 16 },
  scrollContent: { paddingBottom: 100, paddingHorizontal: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 12, textAlign: 'center' },
  subtitulo: { fontWeight: 'bold', marginBottom: 16 },
  tarjeta: {
    backgroundColor: '#f9f9f9', borderRadius: 10, padding: 10, marginBottom: 20, flexDirection: 'row', gap: 10, position: 'relative',
  },
  imagenMascota: { width: 80, height: 80, borderRadius: 6 },
  infoMascota: { flex: 1 },
  filaSuperior: { flexDirection: 'row', justifyContent: 'space-between' },
  estadoContenedor: {
    backgroundColor: '#FFE699', paddingHorizontal: 8, borderRadius: 6, position: 'absolute', top: 10, right: 10,
  },
  estado: { fontSize: 12, fontWeight: 'bold' },
  verAnuncio: { color: '#2F80ED', marginTop: 6 },
  recompensa: { marginTop: 4, fontSize: 12, color: '#DAA520' },
  botonesRow: { flexDirection: 'row', marginTop: 10, gap: 10 },
  botonAccion: { backgroundColor: '#2F80ED', paddingVertical: 6, paddingHorizontal: 14, borderRadius: 8 },
  textoBoton: { color: '#fff', fontWeight: 'bold' },
  cargarMas: {
    backgroundColor: '#2F80ED', padding: 12, borderRadius: 10, alignItems: 'center', marginBottom: 20,
  },
  textoCargar: { color: '#fff', fontWeight: 'bold' },
  negrita: { fontWeight: 'bold' },
  tabBar: {
    flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 60, borderTopWidth: 1, borderTopColor: '#ccc', backgroundColor: '#fff',
  },
  iconoTab: { width: 28, height: 28 },
});
