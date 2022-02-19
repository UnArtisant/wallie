import React from "react";
import {Home, Scan} from "../../../screens";
import {Image} from "react-native";
import {icons, COLORS} from "../../../constants";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {TabBarCustomButton} from "./custom.button";
import {CustomTabBar} from "./cutsom.tabbar";

const Tab = createBottomTabNavigator()

function Tabs() {
    return <Tab.Navigator
        screenOptions={{
            tabBarShowLabel: false,
            headerShown: false,
            tabBarStyle: {
                position: 'absolute',
                left:0,
                right:0,
                bottom: 0,
                elevation: 0,
                backgroundColor: 'transparent'
            },
        }}
        tabBar={(props) => (<CustomTabBar {...props }/>)}
    >
        <Tab.Screen
            options={{
                tabBarIcon: ({focused}) => (
                    <Image resizeMode="contain" source={icons.more} style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? COLORS.white : COLORS.secondary
                    }}/>
                ),
                tabBarButton: (props) => (
                    <TabBarCustomButton {...props} />
                )
            }}
            name={"Home"}
            component={Home}
        />
        <Tab.Screen
            options={{
                tabBarIcon: ({focused}) => (
                    <Image resizeMode="contain" source={icons.scan} style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? COLORS.white : COLORS.secondary
                    }}/>
                ),
                tabBarButton: (props) => (
                    <TabBarCustomButton {...props} />
                )
            }}
            name={"Scan"}
            component={Scan}
        />
        <Tab.Screen
            options={{
                tabBarIcon: ({focused}) => (
                    <Image resizeMode="contain" source={icons.user} style={{
                        width: 25,
                        height: 25,
                        tintColor: focused ? COLORS.white : COLORS.secondary
                    }}/>
                ),
                tabBarButton: (props) => (
                    <TabBarCustomButton {...props} />
                )
            }}
            name={"User"}
            component={Scan}
        />
    </Tab.Navigator>
}

export default Tabs