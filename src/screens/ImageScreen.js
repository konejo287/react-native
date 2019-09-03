import React from 'react';
import { Text, View } from 'react-native';
import ImageDetail from '../components/ImageDetial';

const ImageScreen = () => {
  return (
    <View>
        <ImageDetail title="Forests" imageSource={require('../../assets/beach.jpg')}></ImageDetail>
    </View>
  );
};

export default ImageScreen;