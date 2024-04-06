import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import QuickTransactions from '../components/QuickTransactions';

export default function MainPage() {

    return (
        <ScrollView style={styles.container}>
            <QuickTransactions />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ebebeb',
        height: '100%',
    }
});
