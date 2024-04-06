import { ScrollView, Text, StyleSheet } from 'react-native';
import ProductTable from '../components/ProductTable';

import colors from '../assets/colors';


export default function App() {

    return (
        <>
            <ScrollView>
                <Text style={styles.Title}>Ürün Listesi</Text>

                <ProductTable />
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