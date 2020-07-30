import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MenuItemScreen from '../screens/MenuItemScreen';
import CartScreen from '../screens/CartScreen';

const Stack = createStackNavigator();

const Navigations = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="MainScreen" component={MenuItemScreen} />
                <Stack.Screen name="CartScreen" component={CartScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigations;