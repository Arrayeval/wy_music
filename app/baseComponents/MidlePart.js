/**
 * 包括'图片轮播'，'四个子模块'
*/
import React, {PureComponent} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Image, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import SwiperCircle from './SwiperCircle'
const {width: screenWidth, height: screenHeight} =  Dimensions.get('window')
export default class MidlePart extends React.Component {
  constructor (props) {
    super(props)
  }

  // 渲染四个子模块
  _renderModulePart = () => {
    let modulePar = this.props.MidleConfig.modulePartConfig
    if (modulePar && modulePar.length > 0) {
      return modulePar.map((item, index) => {
        return (
          <View style={styles.moduleItem} key={index} >
            <View style= {styles.iconWrapper}>
              <Icon name={item.icon} size={28} color="#fff"></Icon>
            </View>
            <Text style={styles.textSty}>{item.name}</Text>
          </View>
        )
      })
    } else {
      return <Text>没有模块信息</Text>
    }
  }

  render () {
    return (
      <View>
        {/*图片轮播*/}
        <View style={styles.swiperContainer}>
          <View style={styles.partContentOne}>
          </View>
          <View style={styles.partContentTwo}>
          </View>
          <View style={styles.swiperCircle}>
              <SwiperCircle {...this.props.MidleConfig.swiperConfig}/>
          </View>
        </View>
        {/*四个模块*/}
        <View style={styles.moduleParts}>
            {this._renderModulePart()}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  swiperContainer:{
    position: 'relative'
  },
  partContentOne:{
    height: 100,
    width:screenWidth,
    backgroundColor: 'rgb(200,51,49)'
  },
  partContentTwo:{
    width:screenWidth,
    height:30,
    backgroundColor: '#fff'
  },
  swiperCircle:{
    position: 'absolute',
    top:5,
    width:screenWidth,
    height: 120,
    justifyContent:'center',
    alignItems:'center'
  },
  moduleParts: {
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    height:100,
    backgroundColor:'#fff'
  },
  iconWrapper:{
    height:44,
    width:44,
    borderRadius: 22,
    marginBottom:5,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: 'rgb(233,65,59)'
  },
  textSty:{
    fontSize:12
  }
})