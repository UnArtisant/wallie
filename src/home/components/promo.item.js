import React from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {COLORS, FONTS, images, SIZES} from "../../../constants";

function PromoItem({item}) {
    return <TouchableOpacity
        onPress={() => console.log(item)}
        style={{marginVertical: SIZES.base, width: SIZES.width / 2.5}}
    >
        <View style={{
            height: 80,
            backgroundColor:
            COLORS.primary,
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20
        }}>
            <Image resizeMode="cover"
                   style={{
                       width: "100%",
                       height: "100%",
                       borderTopRightRadius: 20,
                       borderTopLeftRadius: 20
                   }}
                   source={images.promoBanner}/>
        </View>
        <View style={{
            padding: SIZES.padding,
            backgroundColor: COLORS.lightGray,
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20
        }}>
            <Text style={{...FONTS.h4}}>{item.title}</Text>
            <Text style={{...FONTS.body4}}>{item.description}</Text>
        </View>
    </TouchableOpacity>
}

export default PromoItem