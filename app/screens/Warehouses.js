import { ScrollView, Text, StyleSheet } from 'react-native';
import { WarehouseTable } from '../components/WarehousesTable';

import colors from '../assets/colors';


export default function App() {

    return (
        <>
            <ScrollView>
                <Text style={styles.Title}>Depo Listesi</Text>

                <WarehouseTable />
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