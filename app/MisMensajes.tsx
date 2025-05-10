import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function MisMensajes() {
  const router = useRouter();
  const [bellActiva, setBellActiva] = useState(false);

  const chats = [
    {
      id: 1,
      nombre: 'Paulo - Propietario(a) de Kira',
      mensaje: 'Entiendo, gracias por la información!',
      hora: '10:13',
      imagen: require('../assets/images/Kira.png'),
      noLeido: true,
    },
    {
      id: 2,
      nombre: 'Carlos - Propietario(a) de Toby',
      mensaje: 'La recompensa que ofrecemos es de...',
      hora: '21:16',
      imagen: require('../assets/images/toby.png'),
      noLeido: true,
    },
    {
      id: 3,
      nombre: 'Ana - Propietario(a) de Pipo',
      mensaje: 'Sí, claro! Te la envío por el chat',
      hora: '10:22',
      imagen: require('../assets/images/pipo.png'),
      noLeido: false,
    },
    {
      id: 4,
      nombre: 'Lucia - Propietario(a) de Mia',
      mensaje: '¡Qué Alegría! ¿Puedes mantenerla a salvo...',
      hora: '14:35',
      imagen: require('../assets/images/mia.png'),
      noLeido: false,
    },
  ];

  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Encabezado */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image source={require('../assets/images/logo.png')} style={styles.logo} />
            <Text style={styles.logoText}>BuscaMascotas</Text>
          </View>
          <TouchableOpacity onPress={() => setBellActiva(!bellActiva)}>
            <Image
              source={bellActiva
                ? require('../assets/images/Bell2.png')
                : require('../assets/images/Bell.png')}
              style={styles.bell}
            />
          </TouchableOpacity>
          <Image source={require('../assets/images/GenericAvatar.png')} style={styles.avatar} />
        </View>

        <Text style={styles.titulo}>Mis Mensajes</Text>
        <Text style={styles.subtitulo}>Aquí puedes ver los mensajes de tus chats en BuscaMascotas.</Text>

        {chats.map(chat => (
          <TouchableOpacity
            key={chat.id}
            style={styles.card}
            onPress={() => {
              if (chat.id === 3) {
                router.push('/ChatPipo');
              }
            }}
          >
            <Image source={chat.imagen} style={styles.chatImg} />
            <View style={styles.chatTexto}>
              <View style={styles.chatHeader}>
                <Text style={styles.chatNombre}>{chat.nombre}</Text>
                <Text style={styles.chatHora}>{chat.hora}</Text>
              </View>
              <Text style={styles.chatMensaje}>{chat.mensaje}</Text>
              {chat.noLeido && (
                <Image source={require('../assets/images/Mail.png')} style={styles.noLeido} />
              )}
            </View>
          </TouchableOpacity>
        ))}

        <TouchableOpacity style={styles.verMas}>
          <Text style={styles.verMasTexto}>Ver más</Text>
        </TouchableOpacity>

        <Image source={require('../assets/images/BuscaDog8.png')} style={styles.perrito} />
      </ScrollView>

      {/* Barra inferior fija */}
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
        <TouchableOpacity onPress={() => router.push('/BuscarMascota')}>
          <Image source={require('../assets/images/Search.png')} style={styles.iconoTab} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/MisMensajes')}>
          <Image source={require('../assets/images/Message square.png')} style={styles.iconoTab} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#fff'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16,
  },
  logoContainer: { flexDirection: 'row', alignItems: 'center' },
  logo: { width: 30, height: 30 },
  logoText: { marginLeft: 8, fontSize: 18, fontWeight: 'bold', color: '#000' },
  bell: { width: 24, height: 24, marginRight: 10 },
  avatar: { width: 32, height: 32, borderRadius: 16 },
  titulo: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 10 },
  subtitulo: { textAlign: 'center', marginVertical: 10, color: '#555' },
  card: {
    flexDirection: 'row', alignItems: 'flex-start', backgroundColor: '#f5faff',
    marginHorizontal: 16, marginVertical: 8, borderRadius: 10, padding: 10, elevation: 2
  },
  chatImg: { width: 50, height: 50, borderRadius: 8 },
  chatTexto: { flex: 1, marginLeft: 10 },
  chatHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  chatNombre: { fontWeight: 'bold', fontSize: 14, flex: 1 },
  chatHora: { color: '#777', fontSize: 12, marginLeft: 5 },
  chatMensaje: { marginTop: 4, color: '#333', fontSize: 13 },
  noLeido: { width: 16, height: 16, marginTop: 4 },
  verMas: {
    backgroundColor: '#2979FF', marginHorizontal: 100, marginTop: 20, padding: 10, borderRadius: 8,
    alignItems: 'center'
  },
  verMasTexto: { color: '#fff', fontWeight: 'bold' },
  perrito: { width: 90, height: 90, alignSelf: 'center', marginTop: 20 },
  tabBar: {
    flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 60,
    borderTopWidth: 1, borderTopColor: '#ccc', backgroundColor: '#fff'
  },
  iconoTab: { width: 26, height: 26 }
});
