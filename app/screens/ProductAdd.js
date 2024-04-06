import { useState } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import ProductTable from '../components/ProductTable';
import Toast from 'react-native-toast-message';
import { Dropdown } from 'react-native-element-dropdown';

import TableFiller from '../services/DBFunctions';

import DropdownData from '../data/DropdownData';
import colors from '../assets/colors';


export default function App() {

    TableFiller('Customers');

    const showToast = () => {
        Toast.show({
            type: 'success',
            text1: 'Başarılı',
            text2: 'Müşteri kaydı başarıyla oluşturuldu!'
        });
    }

    const [groupValue, setGroupValue] = useState(null);
    const [groupIsFocus, setGroupIsFocus] = useState(false);

    const [packageValue, setPackageValue] = useState(null);
    const [packageIsFocus, setPackageIsFocus] = useState(false);

    const [unitValue, setUnitValue] = useState(null);
    const [unitIsFocus, setUnitIsFocus] = useState(false);

    return (
        <>
            <ScrollView>
                <Text style={styles.Title}>Ürün Kayıt Formu</Text>
                <TextInput placeholderTextColor={colors.inputPlaceholder} style={styles.input} placeholder='Barkod' />

                <TextInput placeholderTextColor={colors.inputPlaceholder} style={styles.input} placeholder='Ürün Adı' />

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
                        value={groupValue}
                        onFocus={() => setGroupIsFocus(true)}
                        onBlur={() => setGroupIsFocus(false)}
                        onChange={item => {
                            setGroupValue(item.value);
                            setGroupIsFocus(false);
                        }}
                    />
                </View>

                <TextInput placeholderTextColor={colors.inputPlaceholder} style={styles.input} placeholder='Ürün Etken Maddesi' />

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
                        value={packageValue}
                        onFocus={() => setPackageIsFocus(true)}
                        onBlur={() => setPackageIsFocus(false)}
                        onChange={item => {
                            setPackageValue(item.value);
                            setPackageIsFocus(false);
                        }}
                    />
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between'}}>

                    <TextInput inputMode='numeric' placeholderTextColor={colors.inputPlaceholder} style={styles.input2} placeholder='Büyüklük' />

                    <View style={{ width: '50%', padding: 12}}>
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
                            value={unitValue}
                            onFocus={() => setUnitIsFocus(true)}
                            onBlur={() => setUnitIsFocus(false)}
                            onChange={item => {
                                setUnitValue(item.value);
                                setUnitIsFocus(false);
                            }}
                        />
                    </View>

                </View>
                <TextInput placeholderTextColor={colors.inputPlaceholder} style={styles.input} placeholder='Güncel Satış Fiyatı' />



                <Button style={styles.Button} textColor={colors.Green} labelStyle={{ fontSize: 18 }} icon="account-check" mode="outlined" onPress={showToast}>Ürün Kaydı Oluştur</Button>

                <Toast />
            </ScrollView>
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
        marginTop: 15
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