// 主播电台
import React, {PureComponent} from 'react'
import {View, Text, TouchableOpacity,StyleSheet,Image, Dimensions} from 'react-native'
const {width: screenWidth, height: screenHeight} =  Dimensions.get('window')

export default class AnchorStation extends React.Component {
    constructor (props) {
        super(props)
    }
    render () {
        return (
            <View style={styles.mainContainer}>
                <Text>this is AnchorStation page</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  mainContainer:{
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    height:400
  }
})