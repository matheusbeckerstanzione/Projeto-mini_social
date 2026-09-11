import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import NewPostScreen from '../screens/NewPostScreen';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Navegação principal em abas com a tela Criar inclusa */}
        <Stack.Screen name="MainTabs" component={TabNavigator} />

        {/* Modal de Nova Publicação (caso queira abrir sobreposto de qualquer lugar) */}
        <Stack.Screen
          name="NewPostModal"
          component={NewPostScreen}
          options={{
            presentation: 'modal',
            animation: 'slide_from_bottom',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
