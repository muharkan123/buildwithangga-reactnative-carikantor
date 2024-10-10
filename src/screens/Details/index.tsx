/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  FlatList,
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
import {colors} from '../../../assets/styles/Colors';
import Header from '../../components/Header';
import SliderItem from '../../components/SliderItem';
import App from './../../../App';
import {Gs} from './../../../assets/styles/GlobalStyles';
import { useNavigation } from '@react-navigation/native';
function Details(): React.JSX.Element {
  const navigation = useNavigation();
  const slider = [
    require('../../../assets/images/item_2_a.png'),
    require('../../../assets/images/item_2_b.png'),
    require('../../../assets/images/item_2_c.png'),
  ];

  const renderSlider = () => {
    return (
      <FlatList
        data={slider}
        keyExtractor={({index}) => index}
        renderItem={({item}) => <SliderItem image={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.sliderContainer}
      />
    );
  };

  const renderTitle = () => {
    return (
      <View style={styles.titleContainer}>
        <View>
          <Text style={[Gs.textBlack, Gs.h1]}>Homemade Office</Text>
          <Text style={[Gs.textGrey, styles.teksRenTle]}>Jalan Perjuangan</Text>
        </View>
        <View style={Gs.flexRow}>
          <Image source={require('../../../assets/icons/star_yellow.png')} />
          <Text style={[Gs.textGrey, Gs.h3]}>4.5/5</Text>
        </View>
      </View>
    );
  };

  const renderDescription = () => {
    return (
      <View style={styles.descriptionContainer}>
        <Text style={[Gs.textBlack, Gs.h1]}>About</Text>
        <Text style={[Gs.textGrey, styles.teksRenDes]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
          dolores nisi vero iusto illo optio facilis soluta excepturi itaque in?
        </Text>
      </View>
    );
  };

  const renderOwner = () => {
    return (
      <View style={styles.ownerContainer}>
        <Text style={[Gs.textBlack, Gs.h3, styles.titleOwner]}>
          Space Owner
        </Text>
        <View style={[Gs.flexRow, Gs.itemsCenter]}>
          <Image
            source={require('../../../assets/images/profile_2.png')}
            style={styles.ownerImage}
          />
          <View>
            <View style={[Gs.flexRow]}>
              <Text>John Doe</Text>
              <Image
                style={styles.icon}
                source={require('../../../assets/icons/verified_orange.png')}
              />
            </View>
            <Text style={[Gs.font700, Gs.textBlack]}>@Junebug</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderBookingButton = () => {
    return (
      <View style={styles.BookingButtonContainer}>
        <View>
          <Text style={[Gs.textPrimary, Gs.h1]}>$5,899</Text>
          <Text style={[Gs.textGrey]}>/day</Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer} onPress={() => {
          navigation.navigate('Booking')
        }}>
          <Text style={[Gs.textWhite, Gs.h3]}>Start Booking</Text>
          <Image source={require('../../../assets/icons/arrow_right_white.png')} style={styles.icon} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Header
        title="Office Details"
        subtitle="Space available for today"
        showRightButton
      />
      <ScrollView nestedScrollEnabled>
        {renderSlider()}
        {renderTitle()}
        {renderDescription()}
        {renderOwner()}
      </ScrollView>
      {renderBookingButton()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  sliderContainer: {
    paddingHorizontal: 24,
  },
  titleContainer: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
    ...Gs.justifyBetween,
    marginTop: 24,
    paddingHorizontal: 24,
  },
  descriptionContainer: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
  teksRenDes: {
    lineHeight: 30,
    marginBottom: 5,
  },
  teksRenTle: {
    marginTop: 8,
  },
  ownerContainer: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
  titleOwner: {
    marginBottom: 10,
  },
  ownerImage: {
    marginRight: 10,
  },
  icon: {
    marginLeft: 4,
  },
  BookingButtonContainer: {
    ...Gs.flexRow,
    ...Gs.justifyBetween,
    padding: 24,
  },
  buttonContainer: {
    ...Gs.cornerMD,
    ...Gs.flexRow,
    backgroundColor: colors.primary,
    paddingHorizontal: 22,
    paddingVertical: 14,
  }
});

export default Details;
