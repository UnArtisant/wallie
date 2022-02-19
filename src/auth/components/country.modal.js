import React from "react";
import {FlatList, Image, Modal, Text, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";
import {COLORS, FONTS, SIZES} from "../../../constants";

function CountryModal({modalVisible, setModalVisible, setSelectedArea, areas}) {

    const Items = ({item}) => {
        return <TouchableOpacity
            onPress={() => {
                setSelectedArea(item)
                setModalVisible(false)
            }}
            style={{
                padding: SIZES.padding * 2,
                flexDirection: "row"
            }}>
            <Image source={{uri: item.flag}} style={{height: 30, width: 30, marginRight: 10}}/>
            <Text style={{...FONTS.body4}}>
                {item.name}
            </Text>
        </TouchableOpacity>
    }

    return <Modal
        animationType={"slide"}
        transparent={true}
        visible={modalVisible}
    >
        <TouchableWithoutFeedback
            onPress={() => setModalVisible(false)}
        >
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <View style={{
                    height: 400,
                    width: SIZES.width * 0.8,
                    backgroundColor: COLORS.lightGreen,
                    borderRadius: SIZES.radius
                }}>
                    <FlatList
                        keyExtractor={item => item.code}
                        data={areas}
                        showsVerticalScrollIndicator={false}
                        style={{
                            padding: SIZES.padding * 2,
                            marginBottom: SIZES.padding * 2
                        }}
                        renderItem={Items}/>
                </View>
            </View>
        </TouchableWithoutFeedback>
    </Modal>
}

export default CountryModal