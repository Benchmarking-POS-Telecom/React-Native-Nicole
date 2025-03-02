import { StyleSheet, View, Text, Linking} from 'react-native';
import Title from './src/components/title';
import Main from './src/components/main';

const colorIngenicoBrand = 'rgba(25, 182, 221,1)'; 

export default function App() {
  return (
    
    <View style={styles.container}>


      <View style={styles.backgroudWhite}>  
        <Title/>
      </View>

      <View style={styles.backgroudBlue}>  
        <Main/>
      </View>


      <View>
        < Text style={styles.link} onPress={() => Linking.openURL('https://github.com/Nicolesilvaa')}> 
          By Nilewa 
        </Text> 
      </View>

    </View>
  );
}

//Estilo----------------------------------------------------------------------------------------------------
const styles = StyleSheet.create({

  container: {
    flex: 1,
  },

  backgroudWhite: {
    flex: 0.2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
 
  backgroudBlue: {
    flex: 1,
    backgroundColor: 'rgba(25, 182, 221, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 40, 
    borderTopRightRadius: 40,
  },

  link:{
    padding: 15,
    fontSize: 16,
    color: '#fff',
    textDecorationLine: 'underline',
    textAlign: 'center',
    backgroundColor: 'rgba(25, 182, 221, 1)',

  },

});