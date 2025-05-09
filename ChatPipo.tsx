import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ChatPipo() {
  const router = useRouter();
  const [mensaje, setMensaje] = useState('');
  const [mensajes, setMensajes] = useState([
    {
      tipo: 'recibido',
      texto: 'Hola, creo que he visto a Pipo cerca del parque San Benito',
      hora: '10:15'
    },
    {
      tipo: 'enviado',
      texto: '¡Hola, gracias por informar! ¿Has podido sacar fotos? ¿Podrías enviármelas?',
      hora: '10:20'
    },
    {
      tipo: 'recibido',
      texto: 'Sí claro, te la envío por el chat',
      hora: '10:22'
    }
  ]);

  const enviarMensaje = () => {
    if (mensaje.trim() === '') return;
    const nuevoMensaje = {
      tipo: 'enviado',
      texto: mensaje,
      hora: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMensajes([...mensajes, nuevoMensaje]);
    setMensaje('');
  };

  return (
    <View style={styles.container}>
      {/* Encabezado */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/images/logo.png')} style={styles.logo} />
          <Text style={styles.logoText}>BuscaMascotas</Text>
        </View>
        <Image source={require('../assets/images/Bell.png')} style={styles.bell} />
        <Image source={require('../assets/images/GenericAvatar.png')} style={styles.avatar} />
      </View>

      <Text style={styles.titulo}>Chat con el propietario</Text>
      <TouchableOpacity
  style={styles.verAnuncio}
  onPress={() => router.push('/anuncioPipo')}
>
  <Text style={styles.verAnuncioTexto}>Ver Anuncio Completo</Text>
</TouchableOpacity>


      <View style={styles.pipoContainer}>
        <Image source={require('../assets/images/pipo.png')} style={styles.pipoImagen} />
        <Text style={styles.pipoNombre}>Pipo – Golden Retriever</Text>
        <View style={styles.recompensaTag}>
          <Text style={styles.recompensaTexto}>Recompensa Ofrecida</Text>
        </View>
      </View>

      <ScrollView style={styles.chatBox} contentContainerStyle={{ paddingBottom: 100 }}>
        {mensajes.map((m, index) => (
          <View
            key={index}
            style={m.tipo === 'enviado' ? styles.mensajeEnviado : styles.mensajeRecibido}
          >
            <Text style={styles.textoMensaje}>{m.texto}</Text>
            {m.tipo === 'enviado' ? (
              <View style={styles.filaHoraCheck}>
                <Text style={styles.hora}>{m.hora}</Text>
                <Image source={require('../assets/images/Check.png')} style={styles.checkIcono} />
              </View>
            ) : (
              <Text style={styles.hora}>{m.hora}</Text>
            )}
          </View>
        ))}
      </ScrollView>

      {/* Input de mensaje */}
      <View style={styles.inputContainer}>
        <TouchableOpacity>
          <Image source={require('../assets/images/Paperclip.png')} style={styles.iconoInput} />
        </TouchableOpacity>
        <TextInput
          placeholder="Escribe un Mensaje"
          style={styles.textInput}
          value={mensaje}
          onChangeText={setMensaje}
        />
        <TouchableOpacity>
          <Image source={require('../assets/images/Camera.png')} style={styles.iconoInput} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require('../assets/images/Video.png')} style={styles.iconoInput} />
        </TouchableOpacity>
        <TouchableOpacity onPress={enviarMensaje}>
          <Image source={require('../assets/images/Send.png')} style={styles.iconoInput} />
        </TouchableOpacity>
      </View>

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
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 },
  logoContainer: { flexDirection: 'row', alignItems: 'center' },
  logo: { width: 30, height: 30 },
  logoText: { marginLeft: 8, fontSize: 18, fontWeight: 'bold', color: '#000' },
  bell: { width: 24, height: 24, marginRight: 10 },
  avatar: { width: 32, height: 32, borderRadius: 16 },
  titulo: { fontSize: 18, fontWeight: 'bold', textAlign: 'center' },
  verAnuncio: { alignSelf: 'center', borderWidth: 1, borderColor: '#2979FF', borderRadius: 10, paddingVertical: 6, paddingHorizontal: 12, marginVertical: 10 },
  verAnuncioTexto: { color: '#2979FF', fontWeight: 'bold' },
  pipoContainer: { alignItems: 'center', marginBottom: 10 },
  pipoImagen: { width: 50, height: 50, borderRadius: 25 },
  pipoNombre: { fontWeight: 'bold', fontSize: 16, marginTop: 4 },
  recompensaTag: { backgroundColor: '#FFEB3B', borderRadius: 10, paddingHorizontal: 8, paddingVertical: 4, marginTop: 6 },
  recompensaTexto: { fontSize: 12, fontWeight: 'bold', color: '#000' },
  chatBox: { paddingHorizontal: 16 },
  mensajeRecibido: { alignSelf: 'flex-start', backgroundColor: '#f0f0f0', padding: 10, borderRadius: 10, marginVertical: 4, maxWidth: '80%' },
  mensajeEnviado: { alignSelf: 'flex-end', backgroundColor: '#d0e8ff', padding: 10, borderRadius: 10, marginVertical: 4, maxWidth: '80%' },
  textoMensaje: { fontSize: 14 },
  hora: { fontSize: 10, color: '#666' },
  filaHoraCheck: { flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: 4 },
  checkIcono: { width: 16, height: 16, marginLeft: 4 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', borderTopWidth: 1, borderColor: '#ccc', padding: 10, backgroundColor: '#fff' },
  iconoInput: { width: 24, height: 24, marginHorizontal: 5 },
  textInput: { flex: 1, paddingHorizontal: 10, paddingVertical: 6, backgroundColor: '#f9f9f9', borderRadius: 20 },
  tabBar: { flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 60, borderTopWidth: 1, borderTopColor: '#ccc', backgroundColor: '#fff' },
  iconoTab: { width: 26, height: 26 }
});
