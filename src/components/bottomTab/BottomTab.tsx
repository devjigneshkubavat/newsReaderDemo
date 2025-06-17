import React from 'react';
import {StyleSheet, Image, View} from 'react-native';
import {navigate} from '../../helper/Navigation';
import BottomTabItem from './BottomTabItem';
import {colors} from '../../helper/colors';
import {hp} from '../../helper/utils';
import {icons} from '../../helper/iconConstants';
import {BlurView} from '@react-native-community/blur';

function BottomTabs({props}: any) {
  const navigation = props?.navigation;

  const isActive = (index: number) => {
    return index === props?.state?.index;
  };

  const onPressHome = () => {
    navigation.navigate('HomeScreen');
  };
  const onPressFavourites = () => {
    navigation.navigate('Bookmarks');
  };

  return (
    <View style={styles.wrapper}>
      <BlurView
        style={styles.blurBackground}
        blurType="light"
        blurAmount={15}
        reducedTransparencyFallbackColor="white"
      />
      <View style={styles.mainContainer}>
        <BottomTabItem
          icons={
            <Image
              source={icons.newspaper}
              style={{
                height: hp(3),
                width: hp(3),
                tintColor: isActive(0) ? colors.white : colors.black,
              }}
            />
          }
          onPress={onPressHome}
          isActive={isActive(0)}
          title={'Home'}
        />
        <BottomTabItem
          icons={
            <Image
              source={icons.bookmark}
              style={{
                height: hp(2.2),
                width: hp(2.2),
                tintColor: isActive(1) ? colors.white : colors.black,
              }}
            />
          }
          onPress={onPressFavourites}
          isActive={isActive(1)}
          title={'Bookmarks'}
        />
      </View>
    </View>
  );
}

export default React.memo(BottomTabs);

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    position: 'absolute',
    bottom: hp(2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  blurBackground: {
    position: 'absolute',
    width: '70%',
    height: hp(7.5),
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.15)', // key part of glassmorphism
    borderColor: 'rgba(255, 255, 255, 0.3)',
    borderWidth: 1,
  },
  mainContainer: {
    width: '70%',
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: hp(1.2),
    paddingHorizontal: 10,
    backgroundColor: 'transparent', // important: don’t overlap the blur
  },
});
