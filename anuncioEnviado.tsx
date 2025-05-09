import { useRouter } from 'expo-router';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

export default function AnuncioEnviado() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/images/logo.png')} style={styles.logo} />
          <Text style={styles.titulo}>BuscaMascotas</Text>
        </View>
        <Image source={require('../assets/images/Bell.png')} style={styles.icono} />
        <Image source={require('../assets/images/GenericAvatar.png')} style={styles.avatar} />
      </View>

      {/* Cuerpo */}
      <Text style={styles.tituloPrincipal}>Tu anuncio ha sido enviado correctamente.</Text>
      
      <View style={styles.bloque}>
        <Text style={styles.subtitulo}>¡Gracias por tu publicación!</Text>
        <Text style={styles.descripcion}>
          Tu anuncio ha sido recibido y será verificado por nuestro equipo.
        </Text>
      </View>

      <View style={styles.bloque}>
        <Text style={styles.estado}>
          Estado: <Text style={styles.estadoBold}>En revisión.</Text>
        </Text>
        <Text style={styles.descripcion}>
          Estamos comprobando que la información sea clara y segura para todos los usuarios.
        </Text>
      </View>

      <View style={styles.bloque}>
  <View style={styles.fila}>
    <Text style={styles.subtitulo}>¿Y ahora qué?</Text>
    <Image source={require('../assets/images/Mail.png')} style={[styles.iconoCorreo, { marginLeft: 8 }]} />
  </View>
  <Text style={[styles.descripcion, { textAlign: 'center', marginTop: 10 }]}>
    Te enviaremos un correo cuando tu publicación esté activa y visible.
  </Text>
</View>

      {/* Botón */}
      <TouchableOpacity style={styles.botonAzul} onPress={() => router.push('/sesionIniciada')}>
        <Text style={styles.textoBoton}>Volver al Inicio</Text>
      </TouchableOpacity>

      {/* Imagen del perrito */}
      <Image source={require('../assets/images/Buscadog7.png')} style={styles.perrito} />

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
        <TouchableOpacity onPress={() => router.push('/MisMensajes')}>
                  <Image source={require('../assets/images/Message square.png')} style={styles.iconoTab} />
                </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  logo: {
    width: 30,
    height: 30,
    marginRight: 8
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  icono: {
    width: 24,
    height: 24,
    marginRight: 12
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16
  },
  tituloPrincipal: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center'
  },
  bloque: {
    marginBottom: 20
  },
  subtitulo: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 6
  },
  descripcion: {
    fontSize: 14,
    lineHeight: 20
  },
  estado: {
    fontSize: 14,
    marginBottom: 6
  },
  estadoBold: {
    fontWeight: 'bold'
  },
  fila: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10
  },
  iconoCorreo: {
    width: 24,
    height: 24,
    marginTop: 2
  },
  botonAzul: {
    backgroundColor: '#2979FF',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30
  },
  textoBoton: {
    color: '#fff',
    fontWeight: 'bold'
  },
  perrito: {
    width: 110,
    height: 110,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 20
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
    width: 26,
    height: 26
  }
});
