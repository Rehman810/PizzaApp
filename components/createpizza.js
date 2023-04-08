import React, {useState} from 'react';
import {View, Text, Image, StatusBar, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Page from '../comp/fullpage';
import {useNavigation} from '@react-navigation/native';
import Next from '../comp/nextbtn';
import TopBar from '../comp/back';
import Context from '../comp/Context';

const Createpizza = () => {
  const navigation = useNavigation();
  const handleButtonPress = () => {
    navigation.navigate('Crust', {num});
  };

  const Backbtn = () => {
    navigation.navigate('Home');
  };

  let specs = 'size';
  let Choice1 = 'Small';
  let Choice2 = 'Medium';
  let Choice3 = 'Large';
  const [price, setPrice] = useState('$12.00');
  const [inches, setInches] = useState('10"');
  const [clicked, setClicked] = useState(false);
  const [clicked1, setClicked1] = useState(false);
  const [clicked2, setClicked2] = useState(true);
  let num = clicked ? 8 : clicked1 ? 10 : clicked2 ? 12 : 'error';
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
          num,
          setPrice,
          specs,
          Choice1,
          Choice2,
          Choice3,
          inches,
          setInches,
          clicked,
          setClicked,
          clicked1,
          setClicked1,
          clicked2,
          setClicked2,
        }}>
        <Page
          navigation={navigation}
          price1={8}
          price2={10}
          price3={12}
          inch1={`${10}"`}
          inch2={`${12}"`}
          inch3={`${14}"`}
          istrue={true}
        />
      </Context.Provider>
      <Next onPress={handleButtonPress} Next={'Next'} />
    </View>
  );
};

export default Createpizza;
