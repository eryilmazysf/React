import React from 'react';
import {Text,TouchableOpacity,StyleSheet} from 'react-native';

const Button=(props)=>{
    let selectedColor=props.color;
    if(props.color==undefined)
        selectedColor='red'
    // backgroundColor:props.color==undefined ? "red" : props.color  (bunu TouchableOpacity style icine yaz)
    return(
        //tek component icine iki props  [] icinde gonderilir
      <TouchableOpacity style={[myStyles.buttonContaainer,{backgroundColor:selectedColor}]} onPress={props.sayingHello}> 
          <Text>{props.banner}</Text>
      </TouchableOpacity>
    )
}
export default Button;
const myStyles = StyleSheet.create({
    buttonContaainer:{
        backgroundColor:'#a5d6a7',
        padding:15,
        margin:10,
        borderRadius:5,
        alignItems:'center'
    }
  });