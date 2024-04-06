import * as React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { CustomerTableEditable } from '../components/CustomerTable';

import colors from '../assets/colors';

export default function CustomerAdd() {

    return (
        <>
            <ScrollView>
                <Text style={styles.Title}>Müşteri Düzenle</Text>
                <CustomerTableEditable />
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    Title: {
        fontSize: 22,
        fontWeight: "bold",
        color: colors.Green,
        marginLeft: 10,
        marginTop: 20
    }
})