import React, {useState} from 'react';
import {View, Text, Image, StatusBar, Alert} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

const EndGradient = ({url, head, line2}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={['#F5313F', '#FFA360']}
      style={{
        width: 415,
        height: 170,
      }}>
      <View>
        <Image
          source={url}
          style={{
            width: 30,
            height: 30,
            marginLeft: 20,
            marginTop: 20,
          }}
        />
        <View style={{marginLeft: 20}}>
          <Text
            style={{
              fontSize: 25,
              lineHeight: 29.3,
              letterSpacing: -0.3,
              color: 'white',
            }}>
            {head}
          </Text>
          <Text
            style={{
              fontSize: 25,
              lineHeight: 29.3,
              letterSpacing: -0.3,
              fontWeight: '700',
              color: 'white',
            }}>
            {line2}
          </Text>
        </View>
      </View>
    </LinearGradient>
  );
};

export default EndGradient;
