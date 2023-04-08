import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import React from 'react';

const ToppingChoice = ({isToppingtrue}) => {
  if (isToppingtrue) {
    return (
      <View
        style={{
          width: 335,
          height: 181,
          backgroundColor: 'hsla(0, 0%, 100%, 0.6)',
          shadowColor: ' 0px 4px 15px rgba(218, 218, 229, 0.2)',
          borderRadius: 20,
          marginTop: 162,
          marginLeft: 12,
        }}>
        <View>
          <View
            style={{
              marginTop: 30,
              marginLeft: 90,
              fontSize: 20,
              width: 229.53,
              height: 23,
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Text
              style={{
                width: 147,
                height: 23,
                color: '#6D6E9C',
                lineHeight: 23,
                fontSize: 20,
                letterSpacing: -0.3,
                textAlign: 'center',
                marginLeft: -30,
              }}>
              Choose up to
            </Text>
            <Text
              style={{
                color: '#6D6E9C',
                lineHeight: 23,
                fontSize: 20,
                fontWeight: 'bold',
                letterSpacing: -0.3,
                textAlign: 'center',
                marginLeft: -20,
              }}>
              7 toppings
            </Text>
          </View>
          <Text
            style={{
              fontWeight: '700',
              color: '#6D6E9C',
              width: 134,
              height: 11,
              fontSize: 10,
              lineHeight: 11.72,
              letterSpacing: 1,
              fontWeight: 'bold',
              textTransform: 'uppercase',
              textAlign: 'center',
              marginLeft: 110,
              marginTop: 6,
            }}>
            Free 3 Add-ons
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginTop: 20,
          }}>
          <FlatList
            horizontal
            data={[1, 1, 1, 1, 1, 1, 1]}
            renderItem={({item, index}) => {
              return (
                <View
                  style={{
                    backgroundColor: 'white',
                    borderRadius: 20,
                    height: 76,
                    width: 231,
                    marginLeft: 10,
                    // marginTop: 15,
                    flexDirection: 'row',
                    shadowColor: ' 0px 4px 15px rgba(218, 218, 229, 0.7)',
                    alignItems: 'center',

                    // marginLeft: 20,
                    // marginBottom: 20,
                  }}>
                  <Image
                    source={require('../assests/Icon/pepperoni.png')}
                    resizeMode="contain"
                    style={{
                      width: 74,
                      height: 74,
                      borderRadius: 37,
                      marginTop: -6,
                      marginLeft: 10,
                    }}
                  />
                  <View style={{marginLeft: 10}}>
                    <Text
                      style={{
                        color: '#6D6E9C',
                        fontSize: 14,
                        fontWeight: '300',
                        lineHeight: 20,
                        color: '#6D6E9C',
                        fontWeight: 'bold',
                      }}>
                      Pepperoni
                    </Text>
                    <Text
                      style={{
                        color: '#6D6E9C',
                        fontSize: 14,
                        fontWeight: '300',
                        lineHeight: 20,
                      }}>
                      $ 0.00
                    </Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </View>
    );
  }
};

export default ToppingChoice;
