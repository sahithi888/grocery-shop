import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ProductCard from '../shared/productCard';
import { globalStyles } from '../styles/global';
import products from '../shared/data';

export default function Home() {
    
    return (
        <View style={globalStyles.container}>
            <FlatList
                data={products}
                keyExtractor={(item) => item.p_id.toString()}
                renderItem={ ({item}) => (
                <ProductCard productItem={item} />
                )} />
        </View>
    );
}