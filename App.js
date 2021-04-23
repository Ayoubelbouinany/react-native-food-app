import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Compenent/Home';
export default function App() {
  return (
    
    <View style={styles.container}>
      <View style={{width: '90%', height: '50%' , borderRadius: 20 }}>
      <Home></Home>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0.4,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  
 
});
