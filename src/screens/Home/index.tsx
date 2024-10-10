/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {useNavigation} from '@react-navigation/native';
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
import Details from '../Details';
import {colors} from '../../../assets/styles/Colors';
import {Gs} from '../../../assets/styles/GlobalStyles';
import InputText from '../../components/InputText';
import NewsWorthyItem from '../../components/NewsWorthyItem';
import BottomNav from '../../components/BottomNav';

function Home(): React.JSX.Element {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Details');
  };

  const newsworthyData = [
    {
      title: 'Hajima',
      address: 'Pantai Suramadu No.99',
      price: '$421/day',
      image: require('../../../assets/images/item_2_a.png'),
    },
    {
      title: 'Deppwork',
      address: 'Pantai Balekambang No. 20',
      price: '$400/day',
      image: require('../../../assets/images/item_3_a.png'),
    },
  ];

  const renderHeader = () => {
    return (
      <View style={styles.headerContainer}>
        {/* Header kiri */}
        <View style={Gs.flexRow}>
          <Image
            source={require('../../../assets/images/profile_1.png')}
            style={styles.profileContainer}
          />
          <View>
            <Text style={[Gs.textBlack, {marginTop: 5}]}>Hi, Shayna</Text>
            <Text style={[Gs.textBlack, Gs.font700]}>@shaynaWork</Text>
          </View>
        </View>
        {/* Header kanan */}
        <View style={Gs.flexRow}>
          <Image
            source={require('../../../assets/icons/gift.png')}
            style={styles.iconContainer}
          />
          <Image
            source={require('../../../assets/icons/notification.png')}
            style={styles.iconContainer}
          />
        </View>
      </View>
    );
  };

  const renderSearch = () => {
    return (
      <View style={styles.sectionContainer}>
        <InputText
          icon={require('../../../assets/icons/location.png')}
          placeholder="Find a workplaces in jakarta"
        />
      </View>
    );
  };

  const renderPopularSection = () => {
    return (
      <View style={styles.sectionContainer}>
        <Text style={[styles.sectionTitle, Gs.h1]}>Popular</Text>
        <View style={Gs.flexRow}>
          <Image
            source={require('../../../assets/images/item_1_a.png')}
            style={styles.popularMainImage}
          />
          <View>
            <Image
              source={require('../../../assets/images/item_1_b.png')}
              style={styles.popularImage}
            />
            <Image
              source={require('../../../assets/images/item_1_c.png')}
              style={styles.popularImage}
            />
          </View>
        </View>
        <View style={styles.popularContent}>
          <View>
            <Text style={[Gs.h2, Gs.textBlack]}>IndoorWork</Text>
            <Text style={[Gs.h4, Gs.textGrey]}>Jalan Kenangan</Text>
          </View>
          <View style={styles.popularPriceContainer}>
            <Text style={styles.popularPriceLabel}>$599/day</Text>
          </View>
        </View>
      </View>
    );
  };

  const renderNewsworthy = () => {
    return (
      <View style={styles.sectionContainer}>
        <Text style={[styles.sectionTitle, Gs.h1]}>News Worthy</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={newsworthyData}
          keyExtractor={item => item.title}
          renderItem={({item}) => (
            <NewsWorthyItem
              title={item.title}
              address={item.address}
              image={item.image}
              price={item.price}
              onPress={handlePress}
            />
          )}
        />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {renderHeader()}
        {renderSearch()}
        <ScrollView style={styles.scrollContainer}>
          {renderPopularSection()}
          {renderNewsworthy()}
        </ScrollView>
      </View>
      <BottomNav/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greyLight,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: colors.white,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  // Styles renderHeader
  headerContainer: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
    ...Gs.justifyBetween,
    padding: 24,
  },
  profileContainer: {
    height: 50,
    width: 50,
    marginRight: 10,
    overflow: 'hidden',
  },
  iconContainer: {
    height: 24,
    width: 24,
    marginLeft: 10,
  },
  // Styles renderSearch
  sectionContainer: {
    paddingHorizontal: 24,
    paddingBottom: 24,
  },
  // Styles Popular Section
  popularMainImage: {
    ...Gs.cornerXL,
    height: 200,
    flex: 1,
    marginRight: 10,
  },
  popularImage: {
    width: 130,
    height: 95,
    ...Gs.cornerMD,
    marginBottom: 10,
  },
  sectionTitle: {
    ...Gs.textBlack,
    marginBottom: 20,
  },
  popularContent: {
    ...Gs.flexRow,
    ...Gs.justifyBetween,
    marginTop: 14,
  },
  popularPriceContainer: {
    ...Gs.justifyCenter,
    ...Gs.itemsCenter,
    paddingHorizontal: 12,
    paddingVertical: 8,
    ...Gs.cornerXS,
    backgroundColor: colors.secondary,
  },
  popularPriceLabel: {
    ...Gs.textPrimary,
    ...Gs.font600,
  },
  scrollContainer: {
    height: '100%',
  },

  //Styles News Worthy
});

export default Home;
