
import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions,TouchableOpacity, ActionSheetIOS } from 'react-native';
import SwiperFlatList from 'react-native-swiper-flatlist';


export default class Format extends Component {
   
    render() {
    return (
       
<View style={styles.container}>
       
        <View style={styles.slide}>
                    <View >
                        
                        <Image style={styles.setimage}
                        source={require('../assets/images/j.png')}
                        />
                        <Text style={styles.heading}>
                        Welcome to my app!!
                        </Text>
                        
                    </View>  
                
            <SwiperFlatList  showsPagination={false} autoplay={true} >
                <View style={styles.slider}>
                    <TouchableOpacity> 
                        <Image style={styles.edit}
                        source={require('../assets/images/coupon.jpg')}
                        />
                    </TouchableOpacity> 
                </View>
                <View style={styles.slider}>
                    <TouchableOpacity> 
                        <Image style={styles.edit}
                        source={require('../assets/images/20.jpg')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.slider}>
                    <TouchableOpacity> 
                        <Image style={styles.edit}
                        source={require('../assets/images/60.png')}
                        />
                    </TouchableOpacity> 
                </View>
                <View style={styles.slider}>
                    <TouchableOpacity> 
                        <Image style={styles.edit}
                        source={require('../assets/images/new.png')}
                        />
                    </TouchableOpacity> 
                </View>
            </SwiperFlatList>
        </View>
    <View style={styles.innercontainer}>
        <View>
                    <Text style={{color: 'white',  textAlign:'center'}}>
                        Strawberry
                    </Text>
                    <TouchableOpacity>
                    <Image style={styles.imagefix}
                    source={require('../assets/images/strawberry.jpg')}
                    />
                    </TouchableOpacity>
                    <Text  style={{color: 'white',
                     textAlign:'center', 
                     textDecorationLine: 'line-through'
                     }}>
                        ₹ 135/kg</Text>
                        <Text style={{color: 'white',
                     textAlign:'center'}}>₹100/kg</Text>
        </View>
        <View>
                    <Text style={{color: 'white',  textAlign:'center'}}>
                        Wheat
                    </Text>
                    <TouchableOpacity>
                    <Image style={styles.imageset}
                    source={require('../assets/images/wheat.jpg')}
                    />  
                    </TouchableOpacity>
                    <Text  style={{color: 'white',
                     textAlign:'center', 
                     textDecorationLine: 'line-through'
                     }}>
                        ₹ 135/kg</Text>
                        <Text style={{color: 'white',
                     textAlign:'center'}}>₹100/kg</Text>
        </View>
                
    </View>
    <View style={styles.outercontainer}>
                <View>
                    <Text style={{color: 'white',  textAlign:'center'}}>
                        Grapes
                    </Text>
                    <TouchableOpacity>
                    <Image style={styles.imagefix}
                    source={require('../assets/images/grapes.jpg')}
                    />
                    </TouchableOpacity>
                    <Text  style={{color: 'white',
                     textAlign:'center', 
                     textDecorationLine: 'line-through'
                     }}>
                        ₹ 135/kg</Text>
                        <Text style={{color: 'white',
                     textAlign:'center'}}>₹100/kg</Text>
                </View>
                <View>
                    <Text style={{color: 'white',  textAlign:'center'}}>
                        Mango
                    </Text>
                    <TouchableOpacity>
                    <Image style={styles.imageset}
                    source={require('../assets/images/mango.jpeg')}
                    />  
                    </TouchableOpacity>
                    <Text  style={{color: 'white',
                     textAlign:'center', 
                     textDecorationLine: 'line-through'
                     }}>
                        ₹ 135/kg</Text>
                        <Text style={{color: 'white',
                     textAlign:'center'}}>₹100/kg</Text>
                </View>
                
    </View>    
    <View style={styles.morecontainer}>
                <View>
                    <Text style={{color: 'white',  textAlign:'center'}}>
                    Orange
                    </Text>
                    <TouchableOpacity>
                    <Image style={styles.imagefix}
                    source={require('../assets/images/orange.jpg')}
                    />
                    </TouchableOpacity>
                    <Text  style={{color: 'white',
                     textAlign:'center', 
                     textDecorationLine: 'line-through'
                     }}>
                        ₹ 135/kg</Text>
                        <Text style={{color: 'white',
                     textAlign:'center'}}>₹100/kg</Text>
                </View>
                <View>
                    <Text style={{color: 'white',  textAlign:'center'}}>
                    Pomegranate
                    </Text>
                    <TouchableOpacity>
                    <Image style={styles.imageset}
                    source={require('../assets/images/pomegranate.png')}
                    />  
                    </TouchableOpacity>
                    <Text  style={{color: 'white',
                     textAlign:'center', 
                     textDecorationLine: 'line-through'
                     }}>
                        ₹ 135/kg</Text>
                        <Text style={{color: 'white',
                     textAlign:'center'}}>₹100/kg</Text>
                </View>
                
    </View>    
</View>
       
    )
}}

const styles = StyleSheet.create({
    
    container : {
      backgroundColor: '#115493',
      alignItems: 'center',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    edit: {
        width:350, 
        height: 100,
        marginHorizontal: 5,
        borderRadius: 40, 
        
    },
    slider: {
        marginTop: 20  
     },
    outercontainer: { 
        marginTop: 10,
        flexDirection: 'row'
    },
    morecontainer: {
        marginTop: 10,
        flexDirection: 'row'
    },
    innercontainer: {
        marginTop: 50,
        marginLeft: 7,
        flexDirection:'row',
        
    },
    slide: {
        flex: 1,
        alignItems: 'center',
       
        marginTop: 6
    },
   
    heading: {
        fontSize: 15,
        color: 'white'
    },
   
      setimage: {
          marginTop: 20,
          alignItems: 'center',
          width: 40,
          height: 40,
          marginLeft: 30
      },
      imageset : {
        width:140, 
        height: 140,
        borderRadius: 10,
        
        marginRight: 5
      },
      imagefix: {
        width:140, 
        height: 140,
        borderRadius: 10,
        marginHorizontal: 30,
        marginLeft: 5
      }
  });
