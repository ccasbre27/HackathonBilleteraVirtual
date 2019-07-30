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
      dataSource: {}
    };
  }

  componentDidMount () {



    let items = [{ id: 1, desc: 'Pago Kolbi', fecha: '10/09/19', monto: '-$9800', iban: 102000009870053110, image: require('../images/fonabe_logo.jpg') }, 
                { id: 2, desc: 'Nova Cinemas', fecha: '11/09/19', monto: '-$12000', iban: 102000009870053110, image: require('../images/imas_logo.jpg') }, 
                { id: 3, desc: 'Burguer King', fecha: '10/09/19', monto: '+$4500', iban: 102000009270053110, image: require('../images/inamu_logo.jpg') },
                { id: 4, desc: 'Mc Donalds', fecha: '10/09/19', monto: '-$2600', iban: 102000009873053110, image: require('../images/icoder_logo.jpg') },
                { id: 5, desc: 'Comtrasuli', fecha: '10/09/19', monto: '-$1500', iban: 102000009450053110, image: require('../images/banhvi_logo.png') },
                { id: 6, desc: 'Librería Internacional', fecha: '10/09/19', monto: '-$17890', iban: 102000009110053110, image: require('../images/conapam_logo.jpg') },
                { id: 7, desc: 'Autobuses TRACOPA', fecha: '10/09/19', monto: '-$500', iban: 102000009870053110, image: require('../images/conapdis_logo.jpg') },
                { id: 8, desc: 'Miniterio de Trabajo', fecha: '10/09/19', monto: '+$450', iban: 102000009870053110, image: require('../images/mtss_logo.jpg') },
                { id: 9, desc: 'CCSS', fecha: '10/09/19', monto: '+$100', iban: 102000009870053110, image: require('../images/ccss_logo.png') }
            ];

    this.setState({
      dataSource: items,
    });
  }

  render() {
    return (
      <View style={styles.container}> 
        <Button
          onPress={() => {
            Alert.alert('You tapped the button!');
          }}
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
