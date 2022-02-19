import React from "react";
import {BottomTabBar} from "@react-navigation/bottom-tabs";
import {View} from "react-native";
import {COLORS} from "../../../constants";

export const CustomTabBar = (props) => {
 return <View>
     <View style={{
         position:"absolute",
         right:0,
         left:0,
         bottom:0,
         height:30,
         backgroundColor: COLORS.white
     }}/>
     <BottomTabBar {...props} />
 </View>
}