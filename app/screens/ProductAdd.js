import { useState } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Button } from 'react-native-paper';
import ProductTable from '../components/ProductTable';
import Toast from 'react-native-toast-message';
import { Dropdown } from 'react-native-element-dropdown';

import { ProductAdder } from '../services/DBFunctions';

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

    const [groupIsFocus, setGroupIsFocus] = useState(false);

    const [packageIsFocus, setPackageIsFocus] = useState(false);

    const [unitIsFocus, setUnitIsFocus] = useState(false);

    const [barcode, setBarcode] = useState('');
    const [productName, setProductName] = useState('');
    const [productGroup, setProductGroup] = useState('');
    const [productIngredient, setProductIngredient] = useState('');
    const [productPackage, setProductPackage] = useState('');
    const [productAmount, setProductAmount] = useState('');
    const [productUnit, setProductUnit] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const onClickHandler = () => {
        ProductAdder(barcode, productName, productGroup, productIngredient, productPackage, productAmount, productUnit, productPrice).then((returnValue) => {
            returnValue && showToast();
            setBarcode('');
            setProductName('');
            setProductGroup(null);
            setProductIngredient('');
            setProductPackage(null);
            setProductAmount('');
            setProductUnit(null);
            setProductPrice('');

        });
    }


    return (
        <>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={styles.sscontainer}>
                <ScrollView>
                    <Text style={styles.Title}>Ürün Kayıt Formu</Text>
                    <TextInput placeholderTextColor={colors.inputPlaceholder} style={styles.input} value={barcode} onChangeText={(e) => setBarcode(e)} placeholder='Barkod' />

                    <TextInput placeholderTextColor={colors.inputPlaceholder} style={styles.input} value={productName} onChangeText={(e) => setProductName(e)} placeholder='Ürün Adı' />

                    <View style={styles.container}>
                        <Dropdown
                            style={[styles.dropdown, groupIsFocus && { borderColor: colors.Green }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            iconStyle={styles.iconStyle}
                            data={DropdownData.productgroupdata}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!groupIsFocus ? 'Ürün Grubu' : '...'}
                            searchPlaceholder="Search..."
                            value={productGroup}
                            onFocus={() => setGroupIsFocus(true)}
                            onBlur={() => setGroupIsFocus(false)}
                            onChange={item => {
                                setProductGroup(item.value);
                                setGroupIsFocus(false);
                            }}
                        />
                    </View>

                    <TextInput placeholderTextColor={colors.inputPlaceholder} style={styles.input} value={productIngredient} onChangeText={(e) => setProductIngredient(e)} placeholder='Ürün Etken Maddesi' />

                    <View style={styles.container}>
                        <Dropdown
                            style={[styles.dropdown, packageIsFocus && { borderColor: colors.Green }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            iconStyle={styles.iconStyle}
                            data={DropdownData.productpackagedata}
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!packageIsFocus ? 'Ürün Ambalajı' : '...'}
                            searchPlaceholder="Search..."
                            value={productPackage}
                            onFocus={() => setPackageIsFocus(true)}
                            onBlur={() => setPackageIsFocus(false)}
                            onChange={item => {
                                setProductPackage(item.value);
                                setPackageIsFocus(false);
                            }}
                        />
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                        <TextInput inputMode='numeric' placeholderTextColor={colors.inputPlaceholder} style={styles.input2} value={productAmount} onChangeText={(e) => setProductAmount(e)} placeholder='Büyüklük' />

                        <View style={{ width: '50%', padding: 12 }}>
                            <Dropdown
                                style={[styles.dropdown, unitIsFocus && { borderColor: colors.Green }]}
                                placeholderStyle={styles.placeholderStyle}
                                selectedTextStyle={styles.selectedTextStyle}
                                iconStyle={styles.iconStyle}
                                data={DropdownData.productunitdata}
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!unitIsFocus ? 'Ürün Birimi' : '...'}
                                searchPlaceholder="Search..."
                                value={productUnit}
                                onFocus={() => setUnitIsFocus(true)}
                                onBlur={() => setUnitIsFocus(false)}
                                onChange={item => {
                                    setProductUnit(item.value);
                                    setUnitIsFocus(false);
                                }}
                            />
                        </View>

                    </View>
                    <TextInput placeholderTextColor={colors.inputPlaceholder} style={styles.input} value={productPrice} onChangeText={(e) => setProductPrice(e)} placeholder='Güncel Satış Fiyatı' />



                    <Button style={styles.Button} textColor={colors.Green} labelStyle={{ fontSize: 18 }} icon="account-check" mode="outlined" onPress={onClickHandler}>Ürün Kaydı Oluştur</Button>

                    <Toast />
                </ScrollView>
            </KeyboardAvoidingView>
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
    input2: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        fontSize: 16,
        fontWeight: "bold",
        color: colors.Green,
        borderColor: colors.Green,
        width: '40%',
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
    }

})