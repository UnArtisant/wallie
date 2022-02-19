import React, {useEffect, useState} from "react";
import {Image, Pressable, Text, TextInput, TouchableOpacity, View} from "react-native";
import {COLORS, FONTS, icons, SIZES} from "../../../constants";
import axios from "axios";
import CountryModal from "./country.modal";

function SignInForm({navigation}) {
    const [visible, setVisible] = useState(true)
    const [modalVisible, setModalVisible] = useState(false)
    const [selectedArea, setSelectedArea] = useState(null)
    const [area, setArea] = useState([])

    const handleArea = async () => {
        const data = await axios.get('https://restcountries.com/v2/all').then(r => r.data)
        const dataArea = data.map(item => {
            return {
                code: item.alpha2Code,
                name: item.name,
                callingCode: `+${item.callingCodes[0]}`,
                flag : item.flags.png
            }
        })
        setArea(dataArea)

        if(dataArea.length > 0) {
            const defaultData = dataArea.filter(item => item.code === "US")
            if(defaultData.length > 0) {
                setSelectedArea(defaultData[0])
            }
        }
    }

    useEffect(() => {
        handleArea()
    }, [])



    return <View style={{
        marginTop: SIZES.padding * 3,
        marginHorizontal: SIZES.padding * 3
    }}>
        <View style={{marginTop: SIZES.padding * 2}}>
            <Text style={{color: COLORS.white}}>Name</Text>
            <TextInput placeholderTextColor={COLORS.white} style={{
                color: COLORS.white,
                marginVertical: SIZES.padding,
                borderBottomColor: COLORS.white,
                height: 40,
                borderBottomWidth: 1,
                ...FONTS.body3
            }} placeholder={"Enter full name"}/>
        </View>
        <View style={{marginTop: SIZES.padding * 2}}>
            <Text style={{color: COLORS.white}}>Phone</Text>
            <View style={{flexDirection: "row"}}>
                <TouchableOpacity
                    onPress={() => setModalVisible(true)}
                    style={{
                    flexDirection: "row",
                    alignItems: "center",
                    width: 100,
                    height: 50,
                    marginHorizontal: 5,
                    borderBottomColor: COLORS.white,
                    borderBottomWidth: 1,
                    ...FONTS.body2
                }}>
                    <View style={{justifyContent: "center", color: COLORS.white}}>
                        <Image resizeMode="contain" style={{height: 10, width: 10, tintColor: COLORS.white}}
                               source={icons.down}/>
                    </View>
                    <View style={{justifyContent: "center", marginLeft: 5, color: COLORS.white}}>
                        <Image resizeMode="contain" style={{height: 30, width: 30}} source={{uri: selectedArea?.flag}}/>
                    </View>
                    <View style={{justifyContent: "center", marginLeft: 5, color: COLORS.white}}>
                        <Text style={{color: COLORS.white}}>{selectedArea?.callingCode}</Text>
                    </View>
                </TouchableOpacity>
                <TextInput placeholderTextColor={COLORS.white} style={{
                    color: COLORS.white,
                    marginVertical: SIZES.padding,
                    borderBottomColor: COLORS.white,
                    height: 40,
                    flex: 1,
                    borderBottomWidth: 1,
                    ...FONTS.body3
                }} placeholder={"Enter your phone"}/>
            </View>
        </View>
        <View style={{marginTop: SIZES.padding * 2}}>
            <Text style={{color: COLORS.white}}>Password</Text>
            <TextInput placeholderTextColor={COLORS.white}
                       selectionColor={COLORS.white}
                       secureTextEntry={visible}
                       style={{
                           color: COLORS.white,
                           marginVertical: SIZES.padding,
                           borderBottomColor: COLORS.white,
                           height: 40,
                           borderBottomWidth: 1,
                           ...FONTS.body3
                       }}
                       placeholder={"Enter password"}/>
            <Pressable onPress={() => setVisible(v => !v)} style={{position: "absolute", right: 10, bottom: 15}}>
                <Image style={{height: 20, width: 20}} resizeMode="contain" source={icons.eye}/>
            </Pressable>
        </View>
        <View style={{margin: SIZES.padding * 3}}>
            <TouchableOpacity
                onPress={() => navigation.navigate("Home")}
                style={{
                height: 60,
                backgroundColor: COLORS.black,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: SIZES.radius / 1.5,
            }}>
                <Text style={{color: COLORS.white, ...FONTS.h3}}>Continue</Text>
            </TouchableOpacity>
        </View>
        <CountryModal areas={area} setSelectedArea={setSelectedArea} modalVisible={modalVisible} setModalVisible={setModalVisible} />
    </View>
}

export default SignInForm