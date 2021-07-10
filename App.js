import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ImageBackground, Image, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.containerBackground}>
      <ImageBackground style={styles.background}
              source={require('./src/assets/bg3.png')} />

      <View style={styles.container}>
        <Image style={styles.logo} source={require('./src/assets/vs.png')} />
      <Text style={{color: "#fff"}}>oi</Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  containerBackground: {
    flex: 1,
    position: 'relative'
  },

  background: {
    width: '100%', 
    height: '100%',
    position: 'absolute'
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 60, 
    height: 32,
    zIndex: -1
  },

});
