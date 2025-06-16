import React, {useEffect, useRef} from 'react';
import {StyleSheet, TouchableOpacity, Text, Animated} from 'react-native';
import {fontSize, hp, wp} from '../../helper/utils';
import LinearGradient from 'react-native-linear-gradient';

function BottomTabItem({icons, onPress, isActive, title}: any) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.spring(scaleAnim, {
      toValue: isActive ? 1.15 : 1,
      useNativeDriver: true,
      friction: 5,
    }).start();
  }, [isActive]);

  const Content = (
    <Animated.View
      style={[
        styles.mainContainer,
        {transform: [{scale: scaleAnim}]},
        isActive ? null : styles.inactiveBackground,
      ]}>
      {icons}
      <Text
        style={[
          styles.title,
          isActive && {color: '#FFFFFF', fontWeight: '700'},
        ]}>
        {title}
      </Text>
    </Animated.View>
  );

  return isActive ? (
    <LinearGradient
      colors={['#E87588', '#DB5895']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      style={styles.gradient}>
      <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
        {Content}
      </TouchableOpacity>
    </LinearGradient>
  ) : (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Animated.View style={styles.gradient}>{Content}</Animated.View>
    </TouchableOpacity>
  );
}

export default BottomTabItem;

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 8,
    marginVertical: hp(1),
  },
  mainContainer: {
    gap: wp(2),
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(3),
  },
  inactiveBackground: {
    // backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: fontSize(14),
    color: '#000000',
    fontWeight: '500',
  },
});
