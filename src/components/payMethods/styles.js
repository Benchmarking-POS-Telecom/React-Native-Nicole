import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start', 
        alignItems: 'center', 
    },

    body:{
        width: '100%',
        flexDirection: 'row', 
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
        fontWeight: 'bold',
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

export default styles;