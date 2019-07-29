import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

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
  render() {
    
    return (
      <View style={styles.container}> 
        <Text style={styles.textStyle}>Home</Text>
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
