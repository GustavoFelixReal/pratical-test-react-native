import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from "expo-status-bar";
import React from "react";

import Home from "./screens/home/index";
import Books from "./screens/books/index";
import BookDescription from './screens/book-description';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: 'Bookshelf' }}/>
        <Stack.Screen name="Books" component={Books} options={{ title: 'Categoria' }}/>
        <Stack.Screen name="BookDescription" component={BookDescription} options={{ title: 'Livro' }}/>
      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}