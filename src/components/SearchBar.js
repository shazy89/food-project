import React, {useState} from 'react';
import { Text, StyleSheet, View, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons'; 

const SearchBar = () => {


   return (
       <View style={styles.background}>
            <Feather name="search" style={styles.iconStyle} color="black" /> 
            <TextInput style={styles.inputStyle}
            placeholder='Search' 
            />
           
       </View>
   );
};

      

const styles = StyleSheet.create({
    background: {
        marginTop: 12,
        backgroundColor: '#ededed',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: 'row' ,
        
    }, 
    inputStyle: {
        flex: 1,
        fontSize: 18 
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center'
    } 
})

export default SearchBar