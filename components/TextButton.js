import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import { SIZES, FONTS, COLORS} from '../constants'

const TextButton = ({ label, onPress, customContainerStyle, customLabelStyle}) => {
    return (
        <TouchableOpacity style={{
            alignItems:'center', justifyContent:'center', 
            height:55, borderRadius:SIZES.radius,
            backgroundColor:'#ffff', ...customContainerStyle
            }} onPress={onPress}>
            <Text style={{...customLabelStyle, ...FONTS.h2, color:COLORS.blue}}>{label}</Text>
        </TouchableOpacity>
    )
}

export default TextButton

