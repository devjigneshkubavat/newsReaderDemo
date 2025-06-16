import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppStackParamList} from '../interface/Navigation.interface';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../helper/Navigation';
import HomeScreen from '../screens/HomeScreen';
import Favourites from '../screens/Bookmarks';
import {BottomStack} from './BottomTabBar';
import ArticleDetailScreen from '../screens/ArticleDetailScreen';

const AppStack = createNativeStackNavigator<AppStackParamList>();

const Router = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <AppStack.Navigator
        initialRouteName="BottomTab"
        screenOptions={{
          headerShown: false,
        }}>
        <AppStack.Screen name={'BottomTab'} component={BottomStack} />
        <AppStack.Screen
          name={'ArticleDetailScreen'}
          component={ArticleDetailScreen}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
