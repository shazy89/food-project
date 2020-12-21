import React, {useState} from 'react';
import { Text, StyleSheet, View, TextInput } from "react-native";
import { Feather } from '@expo/vector-icons'; 

const SearchBar = () => {


   return (
       <View style={styles.background}>
            <Feather name="search" size={24} color="black" /> 
            <TextInput style={styles.inputStyle}
            placeholder='Search' 
            />
           
       </View>
   );
};

      

const styles = StyleSheet.create({
    background: {
        
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        alignItems: 'center',
        flexDirection: 'row' 
    }, 
    inputStyle: {
        borderColor: 'black',
        borderWidth: 1 
    } 
})

export default SearchBar