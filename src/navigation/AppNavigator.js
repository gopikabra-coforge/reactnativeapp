import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '@/constants';
import { Home } from '@/screens';

const Stack = createNativeStackNavigator();

export function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Home} name={NAVIGATION.login} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
