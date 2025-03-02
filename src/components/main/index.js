import React from "react"
import{View, StyleSheet, Image, Text} from "react-native"

const colorIngenicoBrand = 'rgba(25, 182, 221,1)'; 


export default function Main() {
    return (

        <View style={styles.container}>

            //Texto do corpo
            <View style={styles.textBody}> 
                <Text style={styles.mainText}> Olá ! Escolha o método de pagamento </Text>
            </View>

            // Conteúdo principal, Quadrados com formas de pagamento
            <View style={styles.body}>
                <View>
                    <View style={styles.square}>
                        <Image source={require('../images/cartao.png')}  style={styles.icon}/> 
                        <Text style={styles.iconText}> Cartão </Text>
                    </View>

                    <View style={styles.square}>
                        <Image source={require('../images/aproximacao.png')}  style={styles.icon}/>
                        <Text style={styles.iconText}> Aproximação </Text>
                    </View>
                </View>

                <View>
                    <View style={styles.square}>
                        <Image source={require('../images/pix.png')}  style={styles.icon}/>
                        <Text style={styles.iconText}> Pix </Text>
                    </View>

                    <View style={styles.square}>
                        <Image source={require('../images/conf.png')}  style={styles.icon}/>
                        <Text style={styles.iconText}> Configurações </Text>
                    </View>
                </View>         
            </View>        
        </View>
    );
}

//Estilo----------------------------------------------------------------------------------------------------
const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'flex-start', 
        alignItems: 'center', 
    },

    body:{
        width: '100%',
        flexDirection: 'row', 
        alignItems: 'center', 
        padding: 0.5,
    },

    textBody:{
        flex: 0.5,
        justifyContent: 'center', 
    },

    mainText:{
        color: '#FFF',
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold'
    },

    square: {
        width: 150, 
        height: 150, 
        margin: 10, 
        backgroundColor: '#fff', 
        borderRadius: 5, 
        shadowColor: '#000', 
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 7,    // Sombreamento
        justifyContent: 'center', 
        alignItems: 'center', 
    },

    icon: { 
        padding: 10,
        alignItems: 'center',
        width: 50,
        height: 50,
      },

    iconText:{
        color: '#007aff',
        fontSize: 15,
        textAlign: 'center',
        marginTop: 5,
        fontWeight: 'bold'
      },
});

