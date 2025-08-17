import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Colors, Typography } from '../constants/tokens';

import GroupDiscoveryScreen from '../screens/GroupDiscoveryScreen';
import CreateGroupScreen from '../screens/CreateGroupScreen';
import OrdersScreen from '../screens/OrdersScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: Colors.primary[500],
        tabBarInactiveTintColor: Colors.neutral[500],
        tabBarStyle: {
          backgroundColor: Colors.neutral[0],
          borderTopColor: Colors.neutral[300],
        },
        headerStyle: {
          backgroundColor: Colors.neutral[0],
          borderBottomColor: Colors.neutral[300],
        },
        headerTitleStyle: {
          fontSize: Typography.fontSize.h2,
          fontWeight: Typography.fontWeight.semibold,
          color: Colors.neutral[900],
        },
      }}
    >
      <Tab.Screen name="Groups" component={GroupDiscoveryScreen} options={{ title: 'Available Groups' }} />
      <Tab.Screen name="Create" component={CreateGroupScreen} options={{ title: 'Create Group' }} />
      <Tab.Screen name="Orders" component={OrdersScreen} options={{ title: 'My Orders' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
    </Tab.Navigator>
  );
};

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Main" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};