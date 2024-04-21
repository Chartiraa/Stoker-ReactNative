import { useState, useEffect } from 'react';
import { ScrollView, View, Text, StyleSheet, KeyboardAvoidingView, Platform, Alert } from 'react-native';
import { Button, TextInput, RadioButton, DataTable, PaperProvider } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import { Dropdown } from 'react-native-element-dropdown';
import { useNavigation } from '@react-navigation/native';

import { ProductAdder } from '../services/DBFunctions';
import BarcodeScanner from './BarcodeScanner';
import { CustomerTableFiller, ProductTableFiller } from '../services/DBFunctions';

import DropdownData from '../data/DropdownData';
import colors from '../assets/colors';


export default function App() {

    const showToast = () => {
        Toast.show({
            type: 'success',
            text1: 'Başarılı',
            text2: 'Müşteri kaydı başarıyla oluşturuldu!'
        });
    }

    const ProductRegisterNotExist = () =>
        Alert.alert('Ürün Kaydı Bulunamadı!', 'Barkodu okutulan ürün sisteme kayıt edilmemiş!', [
            {
                text: 'İptal',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel',
            },
            { text: 'Kaydet', onPress: () => navigation.navigate('screens/ProductAdd') }
        ]);

    const navigation = useNavigation();


    const [scanner, setScanner] = useState(false);

    const [click, setClick] = useState('');

    const [value, setValue] = useState('Nakit');

    const [customers, setCustomers] = useState({});

    const [products, setProducts] = useState([]);

    const [selectedCustomer, setSelectedCustomer] = useState({});

    const [shoppingChart, setShoppingChart] = useState([]);

    const [barcode, setBarcode] = useState('');

    useEffect(() => {
        CustomerTableFiller().then((data) => {
            setCustomers(data);
        })
    })

    /*useEffect(() => {
        var productList = [];

        ProductTableFiller().then((data) => {
            Object.keys(data).map(key => productList.push(data[key].barcode))
            setProducts(productList)
        })
    })*/

    const onClickHandler = () => {

    }

    useEffect(() => {

        var sellingProducts = shoppingChart

        products.forEach(item => {
            if (barcode === item.barcode) {
                if (sellingProducts.length > 0) {

                    sellingProducts.forEach(item => {
                        if (barcode === item.barcode) {
                            item.quantity += 1
                        }
                        else {
                            ProductRegisterNotExist()
                        }
                    });
                } else {
                    sellingProducts.push({ barcode: barcode, quantity: 1 })
                }
            }
            else {
                ProductRegisterNotExist()
            }
        });

        setShoppingChart(sellingProducts)

    }, [barcode])

    return (
        <>
            {scanner && <BarcodeScanner scanner={scanner} setScanner={setScanner} barcode={barcode} setBarcode={setBarcode} />}

            {!scanner && <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.sscontainer}>
                <ScrollView>
                    <Text style={styles.Title}>Satış Ekranı</Text>

                    <View style={styles.container}>
                        <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            iconStyle={styles.iconStyle}
                            data={Object.keys(customers).map((key) => ({ label: customers[key].name + ' ' + customers[key].surname, value: customers[key].tc }))}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={'Müşteri Seçin'}
                            search
                            searchPlaceholder="Ara..."
                            value={selectedCustomer}
                            onChange={item => setSelectedCustomer(item.value)}
                        />
                    </View>

                    <TextInput placeholderTextColor={colors.inputPlaceholder} contentStyle={styles.barcode} style={{ backgroundColor: 'transparent' }} underlineStyle={{ backgroundColor: 'transparent' }}
                        right={<TextInput.Icon onPress={() => setScanner(true)} style={styles.icon} icon="barcode-scan" />}
                        value={barcode} onChangeText={(e) => setBarcode(e)} placeholder='Barkod' />

                    <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                        <View style={styles.RadioButtonContainer}>
                            <RadioButton.Item color={colors.Green} label="Nakit" value="Nakit" />
                            <RadioButton.Item color={colors.Green} label="Kart" value="Kart" />
                            <RadioButton.Item color={colors.Green} label="Defter" value="Defter" />
                        </View>
                    </RadioButton.Group>

                    <Button style={styles.Button} textColor={colors.Green} labelStyle={{ fontSize: 18 }} icon="cash-register" mode="outlined" onPress={onClickHandler}>Satışı Onayla</Button>

                    <PaperProvider>
                        <DataTable>
                            <DataTable.Header>
                                <DataTable.Title>Ürün İsmi</DataTable.Title>
                                <DataTable.Title>Ambalaj</DataTable.Title>
                                <DataTable.Title numeric >Adet</DataTable.Title>
                            </DataTable.Header>

                            {Object.keys(shoppingChart).map(key => (
                                <DataTable.Row onPress={() => setClick(items[key].productName)} key={items[key].barcode}>
                                    <DataTable.Cell>{items[key].name}</DataTable.Cell>
                                    <DataTable.Cell>{items[key].surname}</DataTable.Cell>
                                    <DataTable.Cell numeric>{items[key].tel}</DataTable.Cell>
                                    <DataTable.Cell numeric>{items[key].tc}</DataTable.Cell>
                                </DataTable.Row>
                            ))}

                        </DataTable>
                    </PaperProvider>

                    <Toast />
                </ScrollView>
            </KeyboardAvoidingView>}


        </>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        fontWeight: "bold",
        color: '#000',
        borderColor: colors.Green,
    },
    barcode: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        fontWeight: "bold",
        color: '#000',
        borderColor: colors.Green,
        width: '93.5%',
    },
    Title: {
        fontSize: 22,
        fontWeight: "bold",
        color: colors.Green,
        marginLeft: 10,
        marginTop: 20
    },
    Button: {
        borderColor: colors.Green,
        borderWidth: 2,
        marginBottom: 20,
        marginTop: 15,
        width: '93.5%',
        alignSelf: 'center'
    },
    container: {
        padding: 12,
    },
    dropdown: {
        height: 40,
        borderColor: colors.Green,
        borderWidth: 1,
        paddingHorizontal: 8,
    },
    placeholderStyle: {
        fontWeight: 'bold',
        color: colors.inputPlaceholder
    },
    selectedTextStyle: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    icon: {
        marginTop: 14,
        marginRight: 30,
        zIndex: 10
    },
    RadioButtonContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginBottom: 15
    }
})