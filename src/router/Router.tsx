import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../helper/Navigation';
import {AppStackParamList} from '../interface/Navigation.interface';

import {BottomStack} from './BottomTabBar';
import ArticleDetailScreen from '../screens/ArticleDetailScreen';
import DummyScreen from '../screens/DummyScreen';

const AppStack = createNativeStackNavigator<AppStackParamList>();

const Router = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppStack.Navigator
        initialRouteName="BottomTab"
        screenOptions={{
          headerShown: false,
          animation: 'none',
        }}>
        <AppStack.Screen name="BottomTab" component={BottomStack} />
        <AppStack.Screen
          name="ArticleDetailScreen"
          component={ArticleDetailScreen}
        />
        <AppStack.Screen name="DummyScreen" component={DummyScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
