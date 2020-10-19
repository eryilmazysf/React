import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.head}>
          News in <Text style={{color: 'red'}}>Canada</Text>
        </Text>
        <View style={styles.image1}>
          <Image style={styles.image11} source={require('../img/flag.jpg')} />
          <Text
            style={{
              margin: 20,
              color: '#9b0000',
              fontSize: 25,
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
            WHAT IS HAPPENING AT THE BORDER
          </Text>
          <Text style={{fontSize: 20, textAlign: 'justify'}}>
            Given where things are at right now, in Canada and the United States
            and the rest of the world, it's unlikely that we're going to see
            complete relaxation of the border restrictions anytime soon.
          </Text>
        </View>
        <View style={styles.image1}>
          <Image style={styles.image11} source={require('../img/cart.png')} />
          <Text
            style={{
              margin: 20,
              color: '#9b0000',
              fontSize: 25,
              fontWeight: 'bold',
              textAlign: 'center',
              textTransform: 'uppercase',
            }}>
            Long Lines due to COVID in every mall
          </Text>
          <Text style={{fontSize: 20, textAlign: 'justify'}}>
            Shoppers around the world are heading to grocery stores to stock up
            on food and basics as fear over the spread of coronavirus grows.
            While local authorities and government leaders in various parts of
            the world have urged consumers not to panic and have advised that
            there is no need to stock up, many are still preparing for the
            worst.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  head: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image1: {
    padding: 20,
    alignItems: 'center',
  },
  image11: {
    width: 350,
    height: 350,
  },
});
