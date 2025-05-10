import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function PublicarMascota() {
  const [nombre, setNombre] = useState('');
  const [tipo, setTipo] = useState('');
  const [raza, setRaza] = useState('');
  const [tamano, setTamano] = useState('');
  const [color, setColor] = useState('');
  const [sexo, setSexo] = useState('');
  const [ubicacion, setUbicacion] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [recompensa, setRecompensa] = useState(false);

  const router = useRouter();

  const camposCompletos = () => {
    return (
      nombre.trim() !== '' &&
      tipo !== '' &&
      raza !== '' &&
      tamano !== '' &&
      color !== '' &&
      sexo !== '' &&
      ubicacion.trim() !== '' &&
      fecha.trim() !== '' &&
      hora.trim() !== '' &&
      descripcion.trim() !== ''
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logoContainer}>
            <Image source={require('../assets/images/logo.png')} style={styles.logo} />
            <Text style={styles.logoText}>BuscaMascotas</Text>
          </View>
          <Image source={require('../assets/images/Bell2.png')} style={styles.bell} />
          <Image source={require('../assets/images/GenericAvatar.png')} style={styles.avatar} />
        </View>

        <Text style={styles.title}>Publicar mascotas perdidas</Text>

        <Text style={styles.label}>Nombre:</Text>
        <TextInput style={styles.input} value={nombre} onChangeText={setNombre} placeholder="Nombre de la mascota" />

        <Text style={styles.label}>Tipo de Mascota:</Text>
        <View style={styles.pickerContainer}>
          <Picker selectedValue={tipo} onValueChange={setTipo} style={styles.picker}>
            <Picker.Item label="Selecciona" value="" />
            <Picker.Item label="Perro" value="Perro" />
            <Picker.Item label="Gato" value="Gato" />
          </Picker>
        </View>

        <View style={styles.row}>
          <View style={styles.halfInput}>
            <Text style={styles.label}>Raza:</Text>
            <View style={styles.pickerContainer}>
              <Picker selectedValue={raza} onValueChange={setRaza} style={styles.picker}>
                <Picker.Item label="Selecciona" value="" />
                <Picker.Item label="Golden Retriever" value="Golden Retriever" />
                <Picker.Item label="Mestizo" value="Mestizo" />
              </Picker>
            </View>
          </View>

          <View style={styles.halfInput}>
            <Text style={styles.label}>Tamaño:</Text>
            <View style={styles.pickerContainer}>
              <Picker selectedValue={tamano} onValueChange={setTamano} style={styles.picker}>
                <Picker.Item label="Selecciona" value="" />
                <Picker.Item label="Grande" value="Grande" />
                <Picker.Item label="Pequeño" value="Pequeño" />
              </Picker>
            </View>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.halfInput}>
            <Text style={styles.label}>Color:</Text>
            <View style={styles.pickerContainer}>
              <Picker selectedValue={color} onValueChange={setColor} style={styles.picker}>
                <Picker.Item label="Selecciona" value="" />
                <Picker.Item label="Beige" value="Beige" />
                <Picker.Item label="Negro" value="Negro" />
              </Picker>
            </View>
          </View>

          <View style={styles.halfInput}>
            <Text style={styles.label}>Sexo:</Text>
            <View style={styles.pickerContainer}>
              <Picker selectedValue={sexo} onValueChange={setSexo} style={styles.picker}>
                <Picker.Item label="Selecciona" value="" />
                <Picker.Item label="Macho" value="Macho" />
                <Picker.Item label="Hembra" value="Hembra" />
              </Picker>
            </View>
          </View>
        </View>

        <Text style={styles.label}>Última ubicación:</Text>
        <TouchableOpacity style={styles.mapaButton} onPress={() => router.push('/marcarUbicacion')}>
          <Text style={styles.textoBoton}>📍 Marcar en Mapa</Text>
        </TouchableOpacity>

        <TextInput style={styles.input} value={ubicacion} onChangeText={setUbicacion} placeholder="Dirección o Zona" />

        <View style={styles.row}>
          <View style={styles.halfInput}>
            <Text style={styles.label}>Fecha:</Text>
            <TextInput style={styles.input} value={fecha} onChangeText={setFecha} placeholder="dd/mm/aaaa" />
          </View>

          <View style={styles.halfInput}>
            <Text style={styles.label}>Hora:</Text>
            <TextInput style={styles.input} value={hora} onChangeText={setHora} placeholder="00:00" />
          </View>
        </View>

        <Text style={styles.label}>Descripción Adicional:</Text>
        <TextInput
          style={[styles.input, { height: 100 }]}
          multiline
          value={descripcion}
          onChangeText={setDescripcion}
          placeholder="Escribe aquí..."
        />

        <View style={styles.row}>
          <TouchableOpacity onPress={() => setRecompensa(!recompensa)}>
            <Text>{recompensa ? '✅' : '⬜'} Ofrezco Recompensa</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.uploadButton} onPress={() => router.push('/subirImagenes')}>
          <Text style={styles.textoBoton}>📷 Subir Imágenes</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.submitButton, { backgroundColor: camposCompletos() ? '#2F80ED' : '#ccc' }]}
          onPress={() => {
            if (camposCompletos()) {
              router.push('/anuncioEnviado');
            } else {
              Alert.alert('Faltan campos', 'Por favor, completa todos los campos obligatorios antes de publicar el anuncio.');
            }
          }}>
          <Text style={styles.textoBoton}>Publicar Anuncio</Text>
        </TouchableOpacity>
      </ScrollView>

      <View style={styles.tabBar}>
        <TouchableOpacity onPress={() => router.push('/sesionIniciada')}>
          <Image source={require('../assets/images/Home.png')} style={styles.iconoTab} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/explorarMascotas')}>
          <Image source={require('../assets/images/MapPin.png')} style={styles.iconoTab} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push('/misAnuncios')}>
          <Image source={require('../assets/images/File text.png')} style={styles.iconoTab} />
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
  scrollContent: { paddingBottom: 100, paddingHorizontal: 16 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 },
  logoContainer: { flexDirection: 'row', alignItems: 'center' },
  logo: { width: 30, height: 30 },
  logoText: { marginLeft: 8, fontSize: 18, fontWeight: 'bold', color: '#000' },
  bell: { width: 24, height: 24 },
  avatar: { width: 32, height: 32, borderRadius: 16 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  label: { fontWeight: 'bold', marginBottom: 6, marginTop: 12 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 10, marginBottom: 8, backgroundColor: '#fff' },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
    marginBottom: 8,
    paddingHorizontal: 8,
  },
  picker: {
    width: '100%',
    color: '#000',
  },
  row: { flexDirection: 'row', justifyContent: 'space-between', gap: 10 },
  halfInput: { flex: 1 },
  mapaButton: { backgroundColor: '#2F80ED', padding: 10, borderRadius: 8, alignItems: 'center', marginVertical: 8 },
  uploadButton: { backgroundColor: '#2F80ED', padding: 12, borderRadius: 8, alignItems: 'center', marginVertical: 8 },
  submitButton: { padding: 14, borderRadius: 10, alignItems: 'center', marginBottom: 24 },
  textoBoton: { color: '#fff', fontWeight: 'bold' },
  tabBar: {
    flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 60,
    borderTopWidth: 1, borderTopColor: '#ccc', backgroundColor: '#fff'
  },
  iconoTab: { width: 28, height: 28 }
});

