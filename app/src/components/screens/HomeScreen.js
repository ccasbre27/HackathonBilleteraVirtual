import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image, 
  FlatList,
  TextInput,
  Button,
  TouchableOpacity
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
 

  constructor(props) {
    super(props);
    this.state = { 
      isConfigured: false,
      id: '1',
      data: '' 
    };
  }

  async componentDidMount () {
    /*
    const userData = await AsyncStorage.getItem('@MySuperStore:userData');
    if(userData){
      this.setState({
        data: userData,
        isConfigured: true
      })
    }
    */
  }

  async getUserData(id) {
    try {
      let response = await fetch(
        `https://89p2wz20d0.execute-api.us-east-1.amazonaws.com/prod/virtualwallet/${id}`,
      );
      let responseJson = await response.json();
      return responseJson;
    } catch (error) {
      return error;
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
    const { isConfigured, data } = this.state;  
 
    if(!isConfigured){
      return (
        <View  style={{
          margin: 10, 
        }}> 
          <Text style={{
            margin: 10, 
          }}>Ingresa tu numero de cuenta</Text>
          <TextInput
           style={{height: 40, backgroundColor: 'white',marging: 10,  borderColor: 'gray', borderWidth: 1}}
            onChangeText={(id) => this.setState({
              id
            })}
            value={this.state.id}
          /> 
          <Button
            onPress={async () => {
                const user = await this.getUserData(this.state.id);
             //   await AsyncStorage.setItem('@app:userData',  JSON.stringify(data));
               
 
                let items = [
                  { id: 1, name: 'FONABE', saldo: '+$74.345.00', iban: 102000009870053110, image: require('../images/fonabe_logo.jpg') }, 
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
                user: user,
                isConfigured: true
              });
            }}
            title="Listo"
          />
        </View>
      )
    }

    return (
      
      <View>  
         
         <View style={styles.card2}  numColumns={2}>
         
         
          <View numColumns={1} >
                  <Text style={styles.title}>  {this.state.user.first_name} {this.state.last_name} </Text>
                  <Text style={styles.body}>  {this.state.user.email} </Text> 
                </View>
          </View>

          <FlatList
             
            data={this.state.dataSource}
            renderItem={({ item }) => (

              <TouchableOpacity onPress={()=>{
                  this.props.navigation.navigate('ActivityFeed')
              }}>
              <View style={styles.card}  numColumns={2}>
                
                <View numColumns={1} >
                  <Text style={styles.title}>{item.name}</Text>
                  <Text style={styles.body}>{item.saldo}</Text>
                  <Text style={styles.accountNumber}>{item.iban}</Text>
                </View>

                <Image 
                  style={styles.imageThumbnail} 
                  source = {item.image}
                  numColumns={1} />
              </View>
              </TouchableOpacity>
            )}
            //Setting the number of column
            numColumns={1}
            keyExtractor={(item, index) => index}
          />
     
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
    flexDirection: 'row', 
    margin: 5, 
    borderRadius:10, 
    backgroundColor: '#FFF', 
    padding: 10,
    justifyContent: 'center'
  },
  card2: { 
    backgroundColor: 'gray'
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
    textAlignVertical: 'center',
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
});