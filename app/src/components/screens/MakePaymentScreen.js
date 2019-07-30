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
          <TextInput style={{ width: 200, borderColor: 'gray', borderWidth: 1}} />

          <Button
            title="Generar QR"
            accessibilityLabel="Learn more about this purple button"
            style={{ width: 200, margin: 5 }} />
            
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5059ae',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
    color: '#fff'
  },
  container_inline: {
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  titleText: {
      fontSize: 20,
      marginBottom: 10,
      color: '#fff',
      padding: 5,
      textAlign: 'center'
  }
})
