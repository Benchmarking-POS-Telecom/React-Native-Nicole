import React from "react"
import{View, Text, StyleSheet,ViewBase} from "react-native"


export default function Title(){
    return(

        <View>
            <Text style={styles.title}> PayPoint - Restic36 </Text>
        </View>
        
    );
}

const styles = StyleSheet.create({

    container: {
      marginTop: 50,
    },

    title: {

      padding: 50,
      color: '#007aff',
      fontWeight: 'bold',
      fontSize: 20,

    }
});
