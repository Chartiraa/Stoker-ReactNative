import { CameraView, useCameraPermissions } from 'expo-camera/next';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';

export default function BarcodeScanner(props) {
    const [permission, requestPermission] = useCameraPermissions();

    if (!permission) {
        return <Text>Camera permissions are not available.</Text>;
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text>Kamera izinleri verilmemiş. Lütfen kamera izinlerini verin.</Text>
                <Button title="İzin ver" onPress={() => requestPermission()} />
            </View>
        );
    }

    const barcodeHandler = ({ data }) => {
        props.setScanner(false);
        props.setBarcode(data);
        console.log(data);
    }

    return (
        <View style={styles.container}>
            <CameraView style={styles.camera} barcodeScannerSettings={{barcodeTypes: ['qr', 'ean13', 'datamatrix']}} onBarcodeScanned={props.scanner ? barcodeHandler : undefined} facing={'back'} ></CameraView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
    camera: {
        flex: 1,
        width: '100%',
    },
    text: {
        color: 'white',
        fontSize: 18,
    },
});
