// 最新music
import {PureComponent} from 'react'
import {View, Text,StyleSheet,Image, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
export default class LatestMusic extends PureComponent {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <View style={styles.mainContainer}>
        <Icon style={styles.navIcon} name="chevron-left" size={23}/>
        <Text>LatestMusic</Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    paddingHorizontal:10,
    height: 30,
    backgroundColor: 'rgb(200,51,49)'
  },
  navIcon:{

  }
})