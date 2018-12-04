// 主播电台
import React, {PureComponent} from 'react'
import {View, Text, TouchableOpacity,StyleSheet,Image, Dimensions} from 'react-native'
import MidlePart from '../../baseComponents/MidlePart'
const {width: screenWidth, height: screenHeight} =  Dimensions.get('window')

export default class AnchorStation extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            midleConfig: {
                swiperConfig: {
                    width: 340,
                    height: 120,
                    imgList: [
                        "http://p1.music.126.net/nj9Zxh1GsIETbmUiOgBCaA==/109951163694379364.jpg",
                        "http://p1.music.126.net/lbWdgPKiQouUTY1TPuP47g==/109951163692233243.jpg",
                        "http://p1.music.126.net/qoaHCC1fxh7KBMM3gBGPAA==/109951163694186765.jpg",
                        "http://p1.music.126.net/pEov1kba1LJ_bmv-5PCm0Q==/109951163694170445.jpg"
                    ],
                    autoplay: true
                },
                modulePartConfig: [
                    {id: 0, name: '电台分类', icon: 'md-radio', navUrl: 'ssss'},
                    {id: 1, name: '电台排行', icon: 'ios-calendar', navUrl: 'ssss'},
                    {id: 2, name: 'DJ电台', icon: 'ios-musical-note', navUrl: 'ssss'},
                    {id: 3, name: '小冰电台', icon: 'ios-stats', navUrl: 'ssss'},
                ]
            },
        }
    }
    render () {
        return (
            <View style={styles.mainContainer}>
                <MidlePart MidleConfig = {this.state.midleConfig}/>
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