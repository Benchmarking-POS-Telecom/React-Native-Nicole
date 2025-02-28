import React from "react"
import{View, StyleSheet,Text, Linking} from "react-native"

const colorIngenicoBrand = 'rgba(25, 182, 221,1)'; 


export default function Main() {
    return (
        <View style={styles.container}>
        
            <View>
                <View style={styles.square} />
                <View style={styles.square} />
            </View>
            
            <View>
                <View style={styles.square} />
                <View style={styles.square} />
            </View>

            <View>
                <Text style={styles.link} onPress={() => Linking.openURL('https://github.com/Nicolesilvaa')}> 
                    By Nilewa 
                </Text> 
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({

    link:{
        color: 'white',
         textDecorationLine: 'underline',
    },

    container: {
        flex: 1,
        flexDirection:'row',
        justifyContent: 'space-between', 
        alignItems: 'center', 
        columnGap: 20,
    },

    square: {
       
        width: 150, 
        height: 150, 
        marginBottom: 10,
        margin: 10, 
        backgroundColor: '#fff', 
        borderRadius: 5, 
        shadowColor: '#000', 
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 7, 
    },
});

