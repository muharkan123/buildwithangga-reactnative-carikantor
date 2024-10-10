import React from 'react';
import {StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';
import {Gs} from '../../../assets/styles/GlobalStyles';
import { colors } from '../../../assets/styles/Colors';

function BottomNav(): JSX.Element {
  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.activeTab}>
          <Image source={require('../../../assets/icons/discover.png')} />
          <Text style={styles.tabLabel}>Discover</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Image source={require('../../../assets/icons/messages.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Image source={require('../../../assets/icons/payment.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Image source={require('../../../assets/icons/settings.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    paddingVertical: 30,
    paddingHorizontal: 54
  },
  tabContainer: {
    ...Gs.flexRow,
    ...Gs.justifyBetween,
  },
  activeTab: {
    ...Gs.flexRow,
    ...Gs.itemsCenter,
    ...Gs.cornerXS,
    paddingVertical: 14,
    paddingHorizontal: 8,
    backgroundColor: colors.secondary,
  },
  tabLabel: {
    ...Gs.font600,
    ...Gs.textGrey,
    marginLeft: 8
  },
  tab: {
    padding: 15
  },
});

export default BottomNav;
