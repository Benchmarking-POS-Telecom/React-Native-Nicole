import{ StyleSheet} from "react-native"

const styles = StyleSheet.create({

    container: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 10,
    },

    title:{
        color: '#007aff',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 2.5, 
        textShadowColor: '#007aff', // Cor da sombra
        textShadowOffset: { width: 0.5, height: 0.5 }, // Deslocamento da sombra
        textShadowRadius: 2, // Raio da sombra
    },

    subtitle:{
        color: '#007aff',
        fontSize: 15,
        textAlign: 'center',
        margin:1,
        textShadowColor: '#007aff', // Cor da sombra
        textShadowOffset: { width: 0.2, height: 0.2 }, // Deslocamento da sombra
        textShadowRadius: 2, // Raio da sombra
    },
});

export default styles;