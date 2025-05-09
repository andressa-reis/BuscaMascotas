import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SubirImagenes() {
  const [imagenes, setImagenes] = useState([
    require('../assets/images/pipo3.png'),
    require('../assets/images/pipo4.png'),
  ]);

  const router = useRouter();

  const eliminarImagen = (index: number) => {
    const nuevas = imagenes.filter((_, i) => i !== index);
    setImagenes(nuevas);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/images/logo.png')} style={styles.logo} />
          <Text style={styles.logoText}>BuscaMascotas</Text>
        </View>
        <Image source={require('../assets/images/Bell.png')} style={styles.icono} />
        <Image source={require('../assets/images/GenericAvatar.png')} style={styles.avatar} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.titulo}>Subir imágenes</Text>
        <View style={styles.galeria}>
          {imagenes.map((img, index) => (
            <View key={index} style={styles.imgBox}>
              <Image source={img} style={styles.img} />
              <TouchableOpacity
                style={styles.botonEliminar}
                onPress={() => eliminarImagen(index)}>
                <Image source={require('../assets/images/trash.png')} style={styles.iconoTrash} />
              </TouchableOpacity>
            </View>
          ))}

          {[...Array(5 - imagenes.length)].map((_, i) => (
            <TouchableOpacity key={i} style={styles.botonAgregar}>
              <Image source={require('../assets/images/Plus.png')} style={styles.iconoAgregar} />
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.limite}>Se puede subir hasta 05 Imágenes a la vez.</Text>

        {/* Botones */}
        <View style={styles.botonesRow}>
          <TouchableOpacity style={styles.botonAzul} onPress={() => router.push('/publicarMascota')}>
            <Text style={styles.textoBlanco}>Confirmar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.botonBlanco} onPress={() => router.push('/publicarMascota')}>
            <Text style={styles.textoNegro}>Cancelar</Text>
          </TouchableOpacity>
        </View>

        {/* Imagen decorativa */}
        <Image source={require('../assets/images/BuscaDog1.png')} style={styles.decoracion} />
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
          <Image source={require('../assets/images/File text.png')} style={styles.iconoTab} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/BuscarMascota')}>
          <Image source={require('../assets/images/Search.png')} style={styles.iconoTab} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 },
  logoContainer: { flexDirection: 'row', alignItems: 'center' },
  logo: { width: 30, height: 30 },
  logoText: { fontSize: 18, fontWeight: 'bold', color: '#000', marginLeft: 8 },
  icono: { width: 24, height: 24 },
  avatar: { width: 32, height: 32, borderRadius: 16 },
  scrollContent: { padding: 20, paddingBottom: 140 },
  titulo: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 16 },
  galeria: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, justifyContent: 'flex-start' },
  imgBox: { position: 'relative' },
  img: { width: 100, height: 100, borderRadius: 8 },
  botonEliminar: {
    position: 'absolute', top: -8, right: -8, backgroundColor: '#fff', borderRadius: 12, padding: 4
  },
  iconoTrash: { width: 16, height: 16 },
  botonAgregar: {
    width: 100, height: 100, backgroundColor: '#eee', borderRadius: 8,
    justifyContent: 'center', alignItems: 'center'
  },
  iconoAgregar: { width: 24, height: 24 },
  limite: { marginTop: 12, marginBottom: 20, color: '#666' },
  botonesRow: { flexDirection: 'row', justifyContent: 'space-between', gap: 10 },
  botonAzul: { backgroundColor: '#2F80ED', padding: 12, borderRadius: 8, flex: 1, alignItems: 'center' },
  botonBlanco: { backgroundColor: '#eee', padding: 12, borderRadius: 8, flex: 1, alignItems: 'center' },
  textoBlanco: { color: '#fff', fontWeight: 'bold' },
  textoNegro: { color: '#000', fontWeight: 'bold' },
  decoracion: { marginTop: 30, width: 150, height: 150, alignSelf: 'center', resizeMode: 'contain' },
  tabBar: {
    flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center',
    height: 60, borderTopWidth: 1, borderTopColor: '#ccc', backgroundColor: '#fff'
  },
  iconoTab: { width: 28, height: 28 },
});
