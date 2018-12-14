import MainTab from './TabNavigator'
import RecommendMusicMenu from '../components/EnterView/RecommendMusicMenu'
import MusicMenuDetail from '../components/EnterView/MusicMenuDetail'
import LatestMusic from '../components/EnterView/LatestMusic'
// import NewsSearch from './pages/subPages/NewsSearch'
const RouteConfig = {
  // 主页面
  MainTab: {
    screen: MainTab,
    navigationOptions: ({navigation}) => ({header: null, gesturesEnable: true})
  },
  // 推荐歌单
  RecommendMusicMenu: {
    screen: RecommendMusicMenu,
    navigationOptions: ({navigation}) => ({header: null, gesturesEnable: true})
  },
  // 歌单详情
  MusicMenuDetail: {
    screen: MusicMenuDetail,
    navigationOptions: ({navigation}) => ({header: null, gesturesEnable: true})
  },
  // 最新music
  LatestMusic: {
      screen: LatestMusic,
      navigationOptions: ({navigation}) => ({header:null, gesturesEnable:true})
  },
//   NewsSearch: {
//       screen: NewsSearch,
//       navigationOptions: ({navigation}) => ({header: null, gesturesEnable: true})
//   }
}

export default RouteConfig;