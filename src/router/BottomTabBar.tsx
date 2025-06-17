import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import BottomTabs from '../components/bottomTab/BottomTab';
import HomeScreen from '../screens/HomeScreen';
import Favourites from '../screens/Bookmarks';
import {BottomTabParamList} from '../interface/Navigation.interface';

const Tab = createBottomTabNavigator<BottomTabParamList>();

export const BottomStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}
      tabBar={props => <BottomTabs props={props} />}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="Bookmarks" component={Favourites} />
    </Tab.Navigator>
  );
};
