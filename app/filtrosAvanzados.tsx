import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function FiltrosAvanzados() {
  const [provincia, setProvincia] = useState('');
  const [isla, setIsla] = useState('');
  const [tipoMascota, setTipoMascota] = useState('');
  const [raza, setRaza] = useState('');
  const [tamano, setTamano] = useState('');
  const [color, setColor] = useState('');
  const [sexo, setSexo] = useState('');
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/images/logo.png')} style={styles.logo} />
          <Text style={styles.logoText}>BuscaMascotas</Text>
        </View>
        <Image source={require('../assets/images/Bell2.png')} style={styles.bell} />
        <Image source={require('../assets/images/GenericAvatar.png')} style={styles.avatar} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Buscar mascotas perdidas</Text>

        <View style={styles.filtrosContainer}>
          <Text style={styles.label}>Provincia:</Text>
          <Picker selectedValue={provincia} onValueChange={setProvincia} style={styles.campo}>
            <Picker.Item label="Selecciona una opción" value="" />
            <Picker.Item label="Santa Cruz de Tenerife" value="Santa Cruz de Tenerife" />
            <Picker.Item label="Las Palmas de Gran Canaria" value="Las Palmas de Gran Canaria" />
          </Picker>

          <Text style={styles.label}>Isla:</Text>
          <Picker selectedValue={isla} onValueChange={setIsla} style={styles.campo}>
            <Picker.Item label="Selecciona una opción" value="" />
            <Picker.Item label="Tenerife" value="Tenerife" />
            <Picker.Item label="Gran Canaria" value="Gran Canaria" />
          </Picker>

          <Text style={styles.label}>Tipo de Mascota:</Text>
          <Picker selectedValue={tipoMascota} onValueChange={setTipoMascota} style={styles.campo}>
            <Picker.Item label="Selecciona una opción" value="" />
            <Picker.Item label="Perro" value="Perro" />
            <Picker.Item label="Gato" value="Gato" />
          </Picker>

          <View style={styles.row}>
            <View style={styles.halfInput}>
              <Text style={styles.label}>Raza:</Text>
              <Picker selectedValue={raza} onValueChange={setRaza} style={styles.campo}>
                <Picker.Item label="Todos" value="Todos" />
              </Picker>
            </View>
            <View style={styles.halfInput}>
              <Text style={styles.label}>Tamaño:</Text>
              <Picker selectedValue={tamano} onValueChange={setTamano} style={styles.campo}>
                <Picker.Item label="Selecciona" value="" />
                <Picker.Item label="Grande" value="Grande" />
                <Picker.Item label="Pequeño" value="Pequeño" />
              </Picker>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.halfInput}>
              <Text style={styles.label}>Color:</Text>
              <Picker selectedValue={color} onValueChange={setColor} style={styles.campo}>
                <Picker.Item label="Todos" value="Todos" />
              </Picker>
            </View>
            <View style={styles.halfInput}>
              <Text style={styles.label}>Sexo:</Text>
              <Picker selectedValue={sexo} onValueChange={setSexo} style={styles.campo}>
                <Picker.Item label="Macho" value="Macho" />
                <Picker.Item label="Hembra" value="Hembra" />
              </Picker>
            </View>
          </View>

          {/* Botones */}
          <View style={styles.botonesRow}>
            <TouchableOpacity
              style={styles.botonAzul}
              onPress={() => router.push('/FiltrosAplicados')}
            >
              <Text style={styles.textoBlanco}>Aplicar Filtros</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.botonBlanco}>
              <Text style={styles.textoNegro}>Limpiar Filtros</Text>
            </TouchableOpacity>
          </View>
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
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  label: { fontWeight: 'bold', marginBottom: 6, marginTop: 12 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  halfInput: { flex: 1, marginRight: 8 },
  botonesRow: {
    flexDirection: 'row', justifyContent: 'space-between', marginTop: 24, gap: 10
  },
  botonAzul: {
    flex: 1, backgroundColor: '#2F80ED', padding: 12, borderRadius: 8, alignItems: 'center'
  },
  botonBlanco: {
    flex: 1, backgroundColor: '#eee', padding: 12, borderRadius: 8, alignItems: 'center'
  },
  textoBlanco: { color: '#fff', fontWeight: 'bold' },
  textoNegro: { color: '#000', fontWeight: 'bold' },
  tabBar: {
    flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 60,
    borderTopWidth: 1, borderTopColor: '#ccc', backgroundColor: '#fff'
  },
  iconoTab: { width: 28, height: 28 },
  filtrosContainer: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  campo: {
    backgroundColor: '#f4f4f4',
    borderRadius: 6,
    marginBottom: 10,
    color: '#000'
  },
});
