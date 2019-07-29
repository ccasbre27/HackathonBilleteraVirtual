import React from 'react'
import {
  StyleSheet,
  View,
  Text,
} from 'react-native'

export default class ActivityFeedScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}> 
        <Text style={styles.textStyle}>Activity Feed</Text>
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
