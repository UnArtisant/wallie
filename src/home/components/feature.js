import React from 'react';
import {Image, Text, TouchableOpacity, View} from "react-native";
import {FONTS, SIZES} from "../../../constants";

const Feature = ({item}) => {
    return <TouchableOpacity
        style={{
            marginBottom: SIZES.padding * 2,
            alignItems: "center",
            width: 60
        }}
    >
        <View style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            marginBottom: 5,
            backgroundColor: item.backgroundColor,
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Image source={item.icon}
                   resizeMode="contain"
                   style={{height: 20, width: 20, tintColor: item.color}}
            />
        </View>
        <Text style={{...FONTS.body4, textAlign: "center", flexWrap: "wrap"}}>{item.description}</Text>
    </TouchableOpacity>
};

export default Feature;