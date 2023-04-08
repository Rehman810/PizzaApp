import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Home from './components/Home';
import Createpizza from './components/createpizza';
import Crust from './components/ChooseCrust';
import Topping from './components/ChooseTopping';
import CheckPizza from './components/CheckPizza';
import Checkout from './components/Checkout';
import OrderDetails from './components/OrderDetails';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import CustomDrawer from './components/Drawer';

function App() {
  const Drawer = createDrawerNavigator();
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <CustomDrawer {...props} />}>
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Createpizza"
          component={Createpizza}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Crust"
          component={Crust}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Topping"
          component={Topping}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="CheckPizza"
          component={CheckPizza}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="Checkout"
          component={Checkout}
          options={{headerShown: false}}
        />
        <Drawer.Screen
          name="OrderDetails"
          component={OrderDetails}
          options={{headerShown: false}}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
