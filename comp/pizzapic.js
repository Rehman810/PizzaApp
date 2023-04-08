import {View, Image} from 'react-native';
import React from 'react';

export default function PizzaPic() {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -22,
      }}>
      <Image
        source={require('../assests/Icon/Ellipse02.png')}
        style={{
          width: 300.91,
          height: 300,
          position: 'absolute',
          top: -170,
        }}
      />
      <Image
        source={require('../assests/Icon/Ellipse01.png')}
        style={{
          width: 273.4,
          height: 273.4,
          position: 'absolute',
          top: -155,
        }}
      />

      <Image
        source={require('../assests/Icon/pizzaAssetsthinCrust1.png')}
        style={{
          width: 289.74,
          height: 289.74,
          position: 'absolute',
          top: -150,
        }}
      />
    </View>
  );
}
