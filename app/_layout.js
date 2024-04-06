import { createDrawerNavigator, DrawerItemList, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import { SafeAreaView, View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUserPlus, faHome, faUser, faBottleWater, faPlus, faWarehouse } from '@fortawesome/free-solid-svg-icons'

import MainPage from './screens/MainPage'

import Customers from './screens/Customers'
import CustomerAdd from './screens/CustomerAdd'
import CustomerEdit from './screens/CustomerEdit'

import Products from './screens/Products'
import ProductAdd from './screens/ProductAdd'
import ProductEdit from './screens/ProductEdit'

import Stocks from './screens/Stocks'
import StockAdd from './screens/StockAdd'
import Sell from './screens/Sell'

import Warehouses from './screens/Warehouses'
import WarehouseAdd from './screens/WarehouseAdd'
import WarehouseEdit from './screens/WarehouseEdit'


const Drawer = createDrawerNavigator();

export default function HomeLayout() {

    const [customerExpanded, setCustomerExpanded] = useState(false);
    const [productExpanded, setProductExpanded] = useState(false);
    const [stockExpanded, setStockExpanded] = useState(false);
    const [warehouseExpanded, setWarehouseExpanded] = useState(false);

    const customerToggle = () => {
        setCustomerExpanded(!customerExpanded);
        setProductExpanded(false);
        setStockExpanded(false);
        setWarehouseExpanded(false);
    };
    const productToggle = () => {
        setCustomerExpanded(false);
        setProductExpanded(!productExpanded);
        setStockExpanded(false);
        setWarehouseExpanded(false);
    };
    const stockToggle = () => {
        setCustomerExpanded(false);
        setProductExpanded(false);
        setStockExpanded(!stockExpanded);
        setWarehouseExpanded(false);

    };
    const warehouseToggle = () => {
        setCustomerExpanded(false);
        setProductExpanded(false);
        setStockExpanded(false);
        setWarehouseExpanded(!warehouseExpanded);
    };

    const CustomDrawerContent = (props) => {
        return (

            <DrawerContentScrollView {...props}>

                <View style={{ padding: 10 }}>
                    <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#3daf2c' }}>Stoker</Text>
                </View>

                <View style={{ marginLeft: 18.5 }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('screens/MainPage')}>
                        <Text style={drawerStyles.drawerLabelStyle}>Ana Sayfa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={customerToggle}>
                        <Text style={drawerStyles.drawerLabelStyle}>Cari Kayıtlar</Text>
                    </TouchableOpacity>

                    {customerExpanded && (
                        <View style={{ paddingLeft: 20, backgroundColor: '#3daf2c' }}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('screens/Customers')}>
                                <Text style={drawerStyles.drawerLabelStyle}>Müşteriler</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('screens/CustomerAdd')}>
                                <Text style={drawerStyles.drawerLabelStyle}>Müşteri Ekle</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('screens/CustomerEdit')}>
                                <Text style={drawerStyles.drawerLabelStyle}>Müşteri Düzenle/Sil</Text>
                            </TouchableOpacity>
                        </View>
                    )}

                    <TouchableOpacity onPress={productToggle}>
                        <Text style={drawerStyles.drawerLabelStyle}>Ürün Kayıtları</Text>
                    </TouchableOpacity>

                    {productExpanded && (
                        <View style={{ marginLeft: 20 }}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('screens/Products')}>
                                <Text style={drawerStyles.drawerLabelStyle}>Ürünler</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('screens/ProductAdd')}>
                                <Text style={drawerStyles.drawerLabelStyle}>Ürün Ekle</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('screens/ProductEdit')}>
                                <Text style={drawerStyles.drawerLabelStyle}>Ürün Düzenle/Sil</Text>
                            </TouchableOpacity>
                        </View>
                    )}

                    <TouchableOpacity onPress={stockToggle}>
                        <Text style={drawerStyles.drawerLabelStyle}>Stok Kayıtları</Text>
                    </TouchableOpacity>

                    {stockExpanded && (
                        <View style={{ marginLeft: 20 }}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('screens/Stocks')}>
                                <Text style={drawerStyles.drawerLabelStyle}>Stoklar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('screens/StockAdd')}>
                                <Text style={drawerStyles.drawerLabelStyle}>Stok Girişi</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('screens/Sell')}>
                                <Text style={drawerStyles.drawerLabelStyle}>Stok Çıkışı</Text>
                            </TouchableOpacity>
                        </View>
                    )}

                    <TouchableOpacity onPress={warehouseToggle}>
                        <Text style={drawerStyles.drawerLabelStyle}>Depo Kayıtları</Text>
                    </TouchableOpacity>

                    {warehouseExpanded && (
                        <View style={{ marginLeft: 20 }}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('screens/Warehouses')}>
                                <Text style={drawerStyles.drawerLabelStyle}>Depolar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('screens/WarehouseAdd')}>
                                <Text style={drawerStyles.drawerLabelStyle}>Depo Ekle</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => props.navigation.navigate('screens/WarehouseEdit')}>
                                <Text style={drawerStyles.drawerLabelStyle}>Depo Düzenle/Sil</Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>

            </DrawerContentScrollView>
        );
    };

    return (
        <Drawer.Navigator screenOptions={drawerStyles} drawerContent={props => <CustomDrawerContent {...props} />}>
            <Drawer.Screen name="screens/MainPage" component={MainPage} />
            <Drawer.Screen name="screens/Customers" component={Customers} />
            <Drawer.Screen name="screens/CustomerAdd" component={CustomerAdd} />
            <Drawer.Screen name="screens/CustomerEdit" component={CustomerEdit} />
            <Drawer.Screen name="screens/Products" component={Products} />
            <Drawer.Screen name="screens/ProductAdd" component={ProductAdd} />
            <Drawer.Screen name="screens/ProductEdit" component={ProductEdit} />
            <Drawer.Screen name="screens/Stocks" component={Stocks} />
            <Drawer.Screen name="screens/StockAdd" component={StockAdd} />
            <Drawer.Screen name="screens/Sell" component={Sell} />
            <Drawer.Screen name="screens/Warehouses" component={Warehouses} />
            <Drawer.Screen name="screens/WarehouseAdd" component={WarehouseAdd} />
            <Drawer.Screen name="screens/WarehouseEdit" component={WarehouseEdit} />
        </Drawer.Navigator>
    )

}

const drawerStyles = StyleSheet.create({
    drawerStyle: {
        backgroundColor: "#333",
        width: 220,
        paddingTop: 30
    },
    headerStyle: {
        backgroundColor: "#3daf2c",
    },
    headerTintColor: "#fff",
    drawerLabelStyle: {
        color: "#ddd",
        fontSize: 15,
        fontWeight: "bold",
        marginVertical: 10
    },
    headerTitle: 'Stoker',
    headerTitleAlign: 'center',
    headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 40,
        marginTop: -5,
        color: "#fff",
    }
})