import React, { useState } from 'react';
import { Text, StyleSheet, View } from 'react-native';

import ColorCounter from '../components/ColorCounter';

const SquareScreen = () => {
  
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const incrementValue = 10;

const setColor = (color, change) => {

    switch(color) {
        case 'red':
            red + change > 255 || red + change < 0 ? null : setRed(red + change);
            return;
        case 'green':
            green + change > 255 || green + change < 0 ? null : setGreen(green + change);
            return;
        case 'blue':
            blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
            return;
        default:
            return;
    };
}

  return (
    <View>
        <Text>Square screen</Text>
        <ColorCounter 
            onIncrease={() => setColor('red', incrementValue)}
            onDecrease={() => setColor('red', -1 * incrementValue)}
            color="Red">
        </ColorCounter>
        <ColorCounter 
            onIncrease={() => setColor('green', incrementValue)}
            onDecrease={() => setColor('green' -1 * incrementValue)}
            color="green">
        </ColorCounter>
        <ColorCounter 
            onIncrease={() => setColor('blue', incrementValue)}
            onDecrease={() => setColor('blue', -1 * incrementValue)}
            color="blue">
        </ColorCounter>
        <View style={{ height: 150, width:150, backgroundColor: `rgb(${red},${green},${blue})` }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  greeting: {
    fontSize: 45
  }
});

export default SquareScreen;