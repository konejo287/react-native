import React, { useReducer } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const reducer = (state, action) => {
    switch(action.type) {
        case 'increase':
            return { ...state, counter: state.counter + action.amount };
        case 'decrease':
            return { ...state, counter: state.counter - action.amount };
        default:
            return state;
    }   
}

const CounterScreen = () => {

    const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
        <Button
            title="Increase"
            onPress={() => dispatch({ type: 'increase', amount: 1 }) }
        />
        <Button
            title="Decrease"
            onPress={() => dispatch({ type: 'decrease', amount: 1 }) }
        />
        <Text >Current count: {state.counter}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
    greeting: {
        fontSize: 25
    }
});

export default CounterScreen;