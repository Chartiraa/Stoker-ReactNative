import { useState } from 'react';
import { ScrollView, View, Text, TextInput, StyleSheet } from 'react-native';
import { RadioButton, Button } from 'react-native-paper';
import Toast from 'react-native-toast-message';
import { CustomerAdder } from '../services/DBFunctions';

import colors from '../assets/colors';

export default function CustomerAdd() {

    const [value, setValue] = useState('Çiftçi');

    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [tel, setTel] = useState('');
    const [tc, setTc] = useState('');

    const showToast = () => {
        Toast.show({
          type: 'success',
          text1: 'Başarılı',
          text2: 'Müşteri kaydı başarıyla oluşturuldu!'
        });
      }

    const onClickHandler = () => {
        CustomerAdder(name, surname, tel, tc, value).then((returnValue) => {
            returnValue && showToast();
            setName('');
            setSurname('');
            setTel('');
            setTc('');
            setValue('Çiftçi');
        });
    }

    return (
        <>
            <ScrollView>
                <Text style={styles.Title}>Müşteri Kayıt Formu</Text>
                <TextInput autoCapitalize='characters' placeholderTextColor={colors.inputPlaceholder} value={name} onChangeText={(e) => setName(e)} style={styles.input} placeholder='İsim' />

                <TextInput autoCapitalize='characters' placeholderTextColor={colors.inputPlaceholder} value={surname} onChangeText={(e) => setSurname(e)} style={styles.input} placeholder='Soyisim' />

                <TextInput placeholderTextColor={colors.inputPlaceholder} value={tc} onChangeText={(e) => setTc(e)} style={styles.input} keyboardType='number-pad' placeholder='TC Kimlik No' />

                <TextInput placeholderTextColor={colors.inputPlaceholder}value={tel} onChangeText={(e) => setTel(e)} style={styles.input} keyboardType='phone-pad' placeholder='Telefon No' />

                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                    <View style={styles.RadioButtonContainer}>
                        <RadioButton.Item color={colors.Green} label="Çiftçi" value="Çiftçi" />
                        <RadioButton.Item color={colors.Green} label="Bayi" value="Bayi" />
                        <RadioButton.Item color={colors.Green} label="Firma" value="Firma" />
                    </View>
                </RadioButton.Group>

                <Button style={styles.Button} textColor={colors.Green} labelStyle={{ fontSize: 18}} icon="account-check" mode="outlined" onPress={onClickHandler}>Müşteri Kaydı Oluştur</Button>

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