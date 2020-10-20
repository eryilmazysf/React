import React from 'react';
import {View,Text,StyleSheet,TextInput} from 'react-native';

const SearchBar =(props) =>{
    return(
        <View style={styles.searchBar}>
            <TextInput style={{textAlign:'center',fontWeight:'bold'}}
                        placeholder="Search items..."
                        onChangeText={(valueText) => props.change (valueText) }
                    />
        </View>
    )
}

export {SearchBar};

const styles=StyleSheet.create({
    searchBar: {
        backgroundColor: "#eceff1",
        padding: 8,
        margin: 5,
        borderRadius: 10
    }
})