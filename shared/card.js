import React from 'react';
import {StyleSheet,View} from 'react-native';

export default function Card(props){

    return(
       <View style={styles.card}> 
           <View style={styles.cardContainer}>
               {props.children}
           </View>
       </View>
    );
}

const styles = StyleSheet.create  ({

    card:{
        borderRadius:6,
        elevation:3,
        backgroundColor:'pink',
        shadowOffset: {width:1,height:1},
        shadowColor:'black',
        shadowOpacity:0.3,
        shadowRadius:4,
        marginHorizontal:4,
        marginVertical:6,
    },
    cardContainer:{

        marginHorizontal:18,
        marginBottom:10,
        marginTop:10,

    },
});