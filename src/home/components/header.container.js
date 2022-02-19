import React from "react";
import {View} from "react-native";
import Header from "./header";
import Banner from "./banner";
import FeaturesContainer from "./features.container";

function HeaderContainer () {
 return <View>
     <Header />
     <Banner />
     <FeaturesContainer />
 </View>
}

export default HeaderContainer