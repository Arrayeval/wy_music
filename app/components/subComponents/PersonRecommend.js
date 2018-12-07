// 个性推荐
import React, {PureComponent} from 'react'
import {View, Text, ScrollView, RefreshControl, TouchableOpacity,StyleSheet,Image, Dimensions} from 'react-native'
import MidlePart from '../../baseComponents/MidlePart'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import apiUrls from '../../apiUrl'
import fetchReq from '../../utils/fetchReq'
import commonFun from '../../utils/common'
import { TapGestureHandler } from 'react-native-gesture-handler';
const {width: screenWidth, height: screenHeight} =  Dimensions.get('window')

export default class AnchorStation extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            refreshing: false,
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
                    {id: 0, name: '私人FM', icon: 'md-radio', navUrl: 'ssss'},
                    {id: 1, name: '每日推荐', icon: 'ios-calendar', navUrl: 'ssss'},
                    {id: 2, name: '歌单', icon: 'ios-musical-note', navUrl: 'ssss'},
                    {id: 3, name: '排行榜', icon: 'ios-stats', navUrl: 'ssss'}
                ]
            },
            recommendList: []
        }
    }
    _onRefresh = () => {
        this.setState({refreshing: true});
        setTimeout(() => {
            this.setState({refreshing: false});
        },200)        
    }

    componentDidMount () {
        // fetchReq.get(apiUrls.recommendList, {id: 1}).then((res) => {
        //    if (res.code === 200) {
        //     let _tmpArr = commonFun.splitArr(res.playlists, 3)
        //     this.setState({recommendList: _tmpArr})
        //    }
        // }).catch(err => {
        //     alert("err")   
        //     console.log(err)
        // })
         this._getListData()
    }

    _getListData = () => {
        fetch ("http://www.mptab.cn:3001/related/playlist?id=1") 
        .then((response) => response.json()).then((res) => {
            if (res.code === 200) {
             let _tmpArr = commonFun.splitArr(res.playlists, 3)
             this.setState({recommendList: _tmpArr})
            }
         }).catch(err => {
             alert("err")   
             console.log(err)
         })
    }

    render () {
        return (
            <View style={styles.mainContainer}>
                <ScrollView 
                    ref="scrollerView"
                    automaticallyAdjustContentInsets={false}
                    contentContainerStyle={styles.contentContainer}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh}
                        />
                    }
                    style={styles.scrollViewStyle}
                    showsVerticalScrollIndicator={false}
                    alwaysBounceHorizontal={true}
                 >
                    <MidlePart MidleConfig = {this.state.midleConfig}/>
                    <View style={styles.contentListContainer}>
                        {/*推荐歌单*/}
                        <View style={styles.itemWrapper}>
                            <View style={styles.titleNav}>
                                <Text style={styles.navSty} onClick={this._getListData.bind(this)}>推荐歌单</Text>
                                <Icon style={styles.navIcon} name="chevron-right" size={23}/>
                            </View>
                            {/* <View style={styles.partWrapper}>
                                <View style={styles.partItem} >
                                    <Image style={styles.itemImage} source={{uri:"http://p1.music.126.net/nj9Zxh1GsIETbmUiOgBCaA==/109951163694379364.jpg"}}></Image>
                                    <Text style={styles.itemDes} numberOfLines = {2}>夏日炎凉、春风和睦、秋风爽、北国风光，雪飘万里</Text>
                                </View>
                                <View style={styles.partItem} >
                                    <Image style={styles.itemImage} source={{uri:"http://p1.music.126.net/nj9Zxh1GsIETbmUiOgBCaA==/109951163694379364.jpg"}}></Image>
                                    <Text style={styles.itemDes} numberOfLines = {2}>夏日炎凉、春风和睦、秋风爽、北国风光，雪飘万里</Text>
                                </View>
                                <View style={styles.partItem} >
                                    <Image style={styles.itemImage} source={{uri:"http://p1.music.126.net/nj9Zxh1GsIETbmUiOgBCaA==/109951163694379364.jpg"}}></Image>
                                    <Text style={styles.itemDes} numberOfLines = {2}>夏日炎凉、春风和睦、秋风爽、北国风光，雪飘万里</Text>
                                </View>
                            </View> */}
                            {
                                this.state.recommendList.map((item, index) => (
                                    <View style={styles.partWrapper} key={index}>
                                        {
                                            item.map((val, key) => 
                                                (
                                                    <View style={styles.partItem} key={key}>
                                                        <Image style={styles.itemImage} source={{uri:"http://p1.music.126.net/nj9Zxh1GsIETbmUiOgBCaA==/109951163694379364.jpg"}}></Image>
                                                        <Text style={styles.itemDes} numberOfLines = {2}>夏日炎凉、春风和睦、秋风爽、北国风光，雪飘万里</Text>
                                                    </View>
                                                )
                                            )
                                        }
                                    </View>
                                    )
                                )
                            }  
                        </View>
                        {/*最新音乐*/}
                        <View style={styles.itemWrapper}>
                            <View style={styles.titleNav}>
                                <Text style={styles.navSty}>最新音乐</Text>
                                <Icon style={styles.navIcon} name="chevron-right" size={23}/>
                            </View>
                            <View style={styles.partWrapper}>
                            <View style={styles.partItem}>
                                <Image style={styles.itemImage} source={{uri:"http://p1.music.126.net/nj9Zxh1GsIETbmUiOgBCaA==/109951163694379364.jpg"}}></Image>
                                <Text style={styles.itemDes} numberOfLines = {2}>夏日炎凉、春风和睦、秋风爽、北国风光，雪飘万里</Text>
                            </View>    
                            <View style={styles.partItem}>
                                <Image style={styles.itemImage} source={{uri: 'http://p1.music.126.net/lbWdgPKiQouUTY1TPuP47g==/109951163692233243.jpg'}}></Image>
                                <Text style={styles.itemDes} numberOfLines = {2}>this is item texthis is item texthis is item text</Text>
                            </View>    
                            <View style={styles.partItem}>
                                <Image style={styles.itemImage} source={{uri: 'http://p1.music.126.net/pEov1kba1LJ_bmv-5PCm0Q==/109951163694170445.jpg'}}></Image>
                                <Text style={styles.itemDes} numberOfLines = {2}>this is item texthis is item texthis is item text</Text>
                            </View>    
                            </View>
                            <View style={styles.partWrapper}>
                            <View style={styles.partItem}>
                                <Image style={styles.itemImage} source={{uri:"http://p1.music.126.net/nj9Zxh1GsIETbmUiOgBCaA==/109951163694379364.jpg"}}></Image>
                                <Text style={styles.itemDes} numberOfLines = {2}>this is item texthis is item texthis is item text</Text>
                            </View>    
                            <View style={styles.partItem}>
                                <Image style={styles.itemImage} source={{uri: 'http://p1.music.126.net/nj9Zxh1GsIETbmUiOgBCaA==/109951163694379364.jpg'}}></Image>
                                <Text style={styles.itemDes} numberOfLines = {2}>this is item texthis is item texthis is item text</Text>
                            </View>    
                            <View style={styles.partItem}>
                                <Image style={styles.itemImage} source={{uri: 'http://p1.music.126.net/nj9Zxh1GsIETbmUiOgBCaA==/109951163694379364.jpg'}}></Image>
                                <Text style={styles.itemDes} numberOfLines = {2}>this is item texthis is item texthis is item text</Text>
                            </View>    
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  mainContainer:{
    flexDirection:'column',
    justifyContent:'flex-start',
    alignItems:'center',
    backgroundColor: 'rgb(200,51,49)',
  },
  contentContainer:{
  },
  itemWrapper:{
    width: screenWidth,
    paddingLeft:5,
    paddingRight:5,
    paddingTop:5,
    backgroundColor: '#fff'
  },
  titleNav:{
    flexDirection: 'row',
    alignItems:'center',
    height:20,
    lineHeight:20,
    marginBottom:5
  },
  navSty:{
    fontSize:15
  },
  navIcon:{
    color: 'rgb(188,185,185)'
  },
  partWrapper:{
    flexDirection:"row",
    justifyContent:'space-around'
  },
  partItem:{
    height: (screenWidth - 20) / 3 + 40,
    width: (screenWidth - 20) / 3,
  },
  itemImage:{
    // backgroundColor: 'red',
    width: (screenWidth - 20) / 3,
    height: (screenWidth - 20) / 3 ,
    borderRadius: 3
  },
  itemDes:{
    paddingHorizontal:5,
    fontSize:12
  }
})