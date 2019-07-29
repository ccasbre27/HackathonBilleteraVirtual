import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'
import {AsyncStorage} from 'react-native'

export const isAccountLinked = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem("ACCOUNT_LINKED")
      .then(res => {
        if (res !== null) {
          resolve(res);
        } else {
          resolve(false);
        }
      })
      .catch(err => reject(err));
  });
};

export default class HomeScreen extends React.Component {

  constructor(){
    super()
    this.state = {
      config: { 
      }
    }
  }

  async componentDidMount () {

    const config = await isAccountLinked();
    if(config){
      this.setState({
        config
      })
    }
    console.log(config);
  }

  render () {
    const isConfig = this.state.config.length;
console.warn(isConfig)
    if(isConfig === 0){
      return (
        <View style={styles.container}> 
          <Text style={styles.textStyle}>Configure your account</Text>
        </View>
      )
    }

    return (
      <View style={styles.container}> 
        <Text style={styles.textStyle}>Home `${isConfig}` x   </Text>
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
  }
})
