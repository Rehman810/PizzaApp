import {View, Image} from 'react-native';
import React from 'react';

const BigPizza = () => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: -22,
      }}>
      <Image
        source={require('../assests/Icon/Ellipse5.png')}
        style={{
          position: 'absolute',
          top: -100,
          right: 0,
        }}
      />
      <Image
        source={require('../assests/Icon/Ellipse4.png')}
        style={{
          width: 280,
          height: 480,
          //   marginLeft: 20,
          //   marginTop: 20,
          position: 'absolute',
          top: -78,
          right: 0,
        }}
      />
      <Image
        source={require('../assests/Icon/PizzaBig.png')}
        style={{
          width: 300,
          height: 441,
          //   marginLeft: 20,
          //   marginTop: 20,
          position: 'absolute',
          top: 20,
          top: -45,
          right: 0,
        }}
      />
    </View>
  );
};

export default BigPizza;
