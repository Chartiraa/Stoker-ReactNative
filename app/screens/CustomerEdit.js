import React, { useCallback, useState, useRef, useEffect } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { CustomerTableEditable } from '../components/CustomerTable';

import colors from '../assets/colors';

export default function CustomerAdd() {

    const bottomSheetRef = useRef(null);

    const handleSheetChanges = useCallback((index) => {
        console.log('handleSheetChanges', index);
    }, []);

    const [click, setClick] = useState('');

    useEffect(() => {
        click == '' ? bottomSheetRef.current?.close() : bottomSheetRef.current?.expand();
    }, [click])

    return (

        <View style={styles.container}>

            <Text style={styles.Title}>Müşteri Düzenle</Text>
            <CustomerTableEditable click={click} setClick={setClick} />

            <BottomSheet ref={bottomSheetRef} onChange={handleSheetChanges} snapPoints={['6%', '50%']} style={styles.contentContainer}>
                <BottomSheetView style={styles.contentContainer}>
                    <Text>Awesome 🎉</Text>
                    <Text>{click}</Text>
                </BottomSheetView>
            </BottomSheet>

        </View>

    );
}

const styles = StyleSheet.create({
    Title: {
        fontSize: 22,
        fontWeight: "bold",
        color: colors.Green,
        marginLeft: 10,
        marginTop: 20
    },
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
    },
})