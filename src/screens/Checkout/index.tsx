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
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import Header from '../../components/Header';
import {colors} from '../../../assets/styles/Colors';
import CardDetail from '../../components/CardDetail';
import {Gs} from '../../../assets/styles/GlobalStyles';
import {useNavigation} from '@react-navigation/native';

function Checkout(): React.JSX.Element {
  const navigation = useNavigation();

  const dataCheckout = [
    {
      label: 'Price per day',
      value: '$500',
      isBold: true,
    },
    {
      label: 'Total day',
      value: '18 days',
      isBold: false,
    },
    {
      label: 'Date',
      value: '22 January 2024',
      isBold: false,
    },
    {
      label: 'End',
      value: '2 January 2024',
      isBold: false,
    },
    {
      label: 'Tax 15%',
      value: '$800',
      isBold: true,
    },
    {
      label: 'Insurance',
      value: '$8000',
      isBold: true,
    },
    {
      label: 'Grand Total',
      value: '$2,899,000',
      isBold: true,
      isPrimary: true,
    },
  ];

  const borderBottom = {
    borderBottomWidth: 1,
    borderColor: colors.greyContainer,
  };

  const renderCheckoutDetails = () => {
    return (
      <View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Space</Text>
          <CardDetail />
        </View>
      </View>
    );
  };
  const renderCheckoutData = () => {
    return (
      <View style={styles.section}>
        {dataCheckout.map((val, idx) => {
          const islast = idx === dataCheckout?.length - 1;
          return (
            <View
              style={[styles.checkoutItem, !islast && borderBottom]}
              key={idx}>
              <Text style={[Gs.textBlack]}>{val.label}</Text>
              <Text
                style={[
                  Gs.textBlack,
                  val.isBold && Gs.font700,
                  val.isPrimary && Gs.textPrimary,
                ]}>
                {val.value}
              </Text>
            </View>
          );
        })}
      </View>
    );
  };
  const renderCheckoutPaymentMethod = () => {
    return (
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment</Text>
        <View style={styles.paymentContainer}>
          <TouchableOpacity style={styles.buttonPayment}>
            <Image source={require('../../../assets/icons/wallet.png')} />
            <Text style={[Gs.h5, Gs.textBlack]}>MyWallet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonPayment}>
            <Image source={require('../../../assets/icons/mastercard.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const renderCheckoutPayNow = () => {
    return (
      <View style={styles.section}>
        <TouchableOpacity
          style={styles.proceedButton}
          onPress={() => {
            navigation.navigate('Success');
          }}>
          <Text style={[Gs.textWhite, Gs.font600]}>Pay Now</Text>
          <Image
            source={require('../../../assets/icons/pay.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.Container}>
      <Header title="Booking" subtitle="Space Available For Today" />
      <View style={styles.content}>
        <ScrollView>
          {renderCheckoutDetails()}
          {renderCheckoutData()}
          {renderCheckoutPaymentMethod()}
        </ScrollView>
        {renderCheckoutPayNow()}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    flex: 1,
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
  checkoutItem: {
    ...Gs.flexRow,
    ...Gs.justifyBetween,
    paddingVertical: 12,
  },
  paymentContainer: {
    ...Gs.flexRow,
    marginHorizontal: -10,
    marginBottom: 30,
  },
  buttonPayment: {
    ...Gs.itemsCenter,
    ...Gs.justifyCenter,
    ...Gs.cornerLG,
    flex: 1,
    paddingVertical: 24,
    paddingHorizontal: 50,
    borderWidth: 1,
    borderColor: colors.greyContainer,
    marginHorizontal: 14,
  },
  proceedButton: {
    ...Gs.itemsCenter,
    ...Gs.justifyCenter,
    ...Gs.cornerMD,
    ...Gs.flexRow,
    backgroundColor: colors.primary,
    padding: 14,
  },
  icon: {
    marginLeft: 4,
  },
});

export default Checkout;
