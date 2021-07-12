import React from 'react';
import { StyleSheet, Text, ImageBackground, Image, View, TouchableOpacity} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

export default function Home({ navigation }) {
  return (
    <View style={styles.containerBackground}>
      <ImageBackground style={styles.background}
              source={require('../images/bg-home.png')} />

      <View style={styles.container}>
        <View style={styles.row}>
          <Image style={styles.logo} source={require('../images/logo.png')} />
          
          <TouchableOpacity style={styles.botaoPaises}>
            <Text style={styles.botaoPaisesText}>Brasil</Text>
            <AntDesign style={styles.botaoPaisesSeta} name="down" size={11} color="black" />
          </TouchableOpacity>
        </View>
        
        <Text style={styles.fraseEfeito}>Um mundo financeiro sem complexidades</Text>
        
        <TouchableOpacity style={styles.botaoLogin}>
            <Text style={styles.textoBotaoLogin}>COMEÇAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.containerBotaoEntrar}
          onPress={() => navigation.navigate('HomeLogada')}>
            <Text style={styles.botaoEntrar}>Entrar na minha conta</Text>
            <AntDesign style={styles.setaEntrar} name="right" size={6} color="white" />
        </TouchableOpacity>
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
    justifyContent: 'flex-start',
    marginTop: 60
  },

  logo: {
    width: 60, 
    height: 32
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',    
  },

  botaoPaises: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(89, 89, 89, 0.3)',
    borderRadius: 19,
    width: 94,
    height: 34,
  },

  botaoPaisesText: {
    // fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 21,
    color: 'rgba(255, 255, 255, .6)',
    marginRight: 5
  },

  botaoPaisesSeta: {    
    color: 'rgba(255, 255, 255, .6)',
  },

  fraseEfeito: {
    width: 290,
    height: 123,
    // fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 34,
    lineHeight: 41,
    letterSpacing: 1.5,
    alignSelf: 'flex-start',
    marginLeft: 25,

    color: '#FFFFFF',

    marginTop: 190
  },

  botaoLogin: {
    width: 312,
    height: 48,
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30
  },

  textoBotaoLogin: {
    // width: 90,
    height: 18,
    fontWeight: 'bold',
    fontSize: 13,
    lineHeight: 18,
    color: '#8C1AB6'
  },

  botaoEntrar: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  containerBotaoEntrar: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },

  setaEntrar: {
    marginLeft: 3,
    marginTop: 4
  }
});
