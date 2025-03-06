import React from "react"
import{View, Image, Text} from "react-native"
import styles from './styles.js'


const colorIngenicoBrand = 'rgba(25, 182, 221,1)'; 


const PayMethods = () => {
    return (

        <View style={styles.container}>

            {/* Texto do corpo */}
            <View style={styles.textBody}> 
                <Text style={styles.mainText}> Olá ! Escolha o método de pagamento </Text>
            </View>

             {/* Conteúdo principal, Quadrados com formas de pagamento */}
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

export default PayMethods;