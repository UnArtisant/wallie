import React from "react";
import {View} from "react-native";
import Header from "./header";
import Banner from "./banner";
import FeaturesContainer from "./features.container";
import PromoHeader from "./promo.header";

function HeaderContainer () {
 return <View>
     <Header />
     <Banner />
     <FeaturesContainer />
     <PromoHeader />
 </View>
}

export default HeaderContainer