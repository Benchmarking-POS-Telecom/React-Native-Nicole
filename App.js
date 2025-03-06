import { StyleSheet, View, Text, Linking, Image} from 'react-native';
import Title from './src/components/title'
import PayMethods from './src/components/payMethods'
import stylesMain from './AppStyles.js'


export default function App() {
  return (
    
    <View style={stylesMain.container}>

      <View  style={stylesMain.logoConteiner}> 
        <Image source={require('./src/components/images/logo.png')}  style={stylesMain.logo}/>  
      </View>

      <View style={stylesMain.backgroudWhite}>  
        <Title/>
      </View>

      <View style={stylesMain.backgroudBlue}>  
        <PayMethods/>
      </View>

      <View>
        < Text style={stylesMain.link} onPress={() => Linking.openURL('https://github.com/Nicolesilvaa')}> 
          By Nilewa 
        </Text> 
      </View>

    </View>
  );
}

