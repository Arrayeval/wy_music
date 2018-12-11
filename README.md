# wy_music
网易music ,react-native

网易: https://binaryify.github.io/NeteaseCloudMusicApi/#/
```
http://www.mptab.cn:3001/artist/list
```

##### 1）不能直接给元素绑定事件
```
使用rn的一系列内置组件em：TouchableOpacity，进行事件绑定onPress
<TouchableOpacity 
  onPress={this._goViewPage.bind(this, {path:'RecommendMusicMenu'})}>
  <Text style={styles.navSty}>推荐歌单</Text>
  <Icon style={styles.navIcon} name="chevron-right" size={23}/>
</TouchableOpacity>
```
##### 2）react-navigation的导航使用技巧
```
只要在react-navigation中注册过的组件内部都可以通过this.props.navigation.push(path)进行导航；
没有注册过的组件，可以使用props的形式传递。
em:
<PersonRecommend navigation={this.props.navigation} />
然后在PersonRecommend中可以使用this.props.navigation.push(path)了
```
