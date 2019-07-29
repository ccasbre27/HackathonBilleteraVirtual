import React from 'react';
import { View, TouchableOpacity } from 'react-native'

import { 
  createSwitchNavigator, 
  createStackNavigator ,
  createDrawerNavigator,
  createMaterialTopTabNavigator
} from 'react-navigation'

import { Ionicons } from '@expo/vector-icons';

// Auth stack screen imports
import AuthLoadingScreen from './src/components/screens/AuthLoadingScreen'
import WelcomeScreen from './src/components/screens/WelcomeScreen'
import SignUpScreen from './src/components/screens/SignUpScreen'
import SignInScreen from './src/components/screens/SignInScreen'
import ForgetPasswordScreen from './src/components/screens/ForgetPasswordScreen'

// App stack screen imports
import HomeScreen from './src/components/screens/HomeScreen'
import SettingsScreen from './src/components/screens/SettingsScreen'
import ProfileScreen from './src/components/screens/ProfileScreen'
import MakePaymentScreen from './src/components/screens/MakePaymentScreen'
import GetPaymentScreen from './src/components/screens/GetPaymentScreen'
import ActivityFeed from './src/components/screens/ActivityFeedScreen'
import User from './src/components/screens/UsersScreen'
import Limits from './src/components/screens/LimitsScreen'

// Amplify imports and config
import Amplify from '@aws-amplify/core'
import config from './src/aws-exports'
Amplify.configure(config)

// Configurations and options for the AppTabNavigator
const configurations = {
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons style={{fontSize: 26, color: tintColor}} name="ios-home" />
      )
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({tintColor}) => (
        <Ionicons style={{fontSize: 26, color: tintColor}} name="ios-person" />
      )
    }
  },
  MakePaymentScreen: {
    screen: MakePaymentScreen,
    navigationOptions: {
      tabBarLabel: 'M',
      tabBarIcon: ({tintColor}) => (
        <Ionicons style={{fontSize: 26, color: tintColor}} name="ios-person" />
      )
    }
  },
  GetPaymentScreen: {
    screen: GetPaymentScreen,
    navigationOptions: {
      tabBarLabel: 'G',
      tabBarIcon: ({tintColor}) => (
        <Ionicons style={{fontSize: 26, color: tintColor}} name="ios-person" />
      )
    }
  },
  ActivityFeed: {
    screen: ActivityFeed,
    navigationOptions: {
      tabBarLabel: 'f',
      tabBarIcon: ({tintColor}) => (
        <Ionicons style={{fontSize: 26, color: tintColor}} name="ios-person" />
      )
    }
  },
  User: {
    screen: User,
    navigationOptions: {
      tabBarLabel: 'u',
      tabBarIcon: ({tintColor}) => (
        <Ionicons style={{fontSize: 26, color: tintColor}} name="ios-person" />
      )
    }
  },
  Limits: {
    screen: Limits,
    navigationOptions: {
      tabBarLabel: 'l',
      tabBarIcon: ({tintColor}) => (
        <Ionicons style={{fontSize: 26, color: tintColor}} name="ios-person" />
      )
    }
  },
  Settings: {
    screen: SettingsScreen,
    navigationOptions: {
      tabBarLabel: 'Settings',
      tabBarIcon: ({ tintColor }) => (
        <Ionicons style={{fontSize: 26, color: tintColor}} name="ios-settings" />
      )
    }
  },
}

const options = {
  tabBarPosition: 'bottom',
  swipeEnabled: true,
  animationEnabled: true,
  navigationOptions: {
    tabBarVisible: true
  },
  tabBarOptions: {
    showLabel: true,
    activeTintColor: '#fff',
    inactiveTintColor: '#fff9',
    style: {
      backgroundColor: '#f16f69',
    },
    labelStyle: {
      fontSize: 12,
      fontWeight: 'bold',
      marginBottom: 12,
      marginTop:12,
    },
    indicatorStyle: {
      height: 0,
    },
    showIcon: true,
  }
}

// Bottom App tabs
const AppTabNavigator = createMaterialTopTabNavigator(configurations, options)

// Making the common header title dynamic in AppTabNavigator
AppTabNavigator.navigationOptions = ({ navigation }) => {
  let { routeName } = navigation.state.routes[navigation.state.index]
  let headerTitle = routeName
  return {
    headerTitle,
  }
}

const AppStackNavigator = createStackNavigator({
  Header: {
    screen: AppTabNavigator,
    // Set the header icon
    navigationOptions: ({navigation}) => ({
      headerLeft: (
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <View style={{paddingHorizontal: 10}}>
            <Ionicons size={24} name="md-menu" />
          </View>
        </TouchableOpacity>
      )
    })
  }    
})

// App stack for the drawer
const AppDrawerNavigator = createDrawerNavigator({
  Tabs: AppStackNavigator, // defined above
  Home: HomeScreen,
  Profile: ProfileScreen,
  MakePayment: MakePaymentScreen,
  Settings: SettingsScreen
})

// Auth stack
const AuthStackNavigator = createStackNavigator({
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: () => ({
      title: `Welcome to this App`, // for the header screen
      headerBackTitle: 'Back'
    }),
  },
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: () => ({
      title: `Create a new account`,
    }),
  },
  SignIn: {
    screen: SignInScreen,
    navigationOptions: () => ({
      title: `Log in to your account`,
    }),
  },
  ForgetPassword: {
    screen: ForgetPasswordScreen,
    navigationOptions: () => ({
      title: `Create a new password`,
    }),
  },
})

export default createSwitchNavigator({
  Authloading: AuthLoadingScreen,
  Auth: AuthStackNavigator, // the Auth stack
  App: AppDrawerNavigator, // the App stack
})

