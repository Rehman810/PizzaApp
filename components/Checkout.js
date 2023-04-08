import React, {useState} from 'react';
import {View, Text, Image, StatusBar, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Next from '../comp/nextbtn';
import TopBar from '../comp/back';
import DeliveryDetail from '../comp/DeliveryDetail';
import EndGradient from '../comp/EndGradient';
const Checkout = () => {
  const navigation = useNavigation();
  const handleButtonPress = () => {
    navigation.navigate('OrderDetails');
  };
  const Backbtn = () => {
    navigation.navigate('CheckPizza');
  };
  return (
    <View>
      <View
        style={{
          backgroundColor: '#E5E5E5',
          height: 800,
          marginTop: 30,
        }}>
        <TopBar onPress={Backbtn} />
        <EndGradient
          url={require('../assests/Icon/cart2.png')}
          head={'Checkout'}
        />
        <DeliveryDetail />

        <Next onPress={handleButtonPress} Next={'Place Order'} />
      </View>
    </View>
  );
};

export default Checkout;
