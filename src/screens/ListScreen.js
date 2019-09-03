import React from 'react';
import { Text, StyleSheet, View, FlatList } from 'react-native';

const ListScreen = () => {

    const friends = [
        { name: 'friend #1', age: 21 },
        { name: 'friend #2', age: 24 },
        { name: 'friend #3', age: 26 },
        { name: 'friend #4', age: 22 },
        { name: 'friend #5', age: 29 }
    ];

    name = 'My name is mario';
    return (
        <FlatList 
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return <Text>{item.name} , {item.age}</Text>
            }}
        />
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

export default ListScreen;