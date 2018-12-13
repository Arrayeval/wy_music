// 推荐歌单
import React from 'react'
import {View,Text,StyleSheet,Image,TouchableWithoutFeedback,Dimensions,FlatList,findNodeHandle,TouchableOpacity} from 'react-native'
import { BlurView } from 'react-native-blur'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconFeather from 'react-native-vector-icons/Feather'
import ApiUrls from '../../apiUrl/index.js'
import FetchReq from '../../utils/fetchReq'
import {splitArr} from '../../utils/common'
const {width: screenWidth, height: screenHeight} = Dimensions.get('window')
export default class RecommendMusicMenu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      viewRefItem:null,
      showBlur: false,
      recommendListArr: []
    }
  }

  // 返回上一步
  _goBack = () => {
    this.props.navigation.pop()
  }

  // 推荐歌单
  _getRecommendMusicListData = () => {
    FetchReq.get(ApiUrls.recommendList) 
    .then((res) => {
        if (res.code === 200) {
          if (res.result && res.result.length > 0) {
            let _tmpArr = []
            _tmpArr = splitArr(res.result, 2)
            this.setState({recommendListArr: _tmpArr})
          }
        }
    }).catch(err => {
      console.log(err)
    })
  }

  // 列表的头部
  _listHeader = () => {
    return <View style={styles.listHeaderWrapper}>
        {/*blur*/}
        <Image style={styles.imageBlurSty} 
          ref={(img) => {this.backgroundImage = img}}
          onLoadEnd={this._imageLoaded.bind(this)}
          source={{uri: "http://img5.imgtn.bdimg.com/it/u=602873054,3769467145&fm=200&gp=0.jpg"}}></Image>
        {
          this.state.showBlur?
          <BlurView
            style={styles.imageBlurSty}
            viewRef={this.state.viewRefItem}
            blurType="light"
            blurAmount={20}/>
            : null
        }
        {/*content*/}
        <View style={styles.imgWrapper}>
          <Image style={styles.imgSty} source={{uri: "http://img5.imgtn.bdimg.com/it/u=602873054,3769467145&fm=200&gp=0.jpg"}}/>
          <View style={styles.contentWrapper}>
            <Text style={styles.desWord}>精品歌单</Text>
            <View >
              <Text style={styles.subDes}>剪不断、金戈铁马潇潇......</Text>
              <Text style={styles.authDes}>赢得生前生后名，可怜白发生</Text>
            </View>
          </View>
        </View>
        {/*select music*/}
        <View style={styles.classifyWrapper}>
            <TouchableOpacity style={styles.selectBtn}>
              <Text >韩语</Text>
            </TouchableOpacity>
            <View style={styles.hotSelect}>
              <Text style={styles.tabItem}>摇滚</Text>
              <Text style={styles.tabItem}>华语</Text>
              <Text style={styles.tabItem}>民谣</Text>
            </View>
        </View>
      </View>
  }

  // 列表尾部
  _listFooter = () => {
    return <View>
      <Text style={styles.listFooter}>没有更多数据了</Text>
    </View>
  }

  // 渲染每一条数据
  _renderItem = (item) => {
    return <View style={styles.itemWraper}>
      {
        item.item.map((val, index) =>(
          <View style={styles.itemBox} key={index}>
            <View style={styles.imgBox}>
              <Image style={styles.imageSty} source={{uri: val.picUrl}}></Image>
            </View>
            <Text style={styles.itemName} numberOfLines={2}>{val.name}</Text>
          </View>
        ))
      }
    </View>
  }

  // 列表item的唯一性
  _keyExtractor = (item, index) => index + ''

  _imageLoaded() {
    this.setState({
      showBlur: true,
      viewRefItem: findNodeHandle(this.backgroundImage)
    });
  }

  componentDidMount () {
    this._getRecommendMusicListData()
  }

  render () {
    return (
      <View style={styles.mainContainer}>
        {/*header*/}
        <View style={styles.headerContainer}>
          <TouchableWithoutFeedback  style={styles.navIconLeftWrapper} onPress={this._goBack.bind(this)}>
            <Icon style={styles.navIcon} name="chevron-left" size={40}/>
          </TouchableWithoutFeedback>
          <View style={styles.navTextWrapper}>
            <Text style={styles.navText}>歌单</Text>
          </View>
          <TouchableWithoutFeedback  style={styles.playStateWrapper}>
            <IconFeather style={styles.navIcon} name="bar-chart-2" size={30}/>
          </TouchableWithoutFeedback>
        </View>
        {/*中间列表数据*/}
        <FlatList ref="flatList"
          ListHeaderComponent={this._listHeader}
          ListFooterComponent={this._listFooter}
          keyExtractor={this._keyExtractor}
          data={this.state.recommendListArr}
          renderItem={this._renderItem}>
        </FlatList>
        {/*模块分类*/}
        <View style={styles.classifyWrapper}>

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer:{
    marginBottom:40
  },
  headerContainer: {
    flexDirection:'row',
    alignItems:'center',
    paddingRight:10,
    height:50,
    backgroundColor: 'rgb(200,51,49)'
  },
  navIconLeftWrapper:{
    width:50
  },
  navIcon:{
    color:'#fff'
  },
  navTextWrapper:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
  },
  navText:{
    color:'#fff',
    fontSize:18
  },
  playStateWrapper:{
    width:50,
  },
  listHeaderWrapper:{
    height:190,
    justifyContent: 'center',
    alignItems:'center',
    position:'relative'
  },
  imageBlurSty:{
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    width:screenHeight,
    height:150
  },
  txt: {
    textAlign:'center',
    textAlignVertical:'center',
    color:'white',
    fontSize:10,
  },
  imgWrapper:{
    height:150,
    paddingTop:25,
    paddingBottom:5,
    paddingLeft:10,
    paddingRight:20,
    flexDirection:'row',
    width: screenWidth
  },
  imgSty:{
    height:100,
    width:100,
    borderRadius:4
  },
  desWord:{
    fontSize:20,
    color:'#fff',
    marginBottom:15
  },
  subDes:{
    fontSize:16,
    color:'#fff',
    marginBottom:5
  },
  authDes:{
    fontSize:12,
    color:'rgba(255,255,255,.5)'
  },
  contentWrapper:{
    marginLeft:10
  },
  classifyWrapper:{
    height:40,
    width: screenWidth,
    paddingHorizontal: 10,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'flex-start'
  },
  selectBtn:{
    height:20,
    width:55,
    flexDirection:'row',
    justifyContent:"center",
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius:10
  },
  hotSelect:{
    flex:1,
    flexDirection:'row',
    justifyContent:'flex-end'
  },
  tabItem:{
    marginLeft:5
  },
  listFooter:{
    height:30,
    width: screenWidth,
    textAlign:'center',
    alignItems:'center',
    color:'rgba(255,255,255,.8)',
    fontSize:13
  },
  itemWraper:{
    width: screenWidth,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingHorizontal:5
  },
  itemBox:{
   width: (screenWidth - 15) / 2,
   height: (screenWidth - 15) / 2 + 30,
  },
  imgBox:{
    width: (screenWidth - 15) / 2,
    height: (screenWidth - 15) / 2 ,
  },
  imageSty:{
    width: (screenWidth - 15) / 2,
    height: (screenWidth - 15) / 2 ,
    borderRadius: 3
  },
  itemName:{
    fontSize:12,
    fontWeight: 'normal'
  }
})