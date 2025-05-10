import { useRouter } from 'expo-router';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

interface BarraInferiorProps {
  mostrarPlus?: boolean;
  mensajes?: number;
}

export default function BarraInferior({ mostrarPlus = false, mensajes = 0 }: BarraInferiorProps) {
  const router = useRouter();

  return (
    <View style={styles.barra}>
      <TouchableOpacity onPress={() => router.push('/(tabs)/sesionIniciada')}>
        <Image source={require('../../assets/images/Home.png')} style={styles.icono} />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => router.push('/(tabs)/explorarMascotas')}>
        <Image source={require('../../assets/images/MapPin.png')} style={styles.icono} />
      </TouchableOpacity>

      {mostrarPlus ? (
        <TouchableOpacity>
          <Image source={require('../../assets/images/PlusCircle.png')} style={styles.icono} />
        </TouchableOpacity>
      ) : (
        <View style={styles.espacioVacio} />
      )}

      <TouchableOpacity>
        <Image source={require('../../assets/images/File text.png')} style={styles.icono} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={require('../../assets/images/Message square.png')} style={styles.icono} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  barra: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  icono: {
    width: 24,
    height: 24,
  },
  espacioVacio: {
    width: 24,
    height: 24,
  },
});
