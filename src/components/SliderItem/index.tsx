import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Gs} from '../../../assets/styles/GlobalStyles';

interface SliderItemProps {
  image: any;
}

function SliderItem({image}: SliderItemProps): JSX.Element {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.imagesBackground} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 40,
    marginBottom: 24,
  },
  imagesBackground: {
    ...Gs.cornerXL,
    width: 240,
    height: 320,
  },
});

export default SliderItem;
