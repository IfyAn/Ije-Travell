import React, {useState, useRef} from 'react';
import {
    View, ScrollView,
    Text, ImageBackground,
    TouchableOpacity, SafeAreaView, Image, Animated, Platform
} from 'react-native';
import {dummyData, COLORS, SIZES,FONTS,icons,images} from '../constants'

const TextIconButton = ({label, onPress, icon, customContainerStyle, customLabelStyle}) => {
    return (
        <TouchableOpacity style={{alignItems:'center', justifyContent:'center', ...customContainerStyle, height:60, borderRadius:SIZES.radius, backgroundColor:COLORS.white, flexDirection:'row'}} onPress={onPress}>
            <Text style={{...customLabelStyle, ...FONTS.h2, marginRight:SIZES.base}}>{label}</Text>    
            <Image source={icon} style={{width:25,height:25}} />
        </TouchableOpacity>
    )
}

export default TextIconButton


