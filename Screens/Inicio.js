import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';

const Inicio = () => {
    return (
        <View style={styles.container}>
        <Image
        style={styles.tinyLogo}
        source={{uri:'https://static.vecteezy.com/system/resources/previews/001/206/141/non_2x/doctors-png.png'}}
      />
        <Text>Bienvenidos </Text>
        </View>
    )
}

export default Inicio

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    tinyLogo:{
      width:60,
      height:60
    }
});
  