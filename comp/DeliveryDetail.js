import {View, Text, Image, StyleSheet, Switch} from 'react-native';
import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

const DeliveryDetail = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={{marginBottom: 52}}>
      <View>
        <Image
          source={require('../assests/Icon/Rectangle.png')}
          style={{
            width: 335,
            height: 286,
            marginTop: -70,
            marginLeft: 14,
          }}
        />
        <View style={{display: 'flex', flexDirection: 'row', marginTop: -270}}>
          <Image
            source={require('../assests/Icon/location.png')}
            style={{
              width: 16.71,
              height: 20.31,
              marginLeft: 30,
            }}
          />
          <Text
            style={{
              width: 150,
              height: 23,
              lineHeight: 23.44,
              letterSpacing: -0.3,
              fontSize: 20,
              color: 'red',
              fontWeight: 'bold',
              marginLeft: 10,
              marginTop: -2,
            }}>
            Delivery Address
          </Text>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 80,
              marginTop: -10,
            }}>
            <Image
              source={require('../assests/Icon/bbb.png')}
              style={{
                width: 55,
                height: 55,
              }}
            />
            <Image
              source={require('../assests/Icon/pen.png')}
              style={{
                width: 11.25,
                height: 11.25,
                marginTop: -37.5,
              }}
            />
          </View>
        </View>
      </View>
      <View style={{marginLeft: 30}}>
        <Text
          style={{
            width: 58,
            height: 15,
            lineHeight: 20,
            fontSize: 14,
            color: '#6D6E9C',
            fontWeight: 'bold',
          }}>
          Home
        </Text>
        <Text
          style={{
            width: 211,
            height: 18,
            lineHeight: 15,
            fontSize: 14,
            color: '#6D6E9C',
            marginTop: 10,
            marginBottom: 10,
          }}>
          3728 Brand Road, Swift Current
        </Text>
        <Image
          source={require('../assests/Icon/line2.png')}
          style={{
            marginLeft: -18,
            width: 335,
          }}
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            lineHeight: 20,
            color: '#6D6E9C',
            width: 189,
            marginBottom: 10,
            marginTop: 10,
          }}>
          + Add delivery instruction
        </Text>
        <Image
          source={require('../assests/Icon/line2.png')}
          style={{
            marginLeft: -18,
            width: 335,
          }}
        />
        <View>
          <Text
            style={{
              fontSize: 18,
              color: '#6D6E9C',
              fontWeight: 'bold',
              marginTop: 30,
            }}>
            Contactless Delivery
          </Text>
          <Text
            style={{
              height: 18,
              lineHeight: 15,
              fontSize: 16,
              color: '#6D6E9C',
              marginTop: 10,
              marginBottom: 10,
            }}>
            Rider will place order at your door
          </Text>
          <View style={styles.container}>
            <Switch
              trackColor={{false: '#D3D3D3', true: '#FFD580'}}
              thumbColor={isEnabled ? 'orange' : 'gray'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
        </View>
      </View>
      <View
        style={{
          width: 335,
          height: 170,
          backgroundColor: 'white',
          borderRadius: 20,
          marginLeft: 14,
          marginTop: 80,
        }}>
        <View
          style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../assests/Icon/wallet.png')}
            style={{
              width: 20,
              height: 18,
              marginTop: 18,
              marginLeft: 20,
            }}
          />
          <Text
            style={{
              width: 150,
              height: 23,
              lineHeight: 23.44,
              letterSpacing: -0.3,
              color: 'red',
              fontWeight: 'bold',
              marginTop: 18,
              marginLeft: 20,
              fontSize: 20,
            }}>
            Payment method
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 250,
            marginTop: -32,
          }}>
          <Image
            source={require('../assests/Icon/bbb.png')}
            style={{
              width: 55,
              height: 55,
            }}
          />
          <Image
            source={require('../assests/Icon/pen.png')}
            style={{
              width: 11.25,
              height: 11.25,
              marginTop: -37.5,
            }}
          />
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('../assests/Icon/visa.png')}
              style={{
                width: 28,
                height: 28,
                marginTop: 20,
                marginLeft: 12,
              }}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginTop: 15,
                marginLeft: 20,
              }}>
              <Text
                style={{color: '#6D6E9C', fontSize: 10, width: 58, height: 15}}>
                VISA
              </Text>
              <Text style={{color: '#6D6E9C', fontSize: 10}}>....0145</Text>
            </View>
          </View>
          <Text
            style={{
              width: 55,
              height: 18,
              color: '#6D6E9C',
              marginTop: 50,
              fontWeight: 'bold',
              fontSize: 14,
              marginRight: 15,
            }}>
            $ 14.50
          </Text>
        </View>
        <View
          style={{
            width: 166,
            height: 26,
            backgroundColor: '#DEF3E1',
            borderRadius: 10,
            marginLeft: 10,
            marginTop: 10,
          }}>
          <Text
            style={{
              width: 166,
              height: 33,
              color: '#57C168',
              textAlign: 'center',
              marginTop: 2,
            }}>
            10% Cashback Applied
          </Text>
        </View>
      </View>
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
