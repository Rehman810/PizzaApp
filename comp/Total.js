import {View, Text, Image} from 'react-native';
import React from 'react';

const Total = () => {
  return (
    <View
      style={{
        width: 285,
        height: 346,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        borderRadius: 20,
        marginTop: 100,
        marginBottom: 15,
      }}>
      <Image
        source={require('../assests/Icon/cart.png')}
        style={{
          width: 14.17,
          height: 9.92,
          marginLeft: 35,
          marginTop: 30,
        }}
      />

      <Text
        style={{
          width: 96,
          height: 12,
          color: 'red',
          lineHeight: 11.72,
          fontSize: 10,
          fontWeight: 'bold',
          marginLeft: 35,
          marginTop: 5,
          textTransform: 'uppercase',
        }}>
        order summary
      </Text>
      <Image
        source={require('../assests/Icon/line2.png')}
        style={{
          width: 285,
          marginTop: 20,
        }}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <View
          style={{
            width: 85,
            height: 117,
            lineHeight: 20,
          }}>
          <Text style={{fontSize: 14, color: '#6D6E9C'}}>Medium Size</Text>
          <Text style={{fontSize: 14, color: '#6D6E9C'}}>Thick Crust</Text>
          <Text style={{fontSize: 14, color: '#6D6E9C'}}>Pepperoni</Text>
          <Text style={{fontSize: 14, color: '#6D6E9C'}}>Black Olives</Text>
          <Text style={{fontSize: 14, color: '#6D6E9C'}}>Mushroom</Text>
          <Text style={{fontSize: 14, color: '#6D6E9C'}}>Onions</Text>
        </View>
        <View
          style={{
            width: 45,
            lineHeight: 11.72,
            letterSpacing: 1,
          }}>
          <Text
            style={{
              fontSize: 14,
              color: '#6D6E9C',
            }}>{`$${10}.00`}</Text>
          <Text style={{fontSize: 14, color: '#6D6E9C'}}>{`$${4}.00`}</Text>
          <Text style={{fontSize: 14, color: '#6D6E9C'}}>{`$${0}.00`}</Text>
          <Text style={{fontSize: 14, color: '#6D6E9C'}}>{`$${0}.00`}</Text>
          <Text style={{fontSize: 14, color: '#6D6E9C'}}>{`$${0}.00`}</Text>
          <Text style={{fontSize: 14, color: '#6D6E9C'}}>{`$${0}.00`}</Text>
        </View>
      </View>
      <Image
        source={require('../assests/Icon/line2.png')}
        style={{
          width: 285,
          marginTop: 20,
          marginBottom: 20,
        }}
      />
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Text style={{fontSize: 20, color: '#6D6E9C', marginLeft: -15}}>
          Total:
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: '#6D6E9C',
            lineHeight: 23.44,
            letterSpacing: -0.3,
          }}>
          {`$${14}.00`}
        </Text>
      </View>
    </View>
  );
};

export default Total;
