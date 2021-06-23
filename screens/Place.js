import React, {useState, useRef} from 'react';
import {
    View, ScrollView,
    Text, ImageBackground,
    TouchableOpacity, SafeAreaView, Image, Animated, Platform
} from 'react-native';
import {dummyData, COLORS, SIZES,FONTS,icons,images} from '../constants'
import {HeaderBar, TextIconButton} from '../components'
import SlidingPanel from 'react-native-sliding-up-down-panels';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

import { MapStyle } from '../styles'

const Place = ({navigation, route}) => {
    const [selectedPlace, setSelectedPlace] = React.useState(null)
    const [selectedHotel, setSelectedHotel] = React.useState(null)

    React.useEffect(()=>{
        let {selectedPlace} = route.params
        setSelectedPlace(selectedPlace)
    },[])
    
    function renderPlace(){
        return(
             <ImageBackground source={selectedPlace?.image} style={{width:'100%', height:'100%'}}>
                <HeaderBar title='' right={false} leftOnPress={()=>navigation.goBack()} containerStyle={{marginTop:SIZES.padding * 2}} />
                <View style={{marginBottom:100, justifyContent:'flex-end', paddingHorizontal:SIZES.padding, flex:1}}>
                    <View style={{justifyContent:'space-between', alignItems:'center', flexDirection:'row'}}>
                        <Text style={{color:COLORS.white, ...FONTS.largeTitle}}>{selectedPlace?.name}</Text>
                        <View style={{flexDirection:'row', alignItems:'center'}}>
                            <Text style={{color:COLORS.white, ...FONTS.h3, marginRight:5}}>{selectedPlace?.rate}</Text>
                             <Image source={icons.star} resizeMode='contain' style={{width:20,height:20}} />
                        </View>
                    </View>
                    <Text style={{color:COLORS.white, ...FONTS.body3, marginTop:SIZES.base}}>{selectedPlace?.description}</Text>
                    <TextIconButton label='Book A flight' icon={icons.aeroplane} customContainerStyle={{marginTop:SIZES.padding}} onPress={()=>console.log('Booking')} />
                </View>
             </ImageBackground>
        )
    }
 
 return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent:'center',}}>
            {renderPlace()}
            <SlidingPanel
            headerLayoutHeight = {80} slidingPanelLayoutHeight={100}
            headerLayout = { () =>
                <View style={{height: 100, width:500,right:250,
                        backgroundColor:COLORS.gray, 
                        justifyContent: 'center', 
                        alignItems: 'center',
                }}>
                 
                        <Image source={icons.up_arrow} resizeMode='contain' style={{width:20,height:20, tintColor:COLORS.white}} />
                        <Text style={{color:COLORS.white, ...FONTS.h3}}>SWIPE FOR DETAILS</Text>
                  
                </View>
            }
            slidingPanelLayout = { () =>
                <View style={{ backgroundColor:COLORS.white, height:700, width:500, right:250,
                justifyContent: 'center', 
                alignItems: 'center',
                }}>
                    <MapView
                        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                        style={{width:'100%', height:'100%'}}
                        customMapStyle={MapStyle}
                        initialRegion={selectedPlace?.mapInitialRegion}
                        >
                        {selectedPlace?.hotels.map((hotel, index)=>(
                            <Marker key={index} identifier={hotel.id} coordinate={hotel.latlng}
                                onPress={()=>setSelectedHotel(hotel)}
                            >
                                <Image source={selectedHotel?.id==hotel.id ? icons.bed_on : icons.bed_off} resizeMode='contain' style={{width:50, height:50}} />
                            </Marker>
                        ))}
                    </MapView>
                     <HeaderBar title={selectedPlace?.name} right={true}  containerStyle={{top:SIZES.padding * 2, position:'absolute'}} />
                     <Text style={{color:COLORS.white, top:500, position:'absolute', ...FONTS.h1}}>Hotel is {selectedHotel?.name}</Text>
                </View>
            }
        />
        </View>
    )
}

export default Place