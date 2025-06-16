import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {fontSize, hp, wp} from '../../helper/utils';
import {BlurView} from '@react-native-community/blur';
import LottieView from 'lottie-react-native';

type HeaderProps = {};

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <View style={styles.wrapper}>
      <BlurView
        style={StyleSheet.absoluteFill}
        blurType="light"
        blurAmount={15}
        reducedTransparencyFallbackColor="white"
      />
      <Text style={styles.headerTitle}>News Cafe</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: hp(2),
    height: hp(8),
    width: '100%',
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.15)', // Important for glass effect
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 1,
    justifyContent: 'center',
    position: 'absolute',
    top: 20,
    zIndex: 100,
  },
  headerTitle: {
    fontSize: fontSize(32),
    fontWeight: '800',
    color: '#364153',
    marginLeft: wp(6),
  },
});
