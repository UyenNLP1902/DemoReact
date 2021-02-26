import React, {Component} from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
            AppRegistry,
            Button,
            FlatList,
            StyleSheet,
            Text,
            Alert,
            TouchableOpacity,
            View} from 'react-native';
import DetailActivity from './src/DetailActivity';
import MainActivity from './src/MainActivity';

  
const AppNavigator = createStackNavigator(  
    {  
        Home: MainActivity,  
        Detail: DetailActivity  
    },  
    {  
        initialRouteName: "Home"  
    }  
);  
  
/** Main() **/
const AppContainer = createAppContainer(AppNavigator);  
export default class App extends React.Component {  
    render() {  
        return <AppContainer />;  
    }  
}