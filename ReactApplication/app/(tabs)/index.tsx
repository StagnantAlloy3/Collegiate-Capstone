import {CameraView, useCameraPermissions} from 'expo-camera/next';
import {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Camera} from "expo-camera";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {useRouter} from "expo-router";

export default function App() {
    const [facing, setFacing] = useState('back');
    const [permission, requestPermission] = useCameraPermissions();
    const [flash, setFlash] = useState(false);
    const [showItemDetails, setShowItemDetails] = useState(false);

    const router = useRouter();

    useEffect(() => {
        (async () => {
            const cameraStatus = await Camera.requestCameraPermissionsAsync();
            await requestPermission();
        })();
    }, []);

    const scannedBarcode = ({type, data}) => {
        router.navigate({pathname: 'itemDetailsBarcode', params: {barcode: data}});
    }

    if (!permission) {
        return (
            <View>
                <Text>We need permission!</Text>
            </View>
        )
    }

    function torchToggle() {
        if (flash) {
            setFlash(false);
        } else {
            setFlash(true);
        }
    }

    return (
        <View style={ styles.container }>
            <CameraView style={styles.camera} facing={facing} barcodeScannerSettings={{
                barcodeTypes: ["ean13", "upc_a", "upc_e"],
            }} onBarcodeScanned={scannedBarcode} flash="auto" enableTorch={flash}>
            </CameraView>
            <Text style={styles.text}>Scan a barcode</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={torchToggle}>
                    <FontAwesome name="flash" color="white" size={32} style={{ alignItems: 'center'}}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    camera: {
        width: '100%',
        height: '66%',
        borderRadius: 2,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#ADD8E6',
        margin: 32,
        borderRadius: 20,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ADD8E6',
    },
});
