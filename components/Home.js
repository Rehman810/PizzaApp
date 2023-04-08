import React from 'react';
import {View, Text, Image, StatusBar, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
function App({navigation}) {
  const LeftDrawer = createDrawerNavigator();
  const LeftDrawerScreen = () => {
    return (
      <LeftDrawer.Navigator screenOptions={{drawerPosition: 'left'}}>
        <LeftDrawer.Screen name="Home" component={HomeScreen} />
      </LeftDrawer.Navigator>
    );
  };
  return (
    <View
      style={{
        backgroundColor: '#E5E5E5',
        height: 800,
        marginTop: 30,
      }}>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="white"
        translucent={true}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          border: 0.25,
          backgroundColor: 'white',
          height: 48,
          alignItems: 'baseline',
        }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            source={require('../assests/Icon/abcd.png.png')}
            style={{
              width: 14,
              height: 9.33,
              color: 'purple',
              position: 'absolute',
              left: 30,
              right: 0,
              top: 20,
              bottom: 0,
            }}
          />
        </TouchableOpacity>
        <View
          style={{
            position: 'absolute',
            left: 60,
            top: 5,
          }}>
          <Text style={{fontSize: 14, color: '#6D6E9C', fontFamily: 'Roboto'}}>
            Deliver to:
          </Text>
          <Text style={{fontSize: 10, color: 'purple', fontWeight: 'bold'}}>
            HOME
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Createpizza')}>
          <Image
            source={require('../assests/Icon/Vector.png')}
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
      <View
        style={{
          height: 152,
          width: 375,
        }}>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#F5313F', '#FFA360']}>
          <View
            style={{
              padding: 15,
              marginBottom: 20,
            }}>
            <Text
              style={{
                fontSize: 14,
                width: 69,
                height: 17,
                marginLeft: 40,
                color: 'white',
              }}>
              Hi Rehman!
            </Text>
            <View
              style={{
                marginTop: 5,
                display: 'flex',
                flexDirection: 'row',
              }}>
              <Image
                source={require('../assests/Icon/line.png')}
                style={{
                  color: 'white',
                  border: 1,
                  width: 1,
                  marginLeft: 41,
                }}
              />
              <Text
                style={{
                  fontSize: 25,
                  width: 244,
                  marginTop: -8,
                  marginLeft: 10,
                  color: 'white',
                }}>
                What pizza do you want to try today?
              </Text>
            </View>
          </View>
        </LinearGradient>
        <View
          style={{
            width: 322,
            height: 218,
            backgroundColor: ' rgba(255, 255, 255, 0.8)',
            blurRadius: 1,
            borderRadius: 20,
            position: 'absolute',
            left: 20,
            top: 100,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View>
            <Image
              source={require('../assests/Icon/pizza.png')}
              style={{
                color: 'white',
                border: 1,
                width: 175,
                height: 177,
                position: 'relative',
                left: -40,
                marginLeft: 41,
              }}
            />
          </View>
          <View
            style={{
              marginLeft: -50,
            }}>
            <Text
              style={{
                color: '#F5313F',
                fontSize: 20,
                letterSpacing: -0.3,
                fontWeight: 'bold',
              }}>
              Reorder again?
            </Text>
            <Text
              style={{
                color: '#6D6E9C',
                lineHeight: 12,
                textTransform: 'uppercase',
                fontSize: 10,
                letterSpacing: 1,
                width: 149,
              }}>
              Small, thin crust, tomatoes, basil, cheese
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: '#6D6E9C',
                width: 34,
                height: 23,
                lineHeight: 23.44,
                letterSpacing: -0.3,
                fontWeight: 'bold',
                marginTop: 10,
              }}>
              $12
            </Text>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('Createpizza')}>
                <LinearGradient
                  start={{x: 0, y: 0}}
                  end={{x: 1, y: 0}}
                  colors={['#F5313F', '#FFA360']}
                  style={{
                    width: 123,
                    height: 38,
                    borderRadius: 20,
                    marginTop: 10,
                  }}>
                  <Text
                    style={{
                      lineHeight: 17.58,
                      fontSize: 15,
                      letterSpacing: -0.3,
                      textAlign: 'center',
                      color: '#FFFFFF',
                      marginTop: 9,
                    }}>
                    Add to cart
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          shadowColor: '0px 4px 15px rgba(218, 218, 229, 0.2)',
          width: 322,
          height: 438,
          borderRadius: 20,
          position: 'absolute',
          left: 20,
          top: 390,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 30,
          }}>
          <Text
            style={{
              width: 252,
              height: 29,
              fontSize: 25,
              letterSpacing: -0.3,
              lineHeight: 29.3,
              textAlign: 'center',
              color: '#F5313F',
              marginLeft: -8,
            }}>
            Create your
          </Text>
          <Text
            style={{
              width: 252,
              height: 29,
              fontSize: 25,
              fontWeight: 'bold',
              lineHeight: 29.3,
              letterSpacing: -0.3,
              color: '#F5313F',
              textAlign: 'center',
              marginLeft: -145,
            }}>
            own pizza
          </Text>
        </View>
        <Text
          style={{
            color: '#A0A8CC',
            marginLeft: 50,
          }}>
          The cost will depend on your customization
        </Text>
        <Image
          source={require('../assests/Icon/pizza2.png')}
          style={{
            color: 'white',
            border: 1,
            width: 321,
            height: 321,
            position: 'relative',
            left: -40,
            marginLeft: 41,
          }}
        />
      </View>
    </View>
  );
}

export default App;
