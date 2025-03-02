import React from "react"
import{View, Text, StyleSheet,ViewBase,Image} from "react-native"


export default function Title(){
    return(

        //Header
        <View>
            <Image source={require('../images/logo.png')}  style={styles.logo}/>  
            <Text style={styles.title}> PayPoint </Text>
            <Text style={styles.subtitle}> Pagamentos ágeis na ponta dos seus dedos </Text>
        </View>
        
    );
}

//Estilo----------------------------------------------------------------------------------------------------
const styles = StyleSheet.create({

    container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent:'center',
      alignItems: 'center',

      paddingHorizontal: 10,
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
      elevation: 7,
    },

    title:{
        color: '#007aff',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
    },

    subtitle:{
        color: '#007aff',
        fontSize: 15,
        textAlign: 'center',
        margin:5,
    },

    logo:{
        width: 50,
        height: 50,
    }
});
