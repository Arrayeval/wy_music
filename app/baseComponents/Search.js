// 顶部搜索组件
import React, {PureComponent} from 'react'
import {View, Text, StyleSheet, TouchableOpacity,　Image, Dimensions, TextInput} from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const {width: screenWidth, height: screenHeight} =  Dimensions.get('window')
export default class Search extends React.Component {
  constructor (props) {
      super(props)
      this.state = {
        text: '大家都在搜的东西'
      }
  }
  render () {
      return (
          <View style={styles.searchWrapper}>
            <MaterialIcons name='keyboard-voice' size={25} color="#ddd" />
            <TextInput style={styles.textInput}   value={this.state.text} onChangeText={(text) => this.setState({text})}/>
          </View>   
      )
  }
}

const styles = StyleSheet.create({
    searchWrapper:{  
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:40,
        paddingLeft:10,
        paddingRight:20,
    },
    textInput:{
        height: 32,
        width: 300,
        backgroundColor: 'rgb(208,86,82)', 
        borderRadius:20,
        color:'#fff',
        opacity:0.6,
        textAlign:'center',
        fontSize:14
    }
})