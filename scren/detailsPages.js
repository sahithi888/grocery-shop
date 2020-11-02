import React from 'react';
import {StyleSheet,Text,View,Button,ScrollView,Image,FlatList} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';
import products from '../shared/data';
import ProductCard from '../shared/productCard';
import {connect} from 'react-redux';



export default function Details({navigation}){
    

    const pressHandler = ()=>{
        navigation.push('Cart');
    }

    return(
    <View style ={globalStyles.container}>
        
        <Button title ='go to cart' onPress ={ pressHandler}/>
        <ScrollView>
            <Card>
        
            <FlatList
                data={products}
                keyExtractor={(item) => item.p_id.toString()}
                renderItem={ ({item}) => (
                <ProductCard productItem={item} />
                
                )} />
           
        

    </Card>
    </ScrollView>
    </View>

    );
}
 const styles = StyleSheet.create({

    productImg:{
        width:200,
        height:200,
      },
    Img:{

        alignItems:'center',
         marginHorizontal:30,
    },


     });
