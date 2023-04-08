import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

import {DrawerContentScrollView} from '@react-navigation/drawer';
export default CustomDrawer = props => {
  return (
    <DrawerContentScrollView>
      <View>
        <View>
          <View style={styles.imageContainer}>
            <View style={styles.imageCont2}>
              <Image
                source={require('../assests/Icon/mypic.jpeg')}
                style={styles.image}
                resizeMode="contain"
              />
            </View>
          </View>
          <Text style={styles.profileText}>Abdul Rehman</Text>
          <Text style={styles.profileText2}>rehmankp@gmail.com</Text>
        </View>
        <View
          style={{backgroundColor: '#F4F3F9', height: 300, marginBottom: 30}}>
          <View
            style={{
              marginTop: 40,
              padding: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Image
              source={require('../assests/Icon/profile.png')}
              style={{
                width: 19.84,
                height: 18.97,
              }}
              resizeMode="contain"
            />
            <Text
              style={{
                width: 116.18,
                height: 20.78,
                fontSize: 13.22,
                lineHeight: 18.89,
                color: '#6D6E9C',
              }}>
              Profile
            </Text>
          </View>
          <View
            style={{
              padding: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Image
              source={require('../assests/Icon/Payment.png')}
              style={{
                width: 19.84,
                height: 18.97,
              }}
              resizeMode="contain"
            />
            <Text
              style={{
                width: 116.18,
                height: 20.78,
                fontSize: 13.22,
                lineHeight: 18.89,
                color: '#6D6E9C',
              }}>
              Payment Method
            </Text>
          </View>
          <View
            style={{
              padding: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Image
              source={require('../assests/Icon/history.png')}
              style={{
                width: 19.84,
                height: 18.97,
              }}
              resizeMode="contain"
            />
            <Text
              style={{
                width: 116.18,
                height: 20.78,
                fontSize: 13.22,
                lineHeight: 18.89,
                color: '#6D6E9C',
              }}>
              Order History
            </Text>
          </View>
          <View
            style={{
              padding: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Image
              source={require('../assests/Icon/location.png')}
              style={{
                width: 19.84,
                height: 18.97,
              }}
              resizeMode="contain"
            />
            <Text
              style={{
                width: 116.18,
                height: 20.78,
                fontSize: 13.22,
                lineHeight: 18.89,
                color: '#6D6E9C',
              }}>
              Addresses
            </Text>
          </View>
          <View
            style={{
              padding: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Image
              source={require('../assests/Icon/Help.png')}
              style={{
                width: 19.84,
                height: 18.97,
              }}
              resizeMode="contain"
            />
            <Text
              style={{
                width: 116.18,
                height: 20.78,
                fontSize: 13.22,
                lineHeight: 18.89,
                color: '#6D6E9C',
              }}>
              Help Center
            </Text>
          </View>
        </View>
        <View>
          <View
            style={{
              padding: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <Image
              source={require('../assests/Icon/Settings.png')}
              style={{
                width: 19.84,
                height: 18.97,
              }}
              resizeMode="contain"
            />
            <Text
              style={{
                width: 116.18,
                height: 20.78,
                fontSize: 13.22,
                lineHeight: 18.89,
                color: '#6D6E9C',
              }}>
              Settings
            </Text>
          </View>
          <View
            style={{
              padding: 10,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <View>
              <Image
                source={require('../assests/Icon/logoutoutter.png')}
                style={{
                  width: 19.84,
                  height: 18.97,
                }}
                resizeMode="contain"
              />
              <Image
                source={require('../assests/Icon/logoutinner.png')}
                style={{
                  width: 19.84,
                  height: 18.97,
                  marginLeft: -8,
                  marginTop: -20,
                }}
                resizeMode="contain"
              />
            </View>
            <Text
              style={{
                width: 116.18,
                height: 20.78,
                fontSize: 13.22,
                lineHeight: 18.89,
                color: '#6D6E9C',
              }}>
              Log out
            </Text>
          </View>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    // marginTop: 10,
    borderRadius: 100,
  },
  imageContainer: {
    padding: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageCont2: {
    borderWidth: 25,
    width: 150,
    height: 150,
    borderRadius: 200,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(180,180,180,1)',

    borderColor: 'rgba(180,180,180,0.2)',
  },
  itemsCont: {
    borderColor: 'rgba(180,180,180,0.8)',
  },
  imageCont3: {
    borderColor: 'rgba(180,180,180,1)',
    borderWidth: 20,
    padding: 20,
  },
  profileText: {
    color: '#6D6E9C',
    fontSize: 19,
    fontWeight: '700',
    marginTop: -30,
    textAlign: 'center',
  },
  profileText2: {
    fontSize: 15,
    color: '#6D6E9C',
    textAlign: 'center',
    marginBottom: 20,
  },
});
