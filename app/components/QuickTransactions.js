import { StyleSheet, Text, View } from 'react-native';
import { faUserPlus, faTruckFast, faBarcode, faRotateLeft, faPlus, faWarehouse } from '@fortawesome/free-solid-svg-icons'

import FastButton from './FastButton';

export default function QuickTransactions() {

    const iconSize = 70

    return (
        <View>
            <Text style={styles.Title}>Hızlı İşlemler</Text>
            <View style={{ marginTop: 20 }}>
                <View style={styles.FastButtonView}>

                    <FastButton icon={faUserPlus} title={'Müşteri Ekle'} iconSize={iconSize} href="../screens/Customers" />
                    <FastButton icon={faTruckFast} title={'Satış Yap'} iconSize={iconSize} href="../screens/Sell" />
                </View>
                <View style={styles.FastButtonView}>
                    <FastButton icon={faBarcode} title={'Barkod Oku-'} iconSize={iconSize} href="../screens/ScanBarcode" />
                    <FastButton icon={faWarehouse} title={'Depolar'} iconSize={iconSize} href="../screens/Warehouses" />
                </View>
                <View style={styles.FastButtonView}>
                    <FastButton icon={faPlus} title={'Ürün Kaydı'} iconSize={iconSize} href="../screens/ProductAdd" />
                    <FastButton icon={faRotateLeft} title={'İade Yap-'} iconSize={iconSize} href="../screens/Return" />
                </View>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    FastButtonView: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginVertical: 10
    },
    Title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 20
    }
});
