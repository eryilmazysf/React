import React, { useState } from 'react';
import {SafeAreaView, View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';


import MyButton from'./components/Button'
import InputPanel from './components/inputPanel'


const App = () => {
    const[username,setUserName]=useState('');
    function sayHello(){
        alert('Hello there!!')
    }


  return (
    <SafeAreaView>
      <View>
        <Text style={{fontSize:50}}>Hello world 🌏</Text>
      </View>
        <MyButton sayingHello={()=>sayHello()} color="orange" banner='Press Me!!' number={3} /> 
        <MyButton sayingHello={()=>{Alert.alert('Message','eryilmaz')}} banner='Press Me 2!!' />
        <InputPanel
            sendText={myValue => {setUserName(myValue)}}   
        />
        <Text>{username}</Text>
    </SafeAreaView>
  );
};
export default App;

const myStyles = StyleSheet.create({
 
});

