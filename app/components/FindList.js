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
            <View>
                <View style={styles.topSearch}>
                    <Search/>
                </View>
                <View style={styles.contentContainer}>
                    <ScrollableTabView 
                        ref = 'tabView'
                        tabBarTextStyle = {{fontSize:16}}
                        renderTabBar = {() => <ScrollableTabBar style={{borderBottomWidth:0, paddingBottom:5, width: screenWidth}} />}
                        tabBarUnderlineStyle =  {{height:2, backgroundColor:'#fff', }}
                        tabBarBackgroundColor ={'rgb(200,51,49)'}
                        tabBarActiveTextColor = {'#fff'}
                        tabBarInactiveTextColor = {'#fff'}
                        scrollWithoutAnimation ={true}
                        locked={false}
                        prerenderingSiblingsNumber={1}
                    >
                        <AnchorStation key={pageConFig.tabViewArr[0].itemName}  tabLabel = {pageConFig.tabViewArr[0].itemName}/>
                        <PersonRecommend key={pageConFig.tabViewArr[1].itemName} tabLabel = {pageConFig.tabViewArr[1].itemName}/>
                    </ScrollableTabView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    topSearch:{
        backgroundColor:'rgb(200,51,49)'
    },
    contentContainer:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        height:500
    }  
})