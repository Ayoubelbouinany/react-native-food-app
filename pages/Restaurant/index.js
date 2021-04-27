import React,{useState,useEffect} from 'react';
import { View, Text, Image, ImageBackground, ScrollView, StyleSheet ,TouchableOpacity,Linking} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import FoodR from './../../components/FoodR';
import { rest } from './../../mocks';
export default function Restaurant({ navigation }) {
 const [total, setTotal] = useState(0);

  return(
    
    <ScrollView>
      {/* Header  */}
      <ImageBackground source={require('./../../assets/Restaurant/panel.png')} style={styles.imgBack}>
        <View style={styles.navigation}>
          <Icon name="arrow-left" color="white" size={20} onPress={() => navigation.navigate('Home')}/>
          <View style={styles.two}>
            <Image source={require('./../../assets/Restaurant/shop.png')}/>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.infoRest}>
        <Text style={styles.nameRest}>RAMADANE MUBARAK</Text>
        <Text style={styles.foods}>FTOUR, Ramdane</Text>
        <View style={styles.box}>
          <View style={styles.boxItem}>
            <Image source={require('./../../assets/Restaurant/tag.png')} />
            <Text style={styles.boxItemText}>DH</Text>
          </View>
          <View style={styles.boxItem}>
            <Image source={require('./../../assets/Restaurant/location.png')} />
            <Text style={styles.boxItemText}>MOROCCO, SAFI</Text>
          </View>
        </View>
      </View>

         {/* list product  */}

      <View style={styles.line}></View>

      <View style={styles.popular}>
      <Text style={styles.textTitle}>Best Sellers</Text>
        {
        rest.map(r => {
            return(
              <FoodR data={r} />

            );
          })
        }
     
      </View>

      <TouchableOpacity
            onPress={() =>
              Linking.openURL(
                "https://www.sandbox.paypal.com/checkoutnow?token=2CN34622VF479594M%27"
              )
            }
            style={{
              backgroundColor: "#FFB833",
              alignItems: "center",
              padding: 10,
              borderRadius: 5,
              margin: 20,
            }}
          >
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "white",
              }}
            >
              CHECKOUT
            </Text>
          </TouchableOpacity>
      
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imgBack: {
    width: '100%', 
    height: 200,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  navigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 49,
  },
  two: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 69,
  },
  infoRest: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 120,
    marginTop: -58,
    marginLeft: 15,
    marginRight: 15,
    borderColor: '#E7E7E7',
    borderRadius: 4,
    borderWidth: 1,
  },
  nameRest: {
    fontSize: 20,
    color: '#342B2B',
    marginBottom: 7,
  },
  foods: {
    fontSize: 12,
    color: '#A0A0A0',
  },
  box: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 239,
  },
  boxItem: {
    flexDirection: 'row',
  },
  boxItemText: {
    marginLeft: 1,
  },
  textTitle: {
    fontSize: 16,
  },
  line: {
    backgroundColor: '#F2F2F4',
    height: 4,
    marginBottom: 30,
  },
  popular: {
    marginLeft: 15,
    marginRight: 15,
  },

  boxTitle: {
    width: 145, 
    height: 40,
    marginBottom: -20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#E7E7E7',
    borderWidth: 1,
    zIndex: 1,
  },
});