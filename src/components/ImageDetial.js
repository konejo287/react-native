import React from 'react';
import { Text, Image, View } from 'react-native';

const ImageDetail = (props) => {
  return (
    <View>
        <Image source={props.imageSource}></Image>
        <Text >{ props.title }</Text>      
    </View>
  
  );
};

export default ImageDetail;