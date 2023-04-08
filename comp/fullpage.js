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
import {NavigationContainer} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import PizzaPic from '../comp/pizzapic';
import Choice from '../comp/Choice';
import ChoiceCrust from './ChoiceforCrust';
import ToppingChoice from './ToppingChoice';
import Back from './back';
import Context from '../comp/Context';

const Page = ({
  price1,
  price2,
  price3,
  inch1,
  inch2,
  inch3,
  istrue,
  istruecrust,
  isToppingtrue,
}) => {
  return (
    <Context.Consumer>
      {({price}) => (
        <View>
          <StatusBar
            barStyle="dark-content"
            hidden={false}
            backgroundColor="white"
            translucent={true}
          />

          <View>
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 1, y: 0}}
              colors={['#F5313F', '#FFA360']}
              style={{
                height: 287,
                width: 415,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  marginLeft: 50,
                  marginTop: 20,
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}>
                  <Text
                    style={{
                      fontSize: 25,
                      width: 189,
                      height: 29,
                      lineHeight: 29.3,
                      letterSpacing: -0.3,
                    }}>
                    Create Your Pizza
                  </Text>
                  <Text
                    style={{
                      fontSize: 10,
                      lineHeight: 11.72,
                      letterSpacing: 1,
                    }}>
                    size, crust, toppings
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 25,
                      lineHeight: 29.3,
                      letterSpacing: -0.3,
                      color: 'white',
                    }}>
                    {price}
                  </Text>
                </View>
              </View>
            </LinearGradient>
          </View>

          <View
            style={{
              width: 48.13,
              height: 22.79,
              color: '#DADAE5',
            }}></View>

          <PizzaPic />
          <Choice
            smallPrice={price1}
            mediumPrice={price2}
            largePrice={price3}
            smallinch={inch1}
            mediuminch={inch2}
            largeinch={inch3}
            istrue={istrue}
          />
          <ChoiceCrust
            smallPrice={price1}
            mediumPrice={price2}
            largePrice={price3}
            smallinch={inch1}
            mediuminch={inch2}
            largeinch={inch3}
            istruecrust={istruecrust}
          />
          <ToppingChoice
            smallPrice={price1}
            mediumPrice={price2}
            largePrice={price3}
            smallinch={inch1}
            mediuminch={inch2}
            largeinch={inch3}
            isToppingtrue={isToppingtrue}
          />
        </View>
      )}
    </Context.Consumer>
  );
};

export default Page;
