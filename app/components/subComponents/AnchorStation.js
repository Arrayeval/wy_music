// 主播电台
import React, {PureComponent} from 'react'
import {View, Text, TouchableOpacity,StyleSheet,Image, Dimensions} from 'react-native'
import SwiperCircle from '../../baseComponents/SwiperCircle'
const {width: screenWidth, height: screenHeight} =  Dimensions.get('window')

export default class AnchorStation extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            swiperConfig: {
                width: 300,
                height: 120,
                imgList: [
                    "http://p1.music.126.net/nj9Zxh1GsIETbmUiOgBCaA==/109951163694379364.jpg",
                    "http://p1.music.126.net/lbWdgPKiQouUTY1TPuP47g==/109951163692233243.jpg",
                    "http://p1.music.126.net/qoaHCC1fxh7KBMM3gBGPAA==/109951163694186765.jpg",
                    "http://p1.music.126.net/pEov1kba1LJ_bmv-5PCm0Q==/109951163694170445.jpg"
                ],
                autoplay: true
            }
        }
    }
    render () {
        return (
            <View style={styles.mainContainer}>
                <SwiperCircle {...this.state.swiperConfig} />
                <Text>this is AnchorStation page</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  mainContainer:{
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    height:400
  }
})