import React from 'react';

import { StyleSheet, View, Image, Text, TouchableOpacity, ScrollView} from 'react-native';

import { Ionicons, MaterialIcons } from '@expo/vector-icons';

// import Home from './src/components/Home';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.row}>
            <Text style={styles.boasVindas}>Olá, Mari</Text>

            <View style={styles.containerIcones}>
                <TouchableOpacity style={styles.elipseIcone}>
                    <Ionicons name="eye-outline" size={25} color="white" />
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.elipseIcone}>
                    <Ionicons name="settings-outline" size={27} color="white" />
                </TouchableOpacity>
            </View>            
        </View>
        <View style={styles.containerContas}>
            <View style={styles.tituloContas}>
                <Image source={require('../images/icone-cartao.png')} />
                <Text style={styles.textoConta2}>Cartão de Crédito</Text>
            </View>

            <Text style={styles.textoConta}>Fatura atual</Text>
            <View style={styles.censurado1}></View>  
        </View>

        <View style={styles.containerContas}>
            <View style={styles.tituloContas}>
                <Image source={require('../images/icone-moedinhas.png')} />
                <Text style={styles.textoConta2}>Conta</Text>
            </View>
            <Text style={styles.textoConta}>Saldo disponível</Text>
            <View style={styles.censurado2}></View>  
        </View>

        <View style={styles.containerFooter}>
            <ScrollView contentContainerStyle={styles.tabContainer} 
                horizontal showsHorizontalScrollIndicator={false}>
                    <View style={styles.tabItem}>
                        <Image source={require('../images/icone-pix.png')} />
                        <Text style={styles.itemFooterText}>Pix</Text>
                    </View>

                    <View style={styles.tabItem}>
                        <Image source={require('../images/icone-barcode.png')} />
                        <Text style={styles.itemFooterText}>Pagar</Text>
                    </View>

                    <View style={styles.tabItem}>
                        <Image source={require('../images/icone-amigos.png')} />
                        <Text style={styles.itemFooterText}>Indicar amigos</Text>
                    </View>

                    <View style={styles.tabItem}>
                        <Image source={require('../images/icon-transferencia.png')} />
                        <Text style={styles.itemFooterText}>Transferir</Text>
                    </View>
            </ScrollView>
        </View>

        
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: '#830AD1',
        paddingTop: 60
    },

    containerIcones: {
        flexDirection: 'row',        
    },
    
    elipseIcone: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 48,
        height: 48,
        backgroundColor: '#8E31D0',
        borderRadius: 100,
        marginHorizontal: 5
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%'  
    },

    boasVindas: {
        width: 150,
        height: 27,

        // fontFamily: 'Inter',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 27,
        letterSpacing: 2,
        color: "#fff"
    },

    containerContas: {
        width: 329,
        height: 155,
        backgroundColor: '#FFFFFF',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingLeft: 25
    },

    containerFooter: {
        flexDirection: 'row',
    },

    tabContainer: {
        paddingLeft: 5,
        paddingRight: 20
    },

    tabItem: {
        width: 85,
        height: 85,
        backgroundColor: '#8E31D0',
        borderRadius: 3,
        marginLeft: 10,
        padding: 10,
        justifyContent: 'space-between'
    },

    itemFooterText: {
        fontSize: 13,
        color: '#fff'
    },

    censurado1: {
        backgroundColor: '#F2F2F2',
        width: 282,
        height: 49,
        // alignSelf: 'center'
    },

    censurado2: {
        backgroundColor: '#F2F2F2',
        width: 282,
        height: 29,
        // alignSelf: 'center'
    },

    textoConta: {
        width: 150,
        height: 17,
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 14,
        lineHeight: 17,
        letterSpacing: 1,
        color: 'rgba(0, 0, 0, .6)',
        marginVertical: 15
    },

    textoConta2: {
        // height: 17,
        // fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 16,
        lineHeight: 17,
        letterSpacing: .5,
        color: 'rgba(0, 0, 0, .6)',
        marginLeft: 15
    },

    tituloContas: {
        flexDirection: 'row'
    }
});
