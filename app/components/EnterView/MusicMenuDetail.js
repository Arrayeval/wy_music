// 歌单详情页
import React from 'react'
import {View, Text,StyleSheet,Image, Dimensions} from 'react-native'
import ApiUrls from '../../apiUrl/index.js'
import FetchReq from '../../utils/fetchReq'

export default class MusicMenuDetail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  // get musicMenu detail
  _getMusicMenuDetal = () => {
    const {navigation} = this.props
    const id = navigation.getParam('id')
    FetchReq.get(ApiUrls.musicMenuDetail, {
      id
    }).then((res) => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
  }

  render () {
   this._getMusicMenuDetal()
    return (
      <View style={styles.mainContainer}>
        <Text>歌单详情页</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer:{}
})