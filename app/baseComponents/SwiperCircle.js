import React, { Component } from 'react'
import {
  Text,
  View,
  Image,
  Dimensions
} from 'react-native'
import Swiper from 'react-native-swiper'
import PropTypes from 'prop-types'
var  { width } = Dimensions.get('window')
var height = width / 3
const loading = require('../images/loading.gif')

const Slide = props => {
  return (<View style={styles.slide}>
    <Image onLoad={props.loadHandle.bind(null, props.i)} style={[styles.image, {height: height, width: width}]} source={{uri: props.uri}} />
    {
      !props.loaded && <View style={styles.loadingView}>
        <Image style={styles.loadingImage} source={loading} />
      </View>
    }
  </View>)
}

export default class SwiperCircle  extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loadQueue: [0, 0, 0, 0]
    }
    this.loadHandle = this.loadHandle.bind(this)
  }
  static propsTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    imgList: PropTypes.array,
    autoplay: PropTypes.bool,
    loop: PropTypes.bool,
    autoplayTimeout: PropTypes.number

  }
  static defaultProps = {
    width: width, 
    height:  width /3,
    imgList: [
      'https://gitlab.pro/yuji/demo/uploads/d6133098b53fe1a5f3c5c00cf3c2d670/DVrj5Hz.jpg_1',
      'https://gitlab.pro/yuji/demo/uploads/2d5122a2504e5cbdf01f4fcf85f2594b/Mwb8VWH.jpg',
      'https://gitlab.pro/yuji/demo/uploads/4421f77012d43a0b4e7cfbe1144aac7c/XFVzKhq.jpg',
      'https://gitlab.pro/yuji/demo/uploads/576ef91941b0bda5761dde6914dae9f0/kD3eeHe.jpg'
    ],
    autoplay: false,
    loop: true,
    autoplayTimeout: 2.5
  }
  loadHandle (i) {
    let loadQueue = this.state.loadQueue
    loadQueue[i] = 1
    this.setState({
      loadQueue
    })
  }
  componentWillMount () {
    height = this.props.height
    width = this.props.width
  }
  render () {
    return (
      <View style={[styles.container,{height: height, width: width}]}>
        <Swiper loadMinimal loadMinimalSize={1} style={styles.wrapper} loop={this.props.loop} autoplay={this.props.autoplay} 
          paginationStyle={{
            bottom: 5, left: null, right: 15
          }}
          dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}}></View>}
          activeDot={<View style={{backgroundColor: 'rgb(200,51,49)', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
          >
          {
            this.props.imgList.map((item, i) => <Slide
              loadHandle={this.loadHandle}
              loaded={!!this.state.loadQueue[i]}
              uri={item}
              i={i}
              key={i} />)
          }
        </Swiper>
        {/* <View>
          <Text>Current Loaded Images: {this.state.loadQueue}</Text>
        </View> */}
      </View>
    )
  }
}

const styles = {
  container:{
    width:width, 
    justifyContent:'center', 
    height: width / 3, 
    backgroundColor:'transparent'
  },
  wrapper: {
    // height: width / 3,
  },
  slide: {
    // height: width / 3,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  image: {
    backgroundColor: 'transparent',
    borderRadius:5
  },

  loadingView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.5)'
  },

  loadingImage: {
    width: 60,
    height: 60
  }
}