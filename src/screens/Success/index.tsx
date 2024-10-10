/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {colors} from '../../../assets/styles/Colors';
import {Gs} from '../../../assets/styles/GlobalStyles';
import {useNavigation} from '@react-navigation/native';

function Success(): React.JSX.Element {
  const navigation = useNavigation();
  return (
    <View style={styles.Container}>
      <View>
        <Image
          source={require('../../../assets/images/item_1_a.png')}
          style={styles.images}
        />
        <View style={styles.overlay}>
          <View style={styles.rating}>
            <Image source={require('../../../assets/icons/star_white.png')} />
            <Text style={[Gs.textWhite, Gs.h5]}>4.5/5</Text>
          </View>
          <View style={styles.booked}>
            <Text style={[Gs.textWhite, Gs.h5]}>Booked</Text>
          </View>
          <View style={styles.label}>
            <Text style={[Gs.textWhite, Gs.h2]}>Hajime</Text>
            <Text style={[Gs.textWhite]}>Pantai Utara No.90</Text>
          </View>
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={[Gs.h1, Gs.textBlack]}>Success Booking</Text>
        <Text style={[Gs.textCenter, Gs.textGrey]}>
          Your space is ready to use for your business and life
        </Text>
      </View>
      <TouchableOpacity
        style={styles.buttonBot}
        onPress={() => {
          navigation.navigate('Details');
        }}>
        <Text style={[Gs.h4, Gs.textWhite]}>View Details</Text>
        <Image
          source={require('../../../assets/icons/arrow_right_white.png')}
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: colors.white,
    flex: 1,
    ...Gs.itemsCenter,
    ...Gs.justifyCenter,
  },
  images: {
    ...Gs.cornerXL,
    height: 320,
    width: 240,
  },
  overlay: {
    ...Gs.cornerXL,
    height: 320,
    width: 240,
    backgroundColor: colors.transparentBlack,
    position: 'absolute',
  },
  rating: {
    ...Gs.itemsCenter,
    ...Gs.justifyCenter,
    ...Gs.cornerXL,
    backgroundColor: colors.primary,
    height: 60,
    width: 60,
    padding: 14,
    position: 'absolute',
    right: -30,
    top: 30,
  },
  booked: {
    ...Gs.itemsCenter,
    ...Gs.justifyCenter,
    ...Gs.cornerXL,
    backgroundColor: colors.primary,
    height: 40,
    width: 100,
    padding: 8,
    position: 'absolute',
    left: -50,
    bottom: 120,
  },
  label: {
    position: 'absolute',
    left: 20,
    bottom: 20,
  },
  textContainer: {
    ...Gs.itemsCenter,
    paddingHorizontal: 76,
    marginVertical: 30,
  },
  icon: {
    marginLeft: 4,
  },
  buttonBot: {
    ...Gs.itemsCenter,
    ...Gs.justifyCenter,
    ...Gs.cornerMD,
    ...Gs.flexRow,
    backgroundColor: colors.primary,
    padding: 14,
  },
});

export default Success;
