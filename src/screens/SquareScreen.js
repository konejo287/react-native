import React, { useReducer } from 'react';
import { Text, StyleSheet, View } from 'react-native';

import ColorCounter from '../components/ColorCounter';

const reducer = (state, action) => {
    // state === { red: 0, green: 0, blue: 0 }
    // action === { colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 }

    switch(action.colorToChange) {
        case 'red':
            return { ...state, red: state.red + action.amount };
        case 'green':
            return { ...state, green: state.green + action.amount };
        case 'blue':
            return { ...state, blue: state.blue + action.amount };
        default:
            return state;
    }    
}

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0});
  const incrementValue = 10;

  return (
    <View>
        <Text>Square screen</Text>
        <ColorCounter 
            onIncrease={() => dispatch({ colorToChange: 'red', amount: incrementValue })}
            onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * incrementValue })}
            color="Red">
        </ColorCounter>
        <ColorCounter 
            onIncrease={() => dispatch({ colorToChange: 'green', amount: incrementValue })}
            onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * incrementValue })}
            color="green">
        </ColorCounter>
        <ColorCounter 
            onIncrease={() => dispatch({ colorToChange: 'blue', amount: incrementValue })}
            onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * incrementValue })}
            color="blue">
        </ColorCounter>
        <View style={{ height: 150, width:150, backgroundColor: `rgb(${state.red},${state.green},${state.blue})` }}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  greeting: {
    fontSize: 45
  }
});

export default SquareScreen;