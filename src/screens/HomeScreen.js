import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = (props) => {

  name = 'My name is mario';
  return (
    <View>
      <Button 
        onPress={() => props.navigation.navigate('List')}
        title="Lists"
      />
      <Button 
        onPress={() => props.navigation.navigate('Counter')}
        title="Counter"
      />
      <Button 
        onPress={() => props.navigation.navigate('Color')}
        title="Color"
      />
      <Button 
        onPress={() => props.navigation.navigate('Square')}
        title="Square"
      />
      <TouchableOpacity
        onPress={() => props.navigation.navigate('Image') }
      >
        <Text style={styles.greeting}>Images</Text>
      </TouchableOpacity> 
    </View>
  );
};

const styles = StyleSheet.create({
  greeting: {
    fontSize: 45
  },
  name: {
    fontSize: 20
  }
});

export default HomeScreen;
