import React from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {COLORS, FONTS, icons, SIZES} from "../../../constants";

function Header() {
    return <View style={{flexDirection: "row", marginVertical: SIZES.padding *2}} >
        <View style={{flex: 1}}>
            <Text style={{...FONTS.h1}}>Hello!</Text>
            <Text style={{...FONTS.body2, color: COLORS.gray}}>ByProgrammers</Text>
        </View>
        <View style={{alignItems: "center", justifyContent: "center"}}>
            <TouchableOpacity
             style={{
                 height: 40,
                 width: 40,
                 justifyContent: "center",
                 alignItems: "center",
                 backgroundColor: COLORS.lightGray,
                 borderRadius: 20
             }}
            >
                <Image
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: COLORS.secondary
                    }}
                    source={icons.bell} />
                <View style={{
                    width: 10,
                    height: 10,
                    backgroundColor: COLORS.red,
                    position: "absolute",
                    top: -2,
                    right: -2,
                    borderRadius: 5
                }} />
            </TouchableOpacity>
        </View>
    </View>
}

export default Header