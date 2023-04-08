import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
const Next = ({onPress, Next}) => {
  return (
    <View>
      <TouchableOpacity style={{marginTop: 32}} onPress={onPress}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#F5313F', '#FFA360']}>
          <View
            style={{
              width: 375,
              height: 59,
            }}>
            <Text
              style={{
                fontSize: 15,
                lineHeight: 17.53,
                letterSpacing: -0.3,
                textAlign: 'center',
                fontWeight: 'bold',
                color: 'white',
                marginTop: 20,
              }}>
              {Next}
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

export default Next;
