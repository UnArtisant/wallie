import React from 'react';
import type {Node} from 'react';
import {DefaultTheme, NavigationContainer} from "@react-navigation/native";
import {SignUp} from "./screens";
import Tabs from "./src/navigation/components/tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        border: 'transparent'
    }
}

const Stack = createNativeStackNavigator()

const App: () => Node = () => {
    return (
        <NavigationContainer theme={theme}>
            <Stack.Navigator
                initialRouteName={"SignUp"}
                screenOptions={{headerShown: false}}>
                <Stack.Screen name={"SignUp"} component={SignUp}/>
                <Stack.Screen name={"Home"} component={Tabs}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default App;
