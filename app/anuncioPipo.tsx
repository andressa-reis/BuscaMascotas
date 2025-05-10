import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function AnuncioPipo() {
  const [notificacionesActivas, setNotificacionesActivas] = useState(false);
  const router = useRouter();

  const campana = notificacionesActivas
    ? require('../assets/images/Bell2.png')
    : require('../assets/images/Bell.png');

  return (
    <View style={styles.container}>
      {/* Encabezado */}
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
        <Text style={styles.titulo}>Pipo – Golden Retrivier Perdido en Santa Cruz de Tenerife</Text>

        <View style={styles.etiquetasContainer}>
          <Text style={styles.estado}>Activo</Text>
          <Text style={styles.recompensa}>💲 Recompensa Ofrecida</Text>
        </View>

        <Image source={require('../assets/images/pipo2.png')} style={styles.imagenMascota} />

        <Text style={styles.infoTexto}><Text style={styles.negrita}>Nombre:</Text> Pipo – <Text style={styles.negrita}>Raza:</Text> Golden Retrivier</Text>
        <Text style={styles.infoTexto}><Text style={styles.negrita}>Última vez visto:</Text> Av. los Majuelos, Santa Cruz de Tenerife</Text>
        <Text style={styles.infoTexto}><Text style={styles.negrita}>Fecha:</Text> 12/03/2025 | 17:45h</Text>

        <TouchableOpacity style={styles.botonSecundario}>
          <Text style={styles.textoBoton}>🖼️ Ver fotos</Text>
        </TouchableOpacity>

        <View style={styles.descripcionBox}>
          <Text style={styles.negrita}>Descripción Adicional</Text>
          <Text style={styles.descripcionTexto}>
            Pipo es un Golden Retriever muy cariñoso y sociable. Tiene aproximadamente 3 años, es de tamaño grande y de color beige claro.
            {'\n\n'}Estaba usando un collar azul con una plaquita de identificación el día que se perdió. Es un perro muy dócil, pero puede asustarse con ruidos fuertes o desconocidos.
            {'\n\n'}Si tienes alguna información, por favor contáctanos. ¡Se ofrece recompensa económica por su localización!
          </Text>
        </View>

        <View style={styles.botonesRow}>
        <TouchableOpacity
        style={styles.botonAccion}
        onPress={() => router.push('/ChatPipo')}>
  <Text style={styles.textoBoton}>💬 Abrir Chat</Text>
</TouchableOpacity>
          <TouchableOpacity style={styles.botonAccion} onPress={() => router.push('/mapaPipo')}>
          <Text style={styles.textoBoton}>📍 Ver en Mapa</Text>
          </TouchableOpacity>
        </View>
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
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16
  },
  logoContainer: { flexDirection: 'row', alignItems: 'center' },
  logo: { width: 30, height: 30 },
  logoText: { marginLeft: 8, fontSize: 18, fontWeight: 'bold', color: '#000' },
  bell: { width: 24, height: 24 },
  avatar: { width: 32, height: 32, borderRadius: 16 },
  scrollContent: { paddingBottom: 100, paddingHorizontal: 16 },
  titulo: { fontSize: 20, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  etiquetasContainer: {
    flexDirection: 'row', justifyContent: 'center', gap: 12, marginBottom: 16
  },
  estado: {
    backgroundColor: '#FFE699', padding: 8, borderRadius: 8, fontWeight: 'bold'
  },
  recompensa: {
    backgroundColor: '#FDE68A', padding: 8, borderRadius: 8, fontWeight: 'bold'
  },
  imagenMascota: {
    width: 180, height: 180, alignSelf: 'center', borderRadius: 12, marginBottom: 16
  },
  infoTexto: { marginBottom: 6 },
  negrita: { fontWeight: 'bold' },
  descripcionBox: {
    backgroundColor: '#f4f4f4', padding: 12, borderRadius: 8, marginTop: 12
  },
  descripcionTexto: { marginTop: 4, fontSize: 14, lineHeight: 20 },
  botonSecundario: {
    backgroundColor: '#2F80ED', padding: 10, borderRadius: 8,
    alignItems: 'center', marginTop: 10, marginBottom: 12
  },
  textoBoton: { color: '#fff', fontWeight: 'bold' },
  botonesRow: {
    flexDirection: 'row', justifyContent: 'space-between', marginTop: 16, gap: 10
  },
  botonAccion: {
    flex: 1, backgroundColor: '#2F80ED', padding: 12, borderRadius: 8, alignItems: 'center'
  },
  tabBar: {
    flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
    height: 60, borderTopWidth: 1, borderTopColor: '#ccc', backgroundColor: '#fff'
  },
  iconoTab: { width: 28, height: 28 }
});
