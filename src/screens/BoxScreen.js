import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CustomScreen = () => {
  return(
    <View style={styles.masterView}>
        <View style={styles.viewOne} />
        <View style={styles.viewTwo} />
        <View style={styles.viewThree} />
    </View>
  ); 
};

const styles = StyleSheet.create({
  masterView: {
    height: 100,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'space-between'
  },
  viewOne: {
    width: 50,
    height: 50,
    backgroundColor: 'red'
  },
  viewTwo: {
    width: 50,
    height: 50,
    backgroundColor: 'green',
    //marginTop: 50
    alignSelf: 'flex-end'
  },
  viewThree: {
    width: 50,
    height: 50,
    backgroundColor: 'blue'
  },
});

export default CustomScreen;