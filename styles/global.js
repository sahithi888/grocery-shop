import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({

    container :{
        flex :1,
        backgroundColor:'white',
        padding :20,
        backgroundColor:'white',
    },
    text:{
        fontFamily:'Comfortaa-Bold',
        fontSize:20,
        lineHeight:20,
        marginVertical:8,
        alignContent:'center',
        justifyContent:'center',


    },
    name:{
        fontSize:28,
        color:"black",
        fontWeight:'bold'
      },
      price:{
        marginTop:10,
        fontSize:18,
        color:"green",
        fontWeight:'bold'
      },
      description:{
        textAlign:'center',
        marginTop:10,
        color:"black",
        lineHeight:30,
        fontFamily:'Comfortaa-Light',
        fontSize:15,
      },
      list:
      {
        backgroundColor:'white',
        fontSize: 18,
         height:50,
        fontWeight:"200",
        padding:10,
        borderRadius:3,
        borderStyle:'dashed',
         
       
      },
      input:{
        flex:1,
        borderWidth:1,
        borderColor:'black',
        padding:8,
        margin:10,
        width:200,
        alignContent:'center',
        justifyContent:'center'

      },
      header:{
         width:'100%',
         height:'100%',
         flexDirection:'row',
         alignItems:'center',
         justifyContent:'center',
      },
      headerText:{
        fontWeight:'bold',
        fontSize:20,
        letterSpacing:1,
        color:'black',
        alignContent:'center',
        justifyContent:'center',
        alignItems:'center',

      },
      titleText:{
        fontFamily: 'Comfortaa-Bold',
        fontSize: 18,
        color: '#333',
    },
    paragraph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    button:{
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#f01d71',
    },
    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    },
    card:{
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 10,
    },
    horizontalComponent:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: 10,
        alignItems: 'center',
    },
    horizontalItem:{
        flex:1,
        width:'50%',
        margin: 10,
    },
    image:{
        flex:1,
        height:120,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#000'
    },
    product_prod_name:{
        fontWeight: 'bold',
    },
    pay:{
        backgroundColor:'green',
        fontFamily:'Comfortaa-Bold',
        fontSize:20,
        alignContent:'center',
        justifyContent:'center',
        color:'white',
        marginVertical:5,
        paddingVertical:1,
        paddingHorizontal:3
        


    }
});
    