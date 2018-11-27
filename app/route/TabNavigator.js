import React, {PureComponent} from 'react'
import {
  Image,
  StyleSheet, 
} from 'react-native'

import { createBottomTabNavigator  } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntIonicons from 'react-native-vector-icons/AntDesign'

import FindList from '../components/FindList'
import Video from '../components/Video'
import MyProfile from '../components/Account'
import Friends from '../components/Account'
import Account from '../components/Account'


export default MainTab = createBottomTabNavigator ({
  '发现': {
    screen: FindList,
    navigationOptions: ({navigation, screenProps}) => ({
      header: null,
      headerTitle: '发现',
      headerStyle:styles.navigator,
      headerTitleStyle:styles.navigatorTitle,
      gesturesEnabled:true,
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        let iconName = `find${focused ? '' : ''}`;
        return <AntIonicons name={iconName} size={horizontal ? 15 : 22} color={tintColor} />;
      }
    })
  },
  '视频': {
    screen: Video,
    navigationOptions: ({navigation, screenProps}) => ({
      header: null,
      headerTitle: '视频',
      headerStyle:styles.navigator,
      headerTitleStyle:styles.navigatorTitle,
      gesturesEnabled:true,
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        let iconName = `videocamera${focused ? '' : ''}`;
        return <AntIonicons name={iconName} size={horizontal ? 15 : 22} color={tintColor} />;
      }
    })
  },
  '我的': {
    screen: MyProfile,
    navigationOptions: ({navigation, screenProps}) => ({
      header: null,
      headerTitle: '我的',
      headerStyle:styles.navigator,
      headerTitleStyle:styles.navigatorTitle,
      gesturesEnabled:true,
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        let iconName = `ios-musical-notes${focused ? '' : ''}`;
        return <Ionicons name={iconName} size={horizontal ? 15 : 22} color={tintColor} />;
      }
    })
  },
  '朋友': {
    screen: Friends,
    navigationOptions: ({navigation, screenProps}) => ({
      header: null,
      headerTitle: '朋友',
      headerStyle:styles.navigator,
      headerTitleStyle:styles.navigatorTitle,
      gesturesEnabled:true,
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        let iconName = `ios-people${focused ? '' : ''}`;
        return <Ionicons name={iconName} size={horizontal ? 15 : 22} color={tintColor} />;
      }
    })
  },
  '账户': {
    screen: Account,
    navigationOptions: ({navigation, screenProps}) => ({
      header: null,
      headerTitle: '账户',
      headerStyle:styles.navigator,
      headerTitleStyle:styles.navigatorTitle,
      gesturesEnabled:true,
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        let iconName = `ios-person${focused ? '' : ''}`;
        return <Ionicons name={iconName} size={horizontal ? 20 : 22} color={tintColor} />;
      }
    })
  },
})
const styles = StyleSheet.create({
    navigatorTitle:{
        fontSize:20,
        color:'white',
    },
    navigator:{
        backgroundColor:'#d81e06',
    },
    tabbarImage:{
        width:25,
        height:25,
        marginBottom:-3,
    },
  })