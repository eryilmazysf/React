import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={{flex: 3}}>
      <View style={styles.top}>
        <View style={styles.top1}>
          <View style={styles.orange}>
            <Text style={{textAlign: 'center'}}>Orange Circle</Text>
          </View>
          <View style={styles.yellow}>
            <Text style={{textAlign: 'center'}}>Yellow Box</Text>
          </View>
        </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.black}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            Black Box
          </Text>
        </View>
        <View style={styles.brown}>
          <Text
            style={{
              textAlign: 'center',
              color: 'white',
              fontWeight: 'bold',
              fontSize: 20,
              transform: [{rotate: '270deg'}],
              width: 100,
              alignSelf: 'center',
            }}>
            Brown Box
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  top: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
  },
  top1: {
    flex: 0.9,
    margin: 10,
    backgroundColor: 'gray',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  orange: {
    borderWidth: 2,
    borderRadius: 200,
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'orange',
  },
  yellow: {
    borderWidth: 2,
    borderRadius: 200,
    width: 100,
    height: 50,
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: 'yellow',
  },
  bottom: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'pink',
  },
  black: {
    flex: 2,
    borderWidth: 2,
    justifyContent: 'center',
    margin: 10,
    backgroundColor: 'black',
    borderRadius: 30,
  },
  brown: {
    flex: 0.75,
    borderWidth: 2,
    justifyContent: 'center',
    margin: 10,
    backgroundColor: 'brown',
    borderRadius: 80,
  },
});
