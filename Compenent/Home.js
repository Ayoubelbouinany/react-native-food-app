import React from 'react'
import { FlatList,AppRegistry, StyleSheet, Text, View } from 'react-native'
import Swiper from 'react-native-swiper'
const styles = StyleSheet.create({
    wrapper: {
    },
    slide1: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#9DD6EB',
     borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
   },
   slide2: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#97CAE5',
     borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
   },
   slide3: {
     flex: 1,
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#92BBD9',
     borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
   },
   text: {
     color: '#fff',
     fontSize: 30,
     fontWeight: 'bold'
   }
       })

function Home() {


    
    return (
        <Swiper style={styles.wrapper} showsButtons loop={false} >
        <View testID="Hello" style={styles.slide1}>
          <Text style={styles.text}>Hello Swiper</Text>
        </View>
        <View testID="Beautiful" style={styles.slide2}>
          <Text style={styles.text}>Beautiful</Text>
        </View>
        <View testID="Simple" style={styles.slide3}>
          <Text style={styles.text}>And simple</Text>
        </View>
      </Swiper>
    )

    
}


export default Home
