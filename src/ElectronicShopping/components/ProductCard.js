import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
// {
//     "id": 1,
//     "title": "General Mobile GM 20",
//     "imgURL": "https://m.media-amazon.com/images/I/51lK00mvFaL._AC._SR180,230.jpg",
//     "price": "₺1.810,21",
//     "inStock": true
// }
const ProductCard = ({ product }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: product.imgURL }}
                style={[product.inStock ? styles.image:styles.image1]}
            />
            <View style={{ flex: 1, justifyContent: 'space-around' }}>
                <Text>{product.title}</Text>
                <Text style={{ fontWeight: 'bold' }}>{product.price}</Text>
                <Text style={{color:'red',fontWeight:'bold'}}>{product.inStock ? null :'sold out' }</Text>
            </View>
        </View>
    )
}
export { ProductCard }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderWidth: 3,
        padding: 10,
        margin: 5,
        borderRadius: 10,
        borderColor: '#e0e0e0'
    },
    image: {
        height: Dimensions.get('window').height / 4,
        resizeMode: 'contain', //resim kutu icine sigdirmak icin orantili olmasi icin
    },
    image1:{
     height: Dimensions.get('window').height / 4,
     resizeMode: 'contain',
     opacity:0.3,
    }

})
