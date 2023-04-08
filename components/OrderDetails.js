import React, {useState} from 'react';
import {View, Text, Image, StatusBar, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Next from '../comp/nextbtn';
import TopBar from '../comp/back';
import OrderDetails2 from '../comp/OrderDetail';
import EndGradient from '../comp/EndGradient';
const OrderDetails = () => {
  const navigation = useNavigation();
  const handleButtonPress = () => {
    navigation.navigate('OrderDetails');
  };
  const Backbtn = () => {
    navigation.navigate('Checkout');
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
          url={require('../assests/Icon/orderdetail.png')}
          head={'Order Details'}
        />
        <Image
          source={require('../assests/Icon/orderdetail2.png')}
          style={{
            width: 18.9,
            height: 8.75,
            zIndex: 50,
            marginTop: -130,
            marginLeft: 18,
          }}
        />
        <OrderDetails2 />
      </View>
    </View>
  );
};

export default OrderDetails;
