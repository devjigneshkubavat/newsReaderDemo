import 'react-native-gesture-handler';
import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTabs from '../components/bottomTab/BottomTab';
import HomeScreen from '../screens/HomeScreen';
import Favourites from '../screens/Bookmarks';
import {BottomTabParamList} from '../interface/Navigation.interface';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export const BottomStack = () => {
  return (
    <View style={styles.mainContainer}>
      <Tab.Navigator
        initialRouteName={'HomeScreen'}
        screenOptions={{headerShown: false}}
        tabBar={props => {
          return <BottomTabs props={props} />;
        }}>
        <Tab.Screen name={'HomeScreen'} component={HomeScreen} />
        <Tab.Screen name={'Bookmarks'} component={Favourites} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // position: 'relative',
    // justifyContent: "flex-end",
    // backgroundColor: colors.coffee,
  },
});
