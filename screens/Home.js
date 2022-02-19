import React from 'react';
import {SafeAreaView, Text} from "react-native";
import {COLORS} from "../constants";
import PromoContainer from "../src/home/components/promo.container";

const Home = () => {
    return <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
        <PromoContainer />
    </SafeAreaView>
}

export default Home