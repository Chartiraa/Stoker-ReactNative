import { useState } from 'react';
import { ScrollView, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import { WarehouseAdder } from '../services/DBFunctions';

import colors from '../assets/colors';

export default function WarehouseAdd() {

    const [warehouseName, setWarehouseName] = useState('');

    const showToast = () => {
        Toast.show({
          type: 'success',
          text1: 'Başarılı',
          text2: 'Depo kaydı başarıyla oluşturuldu!'
        });
      }

    const onClickHandler = () => {
        WarehouseAdder(warehouseName).then((returnValue) => {
            returnValue && showToast();
            setWarehouseName('')
        });
    }

    return (
        <>
            <ScrollView>
                <Text style={styles.Title}>Depo Kayıt Formu</Text>
                <TextInput autoCapitalize='characters' placeholderTextColor={colors.inputPlaceholder} value={warehouseName} onChangeText={(e) => setName(e)} style={styles.input} placeholder='Depo Adı' />

                <Button style={styles.Button} textColor={colors.Green} labelStyle={{ fontSize: 18}} icon="account-check" mode="outlined" onPress={onClickHandler}>Depo Kaydı Oluştur</Button>

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
        fontWeight: "bold",
        color: colors.Green,
        borderColor: colors.Green,

    },
    Title: {
        fontSize: 22,
        fontWeight: "bold",
        color: colors.Green,
        marginLeft: 10,
        marginTop: 20
    },
    RadioButtonContainer: {
        flexDirection: 'row', 
        alignSelf: 'center', 
        marginBottom: 15
    },
    Button: {
        borderColor: colors.Green,
        borderWidth: 2,
        marginBottom: 20,
        width: '93.5%',
        alignSelf: 'center'
    }
})