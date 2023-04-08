import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const TopBar = ({onPress}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        border: 0.25,
        backgroundColor: 'white',
        height: 48,
        alignItems: 'baseline',
      }}>
      <TouchableOpacity onPress={onPress}>
        <Image
          source={require('../assests/Icon/backarrow.png')}
          style={{
            width: 14,
            height: 9.33,
            color: 'purple',
            position: 'absolute',
            left: 30,
            right: 0,
            top: 20,
            bottom: 0,
            padding: 5,
          }}
        />
      </TouchableOpacity>
      <View
        style={{
          position: 'absolute',
          left: 60,
          top: 5,
        }}>
        <Text
          style={{
            width: 132,
            height: 20,
            fontSize: 15,
            color: '#6D6E9C',
            lineHeight: 17.58,
            letterSpacing: -0.3,
            textAlign: 'center',
            marginLeft: 60,
            marginTop: 10,
          }}>
          Uncle John Pizzas
        </Text>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Image
          source={require('../assests/Icon/home.png')}
          style={{
            width: 17,
            height: 16.15,
            color: '#6D6E9C',
            position: 'absolute',
            left: 320,
            right: 0,
            top: 18,
            bottom: 0,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TopBar;
