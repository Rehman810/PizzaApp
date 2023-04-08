import {View, Text, StyleSheet} from 'react-native';
import React, {useState, useContext} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import Specs from '../components/createpizza';
import context from '../comp/Context';
import Context from '../comp/Context';
import Next from '../comp/nextbtn';

const Choice = ({
  smallPrice,
  mediumPrice,
  largePrice,
  smallinch,
  mediuminch,
  largeinch,
  istrue,
}) => {
  const a = useContext(context);
  // const [inches, setInches] = useState('10"');
  // const [clicked, setClicked] = useState(true);
  // const [clicked1, setClicked1] = useState(false);
  // const [clicked2, setClicked2] = useState(false);
  let data;
  if (istrue) {
    return (
      <Context.Consumer>
        {({
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
        }) => (
          <Context.Provider value={data}>
            <View>
              <View>
                <Text
                  style={{
                    fontSize: 14,
                    width: 48.13,
                    height: 22.79,
                    borderRadius: 10,
                    backfaceVisibility: 2,
                    marginLeft: 160,
                    marginTop: 150,
                    color: 'gray',
                    backgroundColor: '#DADAE5',
                    textAlign: 'center',
                  }}>
                  {inches}
                </Text>
              </View>
              <View
                style={{
                  width: 335,
                  height: 139,
                  backgroundColor: 'white',
                  shadowColor: ' 0px 4px 15px rgba(218, 218, 229, 0.2)',
                  borderRadius: 20,
                  marginTop: 32,
                  marginLeft: 12,
                }}>
                <View
                  style={{
                    marginTop: 30,
                    marginLeft: 90,
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
                    }}>
                    Choose your
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 20,
                      }}>
                      {' '}
                      {/* {specs} */}
                      {specs}
                    </Text>
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
                  {clicked ? (
                    <LinearGradient
                      style={{
                        width: 98,
                        height: 38,
                        borderRadius: 20,
                      }}
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                      colors={['#F5313F', '#FFA360']}>
                      <Text
                        style={{
                          fontSize: 15,
                          lineHeight: 17.53,
                          letterSpacing: -0.3,
                          textAlign: 'center',
                          fontWeight: 'bold',
                          marginTop: 8,
                        }}
                        onPress={() => {
                          setPrice(`$${smallPrice}.00`);
                          setInches(`${smallinch}`);
                          // handleButtonPress(8);
                          setClicked1(false);
                          setClicked(true);
                          setClicked2(false);
                          data = 'small';
                        }}>
                        {' '}
                        {/* {Choice1} */}
                        {Choice1}
                      </Text>
                    </LinearGradient>
                  ) : (
                    <Text
                      onPress={() => {
                        setPrice(`$${smallPrice}.00`);
                        setInches(`${smallinch}`);
                        // handleButtonPress(8);
                        setClicked1(false);
                        setClicked(true);
                        setClicked2(false);
                        data = 'small';
                      }}
                      style={styles.button}>
                      {' '}
                      {/* {Choice1} */}
                      {Choice1}
                    </Text>
                  )}
                  {clicked1 ? (
                    <LinearGradient
                      style={{
                        width: 98,
                        height: 38,
                        borderRadius: 20,
                      }}
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                      colors={['#F5313F', '#FFA360']}>
                      <Text
                        style={{
                          fontSize: 15,
                          lineHeight: 17.53,
                          letterSpacing: -0.3,
                          textAlign: 'center',
                          fontWeight: 'bold',
                          marginTop: 8,
                        }}
                        onPress={() => {
                          setClicked1(true);
                          setClicked(false);
                          setClicked2(false);
                          setPrice(`$${mediumPrice}.00`);
                          setInches(`${mediuminch}`);
                          data = 'medium';
                          // handleButtonPress(10);
                        }}>
                        {' '}
                        {Choice2}
                      </Text>
                    </LinearGradient>
                  ) : (
                    <Text
                      onPress={() => {
                        setClicked1(true);
                        setClicked(false);
                        setClicked2(false);
                        setPrice(`$${mediumPrice}.00`);
                        setInches(`${mediuminch}`);
                        data = 'medium';
                        // handleButtonPress(10);
                      }}
                      style={styles.button}>
                      {' '}
                      {Choice2}
                    </Text>
                  )}
                  {clicked2 ? (
                    <LinearGradient
                      style={{
                        width: 98,
                        height: 38,
                        borderRadius: 20,
                      }}
                      start={{x: 0, y: 0}}
                      end={{x: 1, y: 0}}
                      colors={['#F5313F', '#FFA360']}>
                      <Text
                        style={{
                          fontSize: 15,
                          lineHeight: 17.53,
                          letterSpacing: -0.3,
                          textAlign: 'center',
                          fontWeight: 'bold',
                          marginTop: 8,
                        }}
                        onPress={() => {
                          setClicked1(false);
                          setClicked(false);
                          setClicked2(true);
                          setPrice(`$${largePrice}.00`);
                          setInches(`${largeinch}`);
                          data = 'large';
                          // handleButtonPress(12);
                        }}>
                        {' '}
                        {Choice3}
                      </Text>
                    </LinearGradient>
                  ) : (
                    <Text
                      onPress={() => {
                        setClicked1(false);
                        setClicked(false);
                        setClicked2(true);
                        setPrice(`$${largePrice}.00`);
                        setInches(`${largeinch}`);
                        data = 'large';
                        // handleButtonPress(12);
                      }}
                      style={styles.button}>
                      {' '}
                      {Choice3}
                    </Text>
                  )}
                </View>
              </View>
              {/* {pass == true ? ( */}
              {/* <Next onPress={handleButtonPress} /> */}
              {/* ) : (
            <Next onPress={handleButtonPressno} />
          )} */}
            </View>
          </Context.Provider>
        )}
      </Context.Consumer>
    );
  }
};

export default Choice;

const styles = StyleSheet.create({
  button: {
    width: 66,
    height: 20,
    color: 'black',
    fontSize: 15,
    lineHeight: 17.53,
    letterSpacing: -0.3,
    textAlign: 'center',
    color: '#6D6E9C',
  },
});
