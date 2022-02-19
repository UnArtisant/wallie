import React from "react";
import {Image, Text, View} from "react-native";
import {images} from "../../../constants";

function Banner() {
    return <View style={{
        height: 120,
        borderRadius : 20
    }}>
      <Image style={{
          width: "100%",
          height: "100%",
          borderRadius: 20
      }}
             resizeMode="cover"
             source={images.banner} />
    </View>
}

export default Banner