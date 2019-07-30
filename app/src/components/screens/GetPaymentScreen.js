import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput
} from 'react-native'

export default class GetPaymentScreen extends React.Component {
  render() {
    return (
      <View style = { styles.container }>
          <Text  style={styles.titleText}>Please scan the QR Code</Text>
          <Image source={require('../images/scan-qr.png')} style={{width: 200, height: 200}} />
          <View style = { styles.container_inline }>
              <Image source={require('../images/audio_icon.png')} style={{  width: 75, height: 75 }}/>
              <Text style={{ fontSize: 17, color: '#fff' }}>  ₡ 2500 </Text> 
          </View>
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
      color: '#fff'
  }
})
