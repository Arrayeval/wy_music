// 个性推荐
import React, {PureComponent} from 'react'
import {View, Text, ScrollView, RefreshControl, TouchableOpacity,StyleSheet,Image, Dimensions} from 'react-native'
import MidlePart from '../../baseComponents/MidlePart'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import ApiUrls from '../../apiUrl/index.js'
import FetchReq from '../../utils/fetchReq'
import {splitArr} from '../../utils/common'
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
            recommendListArr: [],
            newMusicListArr: []
        }
    }

    _onRefresh = () => {
        this.setState({refreshing: true});
        setTimeout(() => {
            this.setState({refreshing: false});
        },200)        
    }

    componentDidMount () {
        this._getRecommendMusicListData()
        this._getRecommendNewMusic()
    }

    // 推荐歌单
    _getRecommendMusicListData = () => {
        FetchReq.get(ApiUrls.recommendList) 
        .then((res) => {
            if (res.code === 200) {
                let _tmpArr = []
                if (res.result.length > 6) { // 取数组中的六个数据源
                    _tmpArr = splitArr(res.result.slice(0, 6), 3)
                } else {
                    _tmpArr = res.result
                }
                this.setState({recommendListArr: _tmpArr})
            }
        }).catch(err => {
            console.log(err)
        })
    }

    // 最新music
    _getRecommendNewMusic = () => {
        FetchReq.get(ApiUrls.recommendNewMusic) 
        .then((res) => {
            if (res.code === 200) {
                let _tmpArr = []
                if (res.result.length > 6) { // 取数组中的六个数据源
                    _tmpArr = splitArr(res.result.slice(0, 6), 3)
                } else {
                    _tmpArr = res.result
                }
                this.setState({newMusicListArr: _tmpArr})
            }
        }).catch(err => {
            console.log(err)
        })
    }

    // go view page 
    _goViewPage = (obj) => {
        this.props.navigation.push(obj.path)
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
                            onRefresh={this._onRefresh}/>
                    }
                    style={styles.scrollViewStyle}
                    showsVerticalScrollIndicator={false}
                    alwaysBounceHorizontal={true}>
                    <MidlePart MidleConfig = {this.state.midleConfig}/>
                    <View style={styles.contentListContainer}>
                        {/*推荐歌单*/}
                        <View style={styles.itemWrapper}>
                            <TouchableOpacity activeOpacity = {0.8} style={styles.titleNav} onPress={this._goViewPage.bind(this, {path:'RecommendMusicMenu'})}>
                                <Text style={styles.navSty}>推荐歌单</Text>
                                <Icon style={styles.navIcon} name="chevron-right" size={23}/>
                            </TouchableOpacity>
                            {
                                this.state.recommendListArr.map((item, index) => (
                                    <View style={styles.partWrapper} key={index}>
                                        {
                                            item.map((val, key) => 
                                                (
                                                    <View style={styles.partItem} key={key}>
                                                        <Image style={styles.itemImage} source={{uri:val.picUrl}}></Image>
                                                        <Text style={styles.itemDes} numberOfLines = {2}>{val.name}</Text>
                                                    </View>
                                                )
                                            )
                                        }
                                    </View>)
                                )
                            }  
                        </View>
                        {/*最新音乐*/}
                        <View style={styles.itemWrapper}>
                            <TouchableOpacity activeOpacity = {0.8}  style={styles.titleNav} onPress={this._goViewPage.bind(this, {path:'LatestMusic'})}>
                                <Text style={styles.navSty}>最新音乐</Text>
                                <Icon style={styles.navIcon} name="chevron-right" size={23}/>
                            </TouchableOpacity>
                            {
                                this.state.newMusicListArr.map((item, index) => (
                                    <View style={styles.partWrapper} key={index}>
                                        {
                                            item.map((val, key) => 
                                                (
                                                    <View style={styles.partItem} key={key}>
                                                        <Image style={styles.itemImage} source={{uri:val.song.album.picUrl}}></Image>
                                                        <Text style={styles.itemDes} numberOfLines = {2}>{val.name}</Text>
                                                        <Text style={styles.songAuthor} numberOfLines = {1}>{val.song.artists[0].name}</Text>
                                                    </View>
                                                )
                                            )
                                        }
                                    </View>
                                    )
                                )
                            } 
                        </View>
                        {/*主播电台*/}
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
  contentListContainer:{
    backgroundColor:'#fff',
  },
  itemWrapper:{
    width: screenWidth,
    paddingRight:5,
    paddingTop:5,
    marginBottom:20,
    backgroundColor:'#fff'
  },
  titleNav:{
    flexDirection:'row',
    alignItems:'center',
    height:20,
    lineHeight:20,
    marginBottom:5,
    paddingLeft:5
  },
  navSty:{
    fontSize:15
  },
  navIcon:{
    color: 'rgb(188,185,185)'
  },
  partWrapper:{
    flexDirection:"row",
    justifyContent:'flex-start',
  },
  partItem:{
    height: (screenWidth - 20) / 3 + 40,
    width: (screenWidth - 20) / 3,
    marginLeft:5
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
  },
  songAuthor:{
    paddingHorizontal:5,
    fontSize:11,
    color:'#ccc'
  }
})