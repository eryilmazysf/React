import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, FlatList, StyleSheet, Alert, TextInput } from 'react-native';

import prouductData from './components/product_data.json';
import { ProductCard } from './components';

const App = () => {
    const [searchValue, setSearchValue] = useState("");
    const [displayList, setDisplayList] = useState([]);
    const renderListItem = ({ item }) => <ProductCard product={item} /> //return each value with item in list
    useEffect(() => {
        // Alert.alert("Clarushop", "Hoşgeldiniz, keyifli alışverişler..");
        // ilk acilista tum urunleri gostermek icin
        setDisplayList(prouductData)
    }, []) //bos iken tum data yukle
    //urunleri filtreleme
    useEffect(() => {
        const filteredValue = prouductData.filter(item => {
            const text = searchValue.toUpperCase();
            const productTitle = item.title.toUpperCase();
            return productTitle.indexOf(text) > -1;
        })
        setDisplayList(filteredValue)
    }, [searchValue]) //searchValue deger aldiginda calis demek
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <Text style={styles.banner}>Yusuf Shopping</Text>
                <View style={styles.searchBar}>
                    <TextInput style={{textAlign:'center',fontWeight:'bold'}}
                        placeholder="Search items..."
                        onChangeText={(value) => setSearchValue(value)}
                    />
                </View>
                <FlatList
                    keyExtractor={(_, index) => index.toString()} // _ item
                    data={displayList}
                    renderItem={renderListItem}
                    numColumns={2}
                />
            </View>
        </SafeAreaView>
    )
}
/**
 * 1) Stok durumunu belirtmeniz
 * 2) <SearchBar onSearch={...} />
 */
export default App;
const styles = StyleSheet.create({
    banner: {
        color: 'purple',
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center'
    },
    searchBar: {
        backgroundColor: "#eceff1",
        padding: 8,
        margin: 5,
        borderRadius: 10
    }
})
//stok durumu var mi yok goster
//search bar 