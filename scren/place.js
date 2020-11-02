import React,{useState} from 'react';
import {Text,View,TouchableOpacity,FlatList,  ScrollView} from 'react-native';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

export default function Place({navigation}){

  const pressHandler= ()=>
  {
    navigation.push('Address');
  }
    const [place,setPlace ] = useState([
        {name :'abd retail shop ',title: 'Hyderabad' ,distance : '3 kms away',key:'1'},
        { name:'xyz retail shop',title: 'Amerpet' ,distance:'10 kms away ',key:'2'},
        { name:'nmo super market',title: 'banjara hils' ,distance:'3 kms away ',key:'3'},
        {name:'qrst super market',title: 'junliee hills' ,distance:'10 kms away',key:'4'},
        {name :'abd retail shop ',title: 'Hyderabad' ,distance : '3 kms away',key:'5'},
        { name:'xyz retail shop',title: 'Amerpet' ,distance:'10 kms away ',key:'6'},
        { name:'nmo super market',title: 'banjara hils' ,distance:'3 kms away ',key:'7'},
        {name:'qrst super market',title: 'junliee hills' ,distance:'10 kms away',key:'8'},
        {name :'abd retail shop ',title: 'Hyderabad' ,distance : '3 kms away',key:'9'},
        { name:'xyz retail shop',title: 'Amerpet' ,distance:'10 kms away ',key:'10'},
        { name:'nmo super market',title: 'banjara hils' ,distance:'3 kms away ',key:'11'},
        {name:'qrst super market',title: 'junliee hills' ,distance:'10 kms away',key:'12'},
        {name :'abd retail shop ',title: 'Hyderabad' ,distance : '3 kms away',key:'13'},
        { name:'xyz retail shop',title: 'Amerpet' ,distance:'10 kms away ',key:'14'},
        { name:'nmo super market',title: 'banjara hils' ,distance:'3 kms away ',key:'15'},
        {name:'qrst super market',title: 'junliee hills' ,distance:'10 kms away',key:'16'},
        
    ]);
    
    
      
        return(
          <View style={globalStyles.container}>
              <ScrollView>
              <FlatList
    
              data={place}
              renderItem = {({item}) => (
                <TouchableOpacity style={globalStyles.button} onPress={pressHandler}>
                
                 <Text style = {globalStyles.list }> {item.name}, {item.title }, {item.distance} </Text>
                
                  
                </TouchableOpacity>
               ) }
              />
            </ScrollView>
          </View>
    
        );
    }
    
   
      
  
  

    
