// 详情页的header
import React, {PureComponent} from 'react'
import {View, Text,StyleSheet,Image, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
export default class DetailHeader extends React.PureComponent {
  constructor (proos) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <View style={styles.mainContainer}>
        <Icon style={styles.navIcon} name="chevron-left" size={23}/>
        <Text>DetailHeader</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    paddingHorizontal:10,
    height: 30,
    backgroundColor: 'rgb(200,51,49)'
  },
  navIcon:{

  }
})