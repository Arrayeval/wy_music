import React, {PureComponent} from 'react'
import {View, Text, TouchableOpacity,StyleSheet,Image, Dimensions} from 'react-native'
import ScrollableTabView , {ScrollableTabBar} from 'react-native-scrollable-tab-view'

import Search from '../baseComponents/Search'
import AnchorStation from '../components/subComponents/AnchorStation'
import PersonRecommend from '../components/subComponents/PersonRecommend'

import pageConFig from '../modules/FindListConfig'
const {width: screenWidth, height: screenHeight} =  Dimensions.get('window')

export default class FindList extends React.Component {
    constructor (props) {
        super(props)
    }
    pageConFig = require('../modules/FindListConfig')
    render () {
        return (
            <View style={styles.outerContainer}> 
                {/* 头部搜索 */}
                <View style={styles.topSearchWrapper}>
                    <Search/>
                </View>
                {/* 中间轮播 */}
                <View style={styles.contentMiddleWrapper}>
                    <ScrollableTabView 
                        ref = 'tabView'
                        tabBarTextStyle = {{fontSize:16}}
                        renderTabBar = {() => <ScrollableTabBar style={styles.scrollableTabBar} />}
                        tabBarUnderlineStyle =  {styles.tabBarUnderlineStyle}
                        tabBarBackgroundColor ={'rgb(200,51,49)'}
                        tabBarActiveTextColor = {'#fff'}
                        tabBarInactiveTextColor = {'#fff'}
                        scrollWithoutAnimation ={true}
                        locked={false}
                        prerenderingSiblingsNumber={1}
                    >
                        <PersonRecommend key={pageConFig.tabViewArr[1].itemName} tabLabel = {pageConFig.tabViewArr[0].itemName}/>
                        <AnchorStation key={pageConFig.tabViewArr[0].itemName}  tabLabel = {pageConFig.tabViewArr[1].itemName}/>
                    </ScrollableTabView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    topSearchWrapper:{
        backgroundColor:'rgb(200,51,49)'
    },
    contentMiddleWrapper:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFF',
        height:screenHeight,
        paddingBottom:130
    },
    scrollableTabBar:{
        borderBottomWidth:0, 
        paddingBottom:5, 
        width: screenWidth , 
        backgroundColor:'rgb(200,51,49)'
    },
    tabBarUnderlineStyle:{
        height:2,
        backgroundColor:'#fff'
    },
    contentListWrappper:{
        
    }
})