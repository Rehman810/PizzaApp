import {View, Text, Image, StyleSheet, Animated} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const DeliveryDetail = () => {
  let today = new Date();
  let date = today.getDate();
  let month = new Intl.DateTimeFormat('en-US', {month: 'long'}).format(date);

  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 10000,
    }).start();
  }, [fadeAnim]);
  return (
    <View>
      <Image
        source={require('../assests/Icon/Rectangle.png')}
        style={{
          width: 335,
          height: 300,
          marginTop: 40,
          marginLeft: 14,
          borderRadius: 20,
        }}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: -270,
          marginLeft: 30,
        }}>
        <View style={{display: 'flex', flexDirection: 'column'}}>
          <Text
            style={{
              width: 76,
              height: 13,
              fontSize: 10,
              color: '#6D6E9C',
              fontWeight: 'bold',
            }}>
            ORDERED ON
          </Text>
          <Text
            style={{
              height: 26,
              fontSize: 20,
              color: '#F5313F',
              fontWeight: 'bold',
              marginLeft: -10,
            }}>{`${date} ${month}`}</Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'column'}}>
          <Text
            style={{
              width: 76,
              height: 13,
              fontSize: 10,
              color: '#6D6E9C',
              fontWeight: 'bold',
            }}>
            INVOICE #
          </Text>
          <Text
            style={{
              width: 69,
              height: 26,
              fontSize: 20,
              color: '#F5313F',
              fontWeight: 'bold',
            }}>
            #159
          </Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'column'}}>
          <Text
            style={{
              width: 76,
              height: 13,
              fontSize: 10,
              color: '#6D6E9C',
              fontWeight: 'bold',
            }}>
            TOTAL DUE
          </Text>
          <Text
            style={{
              width: 69,
              height: 26,
              fontSize: 20,
              color: '#F5313F',
              fontWeight: 'bold',
            }}>{`$${14.5}`}</Text>
        </View>
      </View>
      <Image
        source={require('../assests/Icon/line2.png')}
        style={{
          marginLeft: -18,
          marginTop: 20,
          width: 335,
        }}
      />
      <View style={{marginTop: 50}}>
        <Text
          style={{
            color: '#F5313F',
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center',
          }}>
          Thanks for Your Order,
        </Text>
        <Text
          style={{
            color: '#F5313F',
            fontWeight: 'bold',
            fontSize: 20,
            textAlign: 'center',
          }}>
          Come Again.
        </Text>
      </View>

      <Animated.View
        style={{
          opacity: fadeAnim,
        }}>
        <Image
          source={require('../assests/Icon/pizza2.png')}
          style={{
            color: 'white',
            border: 1,
            width: 359,
            height: 351,
            marginTop: 85,
          }}
        />
      </Animated.View>
    </View>
  );
};

export default DeliveryDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -30,
    marginLeft: 200,
  },
});
