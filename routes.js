import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Restaurant from './pages/Restaurant';

const Tab = createBottomTabNavigator();
function routes() {
  return (
    <NavigationContainer>


     <Tab.Navigator
     
     screenOptions={({navigation, route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
      
        if (route.name === 'Home') {
          iconName =  'home-outline';
        } else if (route.name === 'Profile') {
          iconName = 'person-circle-outline';
        }

        // You can return any component that you like here!
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
   
    tabBarOptions={{
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      tabBarVisible: false,
            style: {
              height: 60,
              paddingTop: 10,
              paddingBottom: 5,
            },
            
    }}
   
     
  
        
     
     >
        <Tab.Screen name="Home" component={Home} />
        
      <Tab.Screen name="Profile" component={Profile} />
     <Tab.Screen name="Restaurant" component={Restaurant} options={{
          tabBarVisible: false
        }} /> 
      </Tab.Navigator>
  </NavigationContainer>
  )
}

export default routes