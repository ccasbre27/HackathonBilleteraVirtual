import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Button
} from 'react-native';

export default class MakePaymentScreen extends React.Component {
  render() {
    return (
      <View style = { styles.container }>
          <Text  style={styles.titleText}>Please enter an amount and click on ok to generate the QR Code</Text>
          <TextInput style={{ width: 200, borderColor: 'black', borderWidth: 1}} />

          <Button
            onPress={()=>{
                fetch('https://nyxduuu0ki.execute-api.us-east-1.amazonaws.com/v1/trans/1', {
                  method: 'POST',
                  header: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                  }
                })

            this.props.navigation.navigate('ActivityFeed', {
              userId: 1
            })

            }}
            title="Pagar"
            accessibilityLabel="Learn more about this purple button"
            style={{ width: 200, margin: 5 }} />
            
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10, 
  },
  container_inline: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
      fontSize: 20,
      marginBottom: 10, 
      padding: 5,
      textAlign: 'center'
  }
})
