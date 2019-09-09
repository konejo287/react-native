import React, { useState }from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { State } from 'react-native-gesture-handler';

const TextScreen = () => {

  const [name, setName] = useState('');

  return(
    <View>
        <Text>The text is {name}</Text>
        <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={name}
            onChangeText={(newValue) => setName(newValue)}
        >
        </TextInput>
        { name.length < 5 ? <Text>The password must be 5 letters or more</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen;