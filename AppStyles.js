import { StyleSheet } from "react-native";

const colorIngenicoBrand = 'rgba(25, 182, 221,1)'
const stylesMain = StyleSheet.create({

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
    backgroundColor: colorIngenicoBrand,
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
    backgroundColor: colorIngenicoBrand,

  },

  logo:{
    width: 50,
    height: 50,
    alignSelf: 'center',
    marginBlockStart: 40,
  }

});

export default stylesMain