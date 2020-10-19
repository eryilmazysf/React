/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  //Platform,
} from 'react-native';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';

const App = () => {
  // function sayHello() {
  //   const platform = Platform.OS;
  //   const version = Platform.Version;
  //   if (platform === 'ios') return <Text>HELLO IPHONE:{version}</Text>;
  //   else return <Text>HELLO ANDROID:{version}</Text>;
  // }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#fb8c00',
      }}>
      <View style={styles.container}>
        <IconEvilIcons name="cart" size={250} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.user}
          keyboardType="email-address"
          placeholder="Please enter your email-address..."
        />
        <TextInput
          style={styles.user}
          keyboardType="decimal-pad"
          placeholder="Please enter your password..."
        />
      </View>
      {/* <Text>Device:{sayHello()}</Text> */}
      <View style={styles.buttons}>
        <TouchableOpacity>
          <View style={styles.login}>
            <Text style={styles.loginText}>Login</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.login}>
            <Text style={styles.loginText}>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
  inputContainer: {
    flex: 0.5,
  },
  user: {
    backgroundColor: 'white',
    color: '#1b1b1b',
    fontWeight: 'bold',
    height: 20,
    borderWidth: 2,
    height: 50,
    textAlign: 'center',
    borderRadius: 25,
    margin: 10,
  },

  buttons: {
    flex: 1,
  },
  login: {
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 20,
    backgroundColor: '#424242',
    width: 200,
    height: 40,
    margin: 10,
  },
  loginText: {
    fontSize: 17,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 5,
  },
});
