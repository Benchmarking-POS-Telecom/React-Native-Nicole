import React from "react"
import{View, Text, StyleSheet,ViewBase} from "react-native"


export default function Title(){
    return(

        <View>
            <Text style={styles.title}> PayPoint - Restic36 </Text>
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
    }
});
