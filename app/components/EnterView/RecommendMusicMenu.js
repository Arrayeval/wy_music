// 推荐歌单
import React from 'react'
import {View,Text,StyleSheet,Image,ImageBackground,TouchableWithoutFeedback,Dimensions,FlatList,findNodeHandle,TouchableOpacity} from 'react-native'
import { BlurView, VibrancyView } from 'react-native-blur'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import IconFeather from 'react-native-vector-icons/Feather'
const {width: screenWidth, height: screenHeight} = Dimensions.get('window')
export default class RecommendMusicMenu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      viewRef:null
    }
  }

  // 返回上一步
  _goBack = () => {
    this.props.navigation.pop()
  }

  // 列表的头部
  _listHeader = () => {
    return <View style={styles.listHeaderWrapper}>
        {/*blur*/}
        <Image style={styles.imageBlurSty} 
          ref={(img) => {this.backgroundImage = img}}
          onLoadEnd={this._imageLoaded.bind(this)}
          source={{uri: "http://img5.imgtn.bdimg.com/it/u=602873054,3769467145&fm=200&gp=0.jpg"}}></Image>
        <BlurView
          style={styles.imageBlurSty}
          viewRef={this.state.viewRef}
          blurType="light"
          blurAmount={20}/>
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
        <View style={styles.classifyWrapper}>
            <TouchableOpacity style={styles.selectBtn}>
              <Text>韩语</Text>
            </TouchableOpacity>
            <Text>华语</Text>
            <Text>民谣</Text>
            <Text>摇滚</Text>
        </View>
      </View>
  }

  _listFooter = () => {
    return <View>
      <Text>this is list footer</Text>
    </View>
  }

  // 渲染每一条数据
  _renderItem = (item) => {
    var txt = '第' + item.index + '个' + ' title=' + item.item.title;
    var bgColor = item.index % 2 == 0 ? 'red' : 'blue';
    return <Text style={[{flex:1,height:100,backgroundColor:bgColor},styles.txt]}>{txt}</Text>
  }

  // 列表item的唯一性
  _keyExtractor = (item, index) => index + ''

  _imageLoaded() {
    this.setState({ viewRef: findNodeHandle(this.backgroundImage) });
  }

  render () {
    var data = [];
    for (var i = 0; i < 100; i++) {
      data.push({key: i, title: i + ''});
    }
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
        <View style={styles.centerListWrapper}>
          <FlatList ref="flatList"
            ListHeaderComponent={this._listHeader}
            ListFooterComponent={this._listFooter}
            keyExtractor={this._keyExtractor}
            data={data}
            renderItem={this._renderItem}>
          </FlatList>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
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
    height:200,
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
    fontSize:30,
  },
  imgWrapper:{
    height:130,
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
    backgroundColor:'red',
    flexDirection:'row',
    alignItems: 'center'
  }
})