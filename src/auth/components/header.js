import React from "react";
import {Image, Pressable, Text} from "react-native";
import {COLORS, FONTS, icons, SIZES} from "../../../constants";

function Header() {
    return <Pressable
        onPress={(e) => console.log(e)}
        style={{
            display: "flex",
            flexDirection: 'row',
            alignItems: "center",
            marginTop: SIZES.padding * 6,
            paddingHorizontal: SIZES.padding * 2
        }}
    >
        <Image
            source={icons.back}
            resizeMode="contain"
            style={{
                width: 20,
                height: 20,
                tintColor: COLORS.white
            }}
        />
        <Text style={{
                marginLeft: SIZES.padding * 1.5,
                color: COLORS.white,
                ...FONTS.h4
            }}>Sign Up</Text>
    </Pressable>
}

export default Header