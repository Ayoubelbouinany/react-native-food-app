import React from 'react';
import { Image, View, ScrollView, Text, TextInput, StyleSheet } from 'react-native';
import Header from './../../components/Header';
import Food from './../../components/Food';

import { infoHome } from './../../mocks';

export default function Home({ navigation }) {
  return(
    <ScrollView>
      <Header />

      <Image source={require('./../../assets/Home/panel.png')} style={styles.img} />

      {
        infoHome.map(item => {
          return(
            <View key={item.id}>
              <Text style={styles.sectionTitle}>{item.title}</Text>
              <ScrollView
                style={styles.side}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {
                  item.datas.map(data => {
                    return(
                      <Food data={data} navigation={navigation}/>
                    );
                  })
                }
              </ScrollView>
            </View>
          )
        })
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  img: {
    marginTop: 20,
    width: '100%',
  },
  sectionTitle: {
    fontSize: 16,
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  side: {
    marginLeft: 15,
    marginBottom: 18,
  }
});