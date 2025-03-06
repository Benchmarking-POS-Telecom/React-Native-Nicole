import React from "react"
import{View, Text} from "react-native"
import styles from './styles.js'


const Title = () => {
    return(

        //Header
        <View>
            <Text style={styles.title}> PayPoint </Text>
            <Text style={styles.subtitle}> Pagamentos ágeis na ponta dos seus dedos </Text>   
        </View>
        
    );
};

export default Title;