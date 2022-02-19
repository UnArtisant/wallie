import React from "react";
import {Image, View} from "react-native";
import {images, SIZES} from "../../../constants";

function Logo () {
    return <View
        style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            height: 100,
            marginTop: SIZES.padding * 5
        }}
    >
        <Image
            style={{
                width: "60%"
            }}
            resizeMode="contain"
            source={images.wallieLogo} />
    </View>
}

export default Logo