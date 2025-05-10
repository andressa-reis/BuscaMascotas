import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function MarcarUbicacion() {
  const router = useRouter();
  const [ubicacion, setUbicacion] = useState('');
  const [mapaSeleccionado, setMapaSeleccionado] = useState(false);
  const [campanaActiva, setCampanaActiva] = useState(false);

  const seleccionarUbicacion = () => {
    setUbicacion('Av. Los Majuelos, Santa Cruz de Tenerife');
    setMapaSeleccionado(true);
  };

  const confirmarUbicacion = () => {
    router.push('/publicarMascota');
  };

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/images/logo.png')} style={styles.logo} />
          <Text style={styles.logoText}>BuscaMascotas</Text>
        </View>
        <TouchableOpacity onPress={() => setCampanaActiva(!campanaActiva)}>
          <Image
            source={campanaActiva
              ? require('../assets/images/Bell2.png')
              : require('../assets/images/Bell.png')}
            style={styles.icono}
          />
        </TouchableOpacity>
        <Image source={require('../assets/images/GenericAvatar.png')} style={styles.avatar} />
      </View>

      <Text style={styles.titulo}>Marcar Última Ubicación</Text>

      <TouchableOpacity onPress={seleccionarUbicacion}>
        <Image
          source={
            mapaSeleccionado
              ? require('../assets/images/mapa2.png')
              : require('../assets/images/mapa1.png')
          }
          style={styles.mapa}
        />
      </TouchableOpacity>

      <Text style={styles.instruccion}>
        Haz clic en el mapa para marcar el punto donde fue vista la mascota por última vez.
      </Text>

      <View style={styles.inputSimulado}>
        <Text style={styles.textoDireccion}>
          {ubicacion ? ubicacion : 'Dirección o zona'}
        </Text>
      </View>

      <View style={styles.botonesRow}>
        <TouchableOpacity style={styles.botonAzul} onPress={confirmarUbicacion}>
          <Text style={styles.textoBoton}>Confirmar Ubicación</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.botonBlanco} onPress={() => router.back()}>
          <Text style={styles.textoBotonNegro}>Cancelar</Text>
        </TouchableOpacity>
      </View>

      <Image source={require('../assets/images/Buscadog6.png')} style={styles.perroDecorativo} />

      {/* Barra inferior */}
      <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => router.push('/sesionIniciada')}>
          <Image source={require('../assets/images/Home.png')} style={styles.iconoTab} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/explorarMascotas')}>
          <Image source={require('../assets/images/MapPin.png')} style={styles.iconoTab} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/BuscarMascota')}>
          <Image source={require('../assets/images/Search.png')} style={styles.iconoTab} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/publicarMascota')}>
          <Image source={require('../assets/images/File text.png')} style={styles.iconoTab} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 16 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  logoContainer: { flexDirection: 'row', alignItems: 'center' },
  logo: { width: 30, height: 30 },
  logoText: { marginLeft: 8, fontSize: 18, fontWeight: 'bold', color: '#000' },
  icono: { width: 24, height: 24, marginRight: 10 },
  avatar: { width: 32, height: 32, borderRadius: 16 },

  titulo: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginVertical: 16 },
  mapa: { width: '100%', height: 160, borderRadius: 10 },
  instruccion: { marginVertical: 10, textAlign: 'center', fontSize: 14, color: '#333' },
  inputSimulado: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
  },
  textoDireccion: { color: '#555' },
  botonesRow: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 },
  botonAzul: {
    backgroundColor: '#2F80ED',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  botonBlanco: {
    backgroundColor: '#F2F2F2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  textoBoton: { color: '#fff', fontWeight: 'bold' },
  textoBotonNegro: { color: '#000', fontWeight: 'bold' },
  perroDecorativo: { width: 150, height: 150, alignSelf: 'center', marginVertical: 30 },

  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
    marginTop: 30,
  },
  iconoTab: { width: 28, height: 28 },
});
