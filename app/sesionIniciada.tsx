import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SesionIniciada() {
  const [nombre, setNombre] = useState('');
  const [bellActiva, setBellActiva] = useState(false);
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const obtenerNombre = async () => {
      const almacenado = await AsyncStorage.getItem('nombreUsuario');
      if (almacenado) {
        const primerNombre = almacenado.split(' ')[0];
        setNombre(primerNombre);
      }
    };
    obtenerNombre();
  }, []);

  const cerrarSesion = async () => {
    await AsyncStorage.removeItem('usuarioLogueado');
    router.push('/')
  };

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/images/logo.png')} style={styles.logo} />
          <Text style={styles.appName}>BuscaMascotas</Text>
        </View>
        <TouchableOpacity onPress={() => setBellActiva(!bellActiva)}>
          <Image
            source={bellActiva
              ? require('../assets/images/Bell2.png')
              : require('../assets/images/Bell.png')}
            style={styles.iconoNotificacion}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setMostrarMenu(!mostrarMenu)}>
          <Image source={require('../assets/images/GenericAvatar.png')} style={styles.avatar} />
        </TouchableOpacity>
      </View>

      {mostrarMenu && (
        <View style={styles.menuDesplegable}>
          <TouchableOpacity onPress={() => Alert.alert('Configuraciones', 'Funcionalidad en desarrollo')}>
            <Text style={styles.menuItem}>⚙️ Configuraciones</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={cerrarSesion}>
            <Text style={styles.menuItem}>🔓 Cerrar sesión</Text>
          </TouchableOpacity>
        </View>
      )}

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.saludoContainer}>
          <Text style={styles.saludo}>¡Hola {nombre}!</Text>
          <Text style={styles.subtitulo}>
            Nos alegra verte de nuevo.{"\n"}¿Qué deseas hacer hoy?
          </Text>
        </View>

        <TouchableOpacity
          style={styles.botonDestacado}
          onPress={() => router.push('/explorarMascotas')}
        >
          <Text style={styles.textoBotonDestacado}>
            Explorar Mascotas Perdidas cerca de ti
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botonSecundario}
          onPress={() => router.push('/BuscarMascota')}
        >
          <Image source={require('../assets/images/Search.png')} style={styles.iconoBoton} />
          <Text style={styles.textoBoton}>Buscar Mascota</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botonSecundario}
          onPress={() => router.push('/publicarMascota')}
        >
          <Image source={require('../assets/images/PlusCircle.png')} style={styles.iconoBoton} />
          <Text style={styles.textoBoton}>Publicar nuevo anuncio</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botonSecundario}
          onPress={() => router.push('/misAnuncios')}>
          <Image source={require('../assets/images/File text.png')} style={styles.iconoBoton} />
          <Text style={styles.textoBoton}>Ver mis anuncios</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.botonSecundario}
          onPress={() => router.push('/MisMensajes')}>
          <Image source={require('../assets/images/Message square.png')} style={styles.iconoBoton} />
          <Text style={styles.textoBoton}>
            Ver mensajes <Text style={styles.mensajes}>2</Text>
          </Text>
        </TouchableOpacity>

        <Image source={require('../assets/images/BuscaDog4.png')} style={styles.imagenPerro} />

        <TouchableOpacity
          style={styles.botonFlotante}
          onPress={() => router.push('/publicarMascota')}>
          <Image source={require('../assets/images/PlusCircle.png')} style={styles.iconoFlotante} />
        </TouchableOpacity>
      </ScrollView>

      {/* Barra de navegación */}
      <View style={styles.tabBar}>
        <TouchableOpacity>
          <Image source={require('../assets/images/Home.png')} style={styles.iconoTab} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/explorarMascotas')}>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 32,
    height: 32,
  },
  appName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#000',
  },
  iconoNotificacion: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  scrollContent: {
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  botonDestacado: {
    backgroundColor: '#2F80ED',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  textoBotonDestacado: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  botonSecundario: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f4f4f4',
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },
  iconoBoton: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  textoBoton: {
    fontSize: 15,
    color: '#000',
  },
  mensajes: {
    color: '#DAA520',
    fontWeight: 'bold',
  },
  imagenPerro: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 20,
  },
  botonFlotante: {
    position: 'absolute',
    right: 20,
    bottom: 80,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 10,
    elevation: 3,
  },
  iconoFlotante: {
    width: 32,
    height: 32,
  },
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
  saludoContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  saludo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginTop: 8,
  },
  menuDesplegable: {
    position: 'absolute',
    top: 70,
    right: 20,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    zIndex: 999,
  },
  menuItem: {
    paddingVertical: 8,
    fontSize: 14,
  },
});
