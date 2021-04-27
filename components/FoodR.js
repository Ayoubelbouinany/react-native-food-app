import React from 'react';
import { View, Image, ImageBackground, Text, StyleSheet } from 'react-native';
import Controllers from './Controllers';

const FoodR = ({ data }) => {
  return(
      <View style={styles.container} key={data.id}>

        <Image source={data.url} 
        style={{
          width:'40%',
          backgroundSize:'cover',
          height:200
        }}
        />

        <Controllers title={data.title} total={data.price}/>
      </View>
  );
}

export default FoodR;

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 15,
    marginTop: 8,
    marginBottom: 18,
  },
});