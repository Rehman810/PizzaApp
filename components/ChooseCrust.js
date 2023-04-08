import React, {useState} from 'react';
import {View, Text, Image, StatusBar, Alert} from 'react-native';
import Page from '../comp/fullpage';
import {useNavigation} from '@react-navigation/native';
import Next from '../comp/nextbtn';
import TopBar from '../comp/back';
import Context from '../comp/Context';

const Crust = ({route}) => {
  const [price, setPrice] = useState(`$${10}.00`);
  const [inches, setInches] = useState('+$2.00');
  const [clickedchoice, setClickedchoice] = useState(true);
  const [clicked1choice, setClicked1choice] = useState(false);
  const [clicked2choice, setClicked2choice] = useState(false);

  const navigation = useNavigation();
  const handleButtonPress = () => {
    navigation.navigate('Topping', {Total});
  };
  const Backbtn = () => {
    navigation.navigate('Home');
  };
  let Total = clickedchoice ? 12 : clicked2choice ? 14 : 'error';
  let specs = 'crust';
  let Choice1 = 'Thin';
  let Choice3 = 'Thick';
  const {num} = route.params;
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
          specs,
          Choice1,
          Choice3,
          inches,
          setInches,
          clickedchoice,
          setClickedchoice,
          clicked1choice,
          setClicked1choice,
          clicked2choice,
          setClicked2choice,
        }}>
        <Page
          navigation={navigation}
          inch1={`+$${2}.00`}
          inch3={`+$${4}.00`}
          price1={num + 2}
          price3={num + 4}
          istruecrust={true}
        />
      </Context.Provider>
      <Next onPress={handleButtonPress} Next={'Next'} />
    </View>
  );
};

export default Crust;
