import React, {useState} from 'react';
import {View, Text, Image, StatusBar, Alert} from 'react-native';
import Page from '../comp/fullpage';
import {useNavigation} from '@react-navigation/native';
import Next from '../comp/nextbtn';
import TopBar from '../comp/back';
import Context from '../comp/Context';

const Topping = ({route}) => {
  const [price, setPrice] = useState(`$${14}.00`);

  const navigation = useNavigation();
  const handleButtonPress = () => {
    navigation.navigate('CheckPizza');
  };
  const Backbtn = () => {
    navigation.navigate('Crust');
  };

  // const {Total} = route.params;
  return (
    <View
      style={{
        backgroundColor: '#E5E5E5',
        height: 800,
        marginTop: 30,
      }}>
      <TopBar onPress={Backbtn} />
      <Context.Provider
        value={{
          price,
          setPrice,
        }}>
        <Page
          navigation={navigation}
          price1={12}
          price3={14}
          isToppingtrue={true}
        />
      </Context.Provider>
      <Next onPress={handleButtonPress} Next={'Done'} />
    </View>
  );
};

export default Topping;
