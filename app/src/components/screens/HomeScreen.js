import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image, FlatList
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
      },
      dataSource: {}
    };
  }

  async componentDidMount () {

    const config = await isAccountLinked();
    if(config){
      this.setState({
        config
      })
    }
    console.log(config);

    let items = [{ id: 1, name: 'FONABE', saldo: '+$74.345.00', iban: 102000009870053110, image: require('../images/fonabe_logo.jpg') }, 
                { id: 2, name: 'IMAS', saldo: '$500', iban: 102000009870053110, image: require('../images/imas_logo.jpg') }, 
                { id: 3, name: 'INAMU', saldo: '$0', iban: 102000009870053110, image: require('../images/inamu_logo.jpg') },
                { id: 4, name: 'ICODER', saldo: '$0', iban: 102000009870053110, image: require('../images/icoder_logo.jpg') },
                { id: 5, name: 'BANHVI', saldo: '$0', iban: 102000009870053110, image: require('../images/banhvi_logo.png') },
                { id: 6, name: 'CONAPAM', saldo: '$0', iban: 102000009870053110, image: require('../images/conapam_logo.jpg') },
                { id: 7, name: 'CONAPDIS', saldo: '$0', iban: 102000009870053110, image: require('../images/conapdis_logo.jpg') },
                { id: 8, name: 'Miniterio de Trabajo', iban: 102000009870053110, saldo: '$0', image: require('../images/mtss_logo.jpg') },
                { id: 9, name: 'CCSS', saldo: '$0', iban: 102000009870053110, image: require('../images/ccss_logo.png') }
            ];

    this.setState({
      dataSource: items,
    });
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
      
          <FlatList
            style={styles.container}
            data={this.state.dataSource}
            renderItem={({ item }) => (

              <View style={styles.card}
                numColumns={2}>
                
                <View
                  numColumns={1} >
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.body}>{item.saldo}</Text>
                  <Text style={styles.accountNumber}>{item.iban}</Text>
                </View>

                <Image 
                  style={styles.imageThumbnail} 
                  source = {item.image}
                  numColumns={1} />
              </View>
            )}
            //Setting the number of column
            numColumns={1}
            keyExtractor={(item, index) => index}
          />
     
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
    flexDirection: 'row', 
    margin: 5, 
    borderRadius:10, 
    backgroundColor: '#FFF', 
    padding: 10,
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    padding: 10,
    color: '#000'
  },
  accountNumber: {
    fontSize: 14,
    padding: 10,
    color: '#808080'
  },
  imageThumbnail: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 75,
    width: 75,
    flex: 1,
      resizeMode: 'contain'
  },
  body: {
      fontSize: 16,
      padding: 10,
      color: '#000'
    }
})
