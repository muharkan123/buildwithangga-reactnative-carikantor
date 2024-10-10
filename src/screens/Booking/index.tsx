/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
  Image
} from 'react-native';
import {colors} from '../../../assets/styles/Colors';
import Header from '../../components/Header';
import CardDetail from '../../components/CardDetail';
import { Gs } from '../../../assets/styles/GlobalStyles';
import InputText from '../../components/InputText';
import { useNavigation } from '@react-navigation/native';

function Booking(): React.JSX.Element {
  const navigation = useNavigation();

  const form = [
    {
      label: 'Total days',
      placeholder: 'Total days',
      icon: require('../../../assets/icons/days.png'),
    },
    {
      label: 'Date start at',
      placeholder: 'Date start at',
      icon: require('../../../assets/icons/calendar.png'),
    },
    {
      label: 'Complete name',
      placeholder: 'Complete name',
      icon: require('../../../assets/icons/user.png'),
    },
    {
      label: 'Phone Number',
      placeholder: 'Phone Number',
      icon: require('../../../assets/icons/phone.png'),
    },
  ];

  const renderBookingDetails = () => {
    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Your Space</Text>
        <CardDetail/>
      </View>
    );
  }
  const renderBookingInformation = () => {
    return (
      <View style={styles.section}>
        <Text style={[Gs.h5, Gs.textBlack]}>Booking Information</Text>
        <Text style={[Gs.textGrey]}>Lorem ipsum dolor sit amet.</Text>
        {
          form.map((val, idx) => {
            return <View>
              <InputText
              key={idx}
              label={val.label}
              icon={val.icon}
              placeholder={val.placeholder}
              />
            </View>
          })
        }
      </View>
    );
  }
  const renderProceedPayment = () => {
    return (
      <View style={styles.section}>
        <TouchableOpacity style={styles.proceedButton} onPress={() => {
          navigation.navigate('Checkout')
        }}>
          <Text style={[Gs.textWhite, Gs.h4]}>Proceed to Payment</Text>
          <Image style={styles.icon} source={require('../../../assets/icons/arrow_right_white.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.termsCondition} >

          <Text style={[Gs.textGrey]}>Terms and Conditions</Text>
          <Image/>
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.Container}>
      <Header title="Booking" subtitle="Space Available For Today" />
      <ScrollView>
        {renderBookingDetails()}
        {renderBookingInformation()}
      </ScrollView>
      {renderProceedPayment()}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: colors.white,
  },
  section: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  sectionTitle: {
    ...Gs.h3,
    ...Gs.textBlack,
    marginBottom: 12,
  },
  proceedButton: {
    backgroundColor: colors.primary,
    padding: 14,
   ...Gs.flexRow,
   ...Gs.itemsCenter,
   ...Gs.justifyCenter,
   ...Gs.cornerMD,
  },
  icon: {
    marginLeft: 4,
  },
  termsCondition: {
    ...Gs.itemsCenter,
    ...Gs.justifyCenter,
    padding: 14,
  }
});

export default Booking;
