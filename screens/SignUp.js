import React from 'react';
import {KeyboardAvoidingView, Platform, ScrollView} from "react-native";
import LinearGradient from "react-native-linear-gradient";
import {COLORS} from "../constants";
import {Header, Logo, SignInForm} from "../src/auth/components"

const SignUp = ({navigation}) => {
    return <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{flex : 1}}
    >
        <LinearGradient style={{flex: 1}} colors={[COLORS.lime, COLORS.emerald]} >
            <ScrollView >
                <Header />
                <Logo />
                <SignInForm navigation={navigation} />
            </ScrollView>
        </LinearGradient>
    </KeyboardAvoidingView>
}

export default SignUp