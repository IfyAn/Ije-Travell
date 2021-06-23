import React, {useState, useRef} from 'react';
import {
    View, ScrollView,
    Text, ImageBackground, 
    TouchableOpacity, SafeAreaView, Image, Animated, Platform
} from 'react-native';
import {dummyData, COLORS, SIZES,FONTS,icons,images} from '../constants'

const HeaderBar = ({title, leftOnPress, right, containerStyle}) => {
    return (
        <View style={{...containerStyle, paddingHorizontal:SIZES.padding, flexDirection:'row'}}>
            <View style={{alignItems:'flex-start'}}>
                <TouchableOpacity style={{alignItems:'center', justifyContent:'center', width:50, height:50, borderRadius:25, backgroundColor:COLORS.transparentBlack}} onPress={leftOnPress}>
                    <Image source={icons.left_arrow} resizeMode='contain' style={{tintColor:COLORS.white, width:20,height:20}} />
                </TouchableOpacity>
            </View>
            <View style={{flex:1, justifyContent:'center', alignItems:"center"}}>
                <Text style={{color:COLORS.white, ...FONTS.h3}}>{title}</Text>
            </View>
            <TouchableOpacity style={{alignItems:'center', justifyContent:'center', width:50, height:50, borderRadius:25, backgroundColor: right ? COLORS.transparentBlack : null}} onPress={leftOnPress}>
                {right && <Image source={icons.settings} resizeMode='contain' style={{tintColor:COLORS.white, width:20,height:20}} />}
            </TouchableOpacity>
        </View>
    )
}

export default HeaderBar


