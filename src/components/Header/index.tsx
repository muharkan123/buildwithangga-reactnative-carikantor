import React from 'react';
import {Image, TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {Gs} from '../../../assets/styles/GlobalStyles';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  title: string;
  subtitle: string;
  showRightButton?: boolean; // false jika tidak di assign
}

function Header({title, subtitle, showRightButton}: HeaderProps): JSX.Element {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.goBack();
        }}>
        <Image source={require('../../../assets/icons/arrow_left_black.png')} />
      </TouchableOpacity>
      <View>
        <Text style={[Gs.h2, Gs.textBlack, Gs.textCenter]}>{title}</Text>
        <Text style={[Gs.textGrey, Gs.textCenter]}>{subtitle}</Text>
      </View>
      <TouchableOpacity style={styles.button}>
        {showRightButton && (
          <Image source={require('../../../assets/icons/menu.png')} />
        )}
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Gs.flexRow,
    ...Gs.justifyBetween,
    ...Gs.itemsCenter,
    padding: 24,
  },
  button: {
    width: 24,
    height: 24,
  },
});

export default Header;
