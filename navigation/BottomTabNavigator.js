import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/Survey/HomeScreen';
import LinksScreen from '../screens/Account/LinksScreen';
import LineGraphScreen from '../screens/DataVisualisation/LineGraphScreen';
import MessengerScreen from '../screens/ShareWithAFriend/MessengerScreen';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({ 
    headerShown: false, // Hide header
  });

  return (
    <BottomTab.Navigator
      initialRouteName={INITIAL_ROUTE_NAME}
      tabBarOptions={{
        activeTintColor: '#ffffff', // Change active title color
        inactiveTintColor: '#808080', // Change inactive title color
        style: {
          backgroundColor: '#000000',
        },
        labelStyle: {
          marginBottom: 20, // Move label text up by 10 pixels
          fontWeight: 600,
          fontSize: 12,
        },
      }}
    >
      <BottomTab.Screen
        name="Links"
        component={LinksScreen}
        options={{
          title: 'Account',
        }}
      />
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Survey',
        }}
      />
      <BottomTab.Screen
        name="LineGraph"
        component={LineGraphScreen}
        options={{
          title: 'Data Vis',
        }}  
      />
      <BottomTab.Screen
        name="Share"
        component={MessengerScreen}
        options={{
          title: 'Share',
        }}
      />
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'Akuna';
    case 'Links':
      return 'Akuna';
    case 'LineGraph':
      return 'Akuna';
    case 'Share':
      return 'Akuna';
  }
}