import React from "react";
import {FlatList, Text, View} from "react-native";
import {useState} from "react";
import {featuresData} from "../data/home";
import Feature from "./feature";
import {FONTS, SIZES} from "../../../constants";

function FeaturesContainer () {
    const [features, setFeatures] = useState(featuresData)

    const Header = () => {
        return <View style={{marginBottom: SIZES.padding *2 }}>
            <Text style={{...FONTS.h3}}>Features</Text>
        </View>
    }

    return <FlatList
        data={features}
        ListHeaderComponent={Header}
        numColumns={4}
        columnWrapperStyle={{justifyContent: "space-between"}}
        keyExtractor={item => item.id}
        style={{marginTop: SIZES.padding *2}}
        renderItem={Feature} />
}

export default FeaturesContainer