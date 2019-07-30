import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button, 
  FlatList
} from 'react-native'

export default class ActivityFeedScreen extends React.Component {

  constructor(){
    super()
    this.state = {
      dataSource: []
    };
  }

  async getUserData(id) {
    try {
      let response = await fetch(
        `https://nyxduuu0ki.execute-api.us-east-1.amazonaws.com/v1/trans/1`
      );
      let responseJson = await response.json();
      console.log(responseJson);

    this.setState({
      dataSource: responseJson
    });

      return responseJson;
    } catch (error) {
      return error;
    }
  }

  async UNSAFE_componentWillReceiveProps () {
    debugger;
  }

 async componentWillReceiveProps () {
   debugger;
    console.log(1)
   const data = await this.getUserData(this.props.userId);

  

    this.setState({
      dataSource: data
    });
  }

  render() {
    this.getUserData(this.props.userId);
    return (
      <View style={styles.container}> 
        <Button
          onPress={() => {
                       this.props.navigation.navigate('MakePaymentScreen', {
              userId: this.state.userId
            })
          } }
          title="Realizar pago"
          accessibilityLabel="Learn more about this purple button"
          style={ styles.btn } />

        <FlatList
            style={styles.container}
            data={this.state.dataSource}
            renderItem={({ item }) => (

              <View style={styles.card}
                numColumns={2}>
                
               
                <Text style={styles.title}>{item.desc}</Text>
                <Text style={styles.body}>{item.monto}</Text>
                <Text style={styles.body}>{item.fecha}</Text>
                <Text style={styles.accountNumber}>{item.iban}</Text>
              

              </View>
            )}
            //Setting the number of column
            numColumns={1}
            keyExtractor={(item, index) => index} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5059ae'
  },
  card: {
    flex: 1, 
    flexDirection: 'column', 
    margin: 5, 
    borderRadius:10, 
    backgroundColor: '#FFF', 
    padding: 10,
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#000'
  },
  accountNumber: {
    fontSize: 14,
    color: '#808080'
  },
  imageThumbnail: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlignVertical: 'center',
    height: 75,
    width: 75,
    flex: 1,
      resizeMode: 'contain'
  },
  body: {
      fontSize: 16,
      color: '#000'
    },
  btn: {
    color: '#841584'
  }
})
