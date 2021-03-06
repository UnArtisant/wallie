import React, {useState} from "react";
import {FlatList, View} from "react-native";
import {specialPromoData} from "../data/home";
import PromoItem from "./promo.item";
import {SIZES} from "../../../constants";
import HeaderContainer from "./header.container";

function PromoContainer () {
    const [promos, _] = useState(specialPromoData)
    return <FlatList
        ListHeaderComponent={HeaderContainer}
        ListFooterComponent={<View style={{marginBottom: 80}}/>}
        data={promos}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        contentContainerStyle={{padding: SIZES.padding * 3}}
        showsVerticalScrollIndicator={false}
        renderItem={PromoItem} />
}

export default PromoContainer