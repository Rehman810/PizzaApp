import React, {useState} from 'react';
import {View, Text, Image, StatusBar, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Next from '../comp/nextbtn';
import TopBar from '../comp/back';
import BigPizza from '../comp/BigPizza';
import Total from '../comp/Total';
import EndGradient from '../comp/EndGradient';
const CheckPizza = () => {
  const navigation = useNavigation();
  const handleButtonPress = () => {
    navigation.navigate('Checkout');
  };
  const Backbtn = () => {
    navigation.navigate('Topping');
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
          url={require('../assests/Icon/pizzavector.png')}
          head={'Check your'}
          line2={'custom pizza'}
        />
        <View>
          <BigPizza />
          <View>
            <Total />
          </View>
        </View>
        <Next onPress={handleButtonPress} Next={'Confirm Pizza'} />
      </View>
    </View>
  );
};

export default CheckPizza;
