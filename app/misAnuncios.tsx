import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

// Tipado explícito para los estados de anuncio
type EstadoAnuncio = 'Activo' | 'En revisión' | 'Desactivado';

export default function MisAnuncios() {
  const router = useRouter();
  const [filtro, setFiltro] = useState('Todos');

  const anuncios: {
    nombre: string;
    raza: string;
    ubicacion: string;
    fecha: string;
    estado: EstadoAnuncio;
    recompensa: boolean;
    imagen: any;
    rutaMapa: string;
  }[] = [
    {
      nombre: 'Pipo',
      raza: 'Golden Retriever',
      ubicacion: 'Av. Los Majuelos, Santa Cruz de Tenerife',
      fecha: '12/03/2025',
      estado: 'Activo',
      recompensa: true,
      imagen: require('../assets/images/pipo.png'),
      rutaMapa: '/mapaPipo'
    },
    {
      nombre: 'Caramelo',
      raza: 'Pastor Alemán',
      ubicacion: 'Calle Molinos de San Benito - San Cristóbal de la Laguna',
      fecha: '13/03/2025',
      estado: 'En revisión',
      recompensa: true,
      imagen: require('../assets/images/caramelo.png'),
      rutaMapa: ''
    },
    {
      nombre: 'Lilly',
      raza: 'Doméstico',
      ubicacion: 'Av. Juan Carlos, Los Cristianos - Arona',
      fecha: '15/04/2025',
      estado: 'Desactivado',
      recompensa: false,
      imagen: require('../assets/images/Lilly.png'),
      rutaMapa: ''
    }
  ];

  const coloresEstado: Record<EstadoAnuncio, string> = {
    'Activo': '#FFE699',
    'En revisión': '#d4d4d4',
    'Desactivado': '#e0e0e0'
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/images/logo.png')} style={styles.logo} />
          <Text style={styles.logoText}>BuscaMascotas</Text>
        </View>
        <Image source={require('../assets/images/Bell.png')} style={styles.bell} />
        <Image source={require('../assets/images/GenericAvatar.png')} style={styles.avatar} />
      </View>
      <Text style={styles.titulo}>Mis Anuncios</Text>
      {/* Filtro barra */}
      <View style={styles.filtrosContainer}>
        {['Todos', 'Activos', 'En revisión', 'Finalizados'].map(f => (
          <TouchableOpacity
            key={f}
            style={[styles.filtro, filtro === f && styles.filtroActivo]}
            onPress={() => setFiltro(f)}>
            <Text style={filtro === f ? styles.textoActivo : styles.textoFiltro}>{f}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.scroll}>
        {anuncios.map((a, i) => (
          <View key={i} style={styles.tarjeta}>
            <Image source={a.imagen} style={styles.imagenMascota} />
            <View style={styles.info}>
              <Text><Text style={styles.negrita}>Nombre:</Text> {a.nombre}</Text>
              <Text><Text style={styles.negrita}>Raza:</Text> {a.raza}</Text>
              <Text><Text style={styles.negrita}>Última vez visto:</Text> {a.ubicacion}</Text>
              <Text><Text style={styles.negrita}>Fecha:</Text> {a.fecha}</Text>
              <TouchableOpacity><Text style={styles.ver}>Ver anuncio completo</Text></TouchableOpacity>
              {a.estado === 'Desactivado' && <Text style={styles.encontrada}>✅ Mascota encontrada</Text>}
              {a.recompensa && <Text style={styles.recompensa}>🎯 Recompensa Ofrecida</Text>}
              <View style={styles.botonesRow}>
                <TouchableOpacity style={styles.boton}><Text style={styles.textoBoton}>Editar</Text></TouchableOpacity>
                <TouchableOpacity style={styles.boton}><Text style={styles.textoBoton}>Desactivar</Text></TouchableOpacity>
                <TouchableOpacity
                  style={styles.boton}
                  onPress={() => {
                    if (a.rutaMapa) {
                      router.push(a.rutaMapa as any);
                    }
                  }}>
                  <Text style={styles.textoBoton}>Mapa</Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.estadoContenedor, { backgroundColor: coloresEstado[a.estado] }]}>
                <Text style={styles.estadoTexto}>{a.estado}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Botón flotante */}
      <TouchableOpacity
        style={styles.botonFlotante}
        onPress={() => router.push('/publicarMascota')}>
        <Image source={require('../assets/images/PlusCircle.png')} style={styles.iconoFlotante} />
      </TouchableOpacity>

      {/* Barra inferior */}
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
  header: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16,
  },
  logoContainer: { flexDirection: 'row', alignItems: 'center' },
  logo: { width: 30, height: 30 },
  logoText: { marginLeft: 8, fontSize: 18, fontWeight: 'bold', color: '#000' },
  bell: { width: 24, height: 24, marginRight: 10 },
  avatar: { width: 32, height: 32, borderRadius: 16 },
  filtrosContainer: {
    flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10, paddingHorizontal: 5
  },
  filtro: {
    paddingHorizontal: 10, paddingVertical: 6, borderRadius: 10, backgroundColor: '#eee'
  },
  filtroActivo: { backgroundColor: '#2979FF' },
  textoFiltro: { color: '#000' },
  textoActivo: { color: '#fff', fontWeight: 'bold' },
  scroll: { paddingHorizontal: 16, paddingBottom: 120 },
  tarjeta: {
    backgroundColor: '#f9f9f9', borderRadius: 10, padding: 10, marginBottom: 20, flexDirection: 'row', gap: 10
  },
  imagenMascota: { width: 80, height: 80, borderRadius: 6 },
  info: { flex: 1, position: 'relative' },
  negrita: { fontWeight: 'bold' },
  ver: { color: '#2F80ED', marginTop: 6 },
  recompensa: { marginTop: 4, fontSize: 12, color: '#DAA520' },
  encontrada: { marginTop: 4, fontSize: 12, color: 'green' },
  botonesRow: { flexDirection: 'row', marginTop: 10, gap: 10, flexWrap: 'wrap' },
  boton: { backgroundColor: '#2F80ED', paddingVertical: 6, paddingHorizontal: 10, borderRadius: 8 },
  textoBoton: { color: '#fff', fontWeight: 'bold' },
  estadoContenedor: { position: 'absolute', top: 0, right: 0, borderRadius: 6, paddingHorizontal: 8 },
  estadoTexto: { fontSize: 12, fontWeight: 'bold' },
  botonFlotante: {
    position: 'absolute', bottom: 80, right: 20, backgroundColor: '#fff', borderRadius: 30, padding: 10,
    elevation: 5
  },
  iconoFlotante: { width: 40, height: 40 },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 4,
    textAlign: 'center',
    color: '#000'
  },  
  tabBar: {
    flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', height: 60,
    borderTopWidth: 1, borderTopColor: '#ccc', backgroundColor: '#fff'
  },
  iconoTab: { width: 26, height: 26 }
  
});
