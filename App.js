import { StyleSheet, View } from 'react-native';
import Title from './src/components/title';
import Main from './src/components/main';

const colorIngenicoBrand = 'rgba(25, 182, 221,1)'; 

export default function App() {
  return (
    
    <View style={styles.container}>
        <Title />

      <View style={styles.backgroudBlue}>  
        <Main/>
      </View>

    </View>
  );
}

const commonStyles = {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  justifyContent: 'space-between', 

};

const styles = StyleSheet.create({
  container:{

    commonStyles,
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },

  backgroudBlue: {
    commonStyles,
    flex: 1,
    backgroundColor: colorIngenicoBrand, 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 10,

  },
});