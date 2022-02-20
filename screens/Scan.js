import React, {useEffect} from 'react';
import {Text, View} from "react-native";
import {Camera, useCameraDevices} from "react-native-vision-camera"

const Scan = () => {
    const devices = useCameraDevices()
    const device = devices.back

    const handleCameraPermision = async () => {
        const cameraPermission = await Camera.getCameraPermissionStatus()
        switch (cameraPermission) {
            case "not-determined" :
                await Camera.requestCameraPermission()
                break;
            case "denied":
                break;
            case "authorized":
                break;
            default :
                break;
        }
    }

    useEffect(() => {
        handleCameraPermision()
    }, [])

    console.log(devices)
    if (device == null) return <Text>Loading...</Text>
    return <Camera
        device={device}
        isActive={true}
    />
}

export default Scan