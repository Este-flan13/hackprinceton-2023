import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./app/screens/Login";
import LandingPage from "./app/screens/LandingPage";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Log In" component={Login} />
        <Stack.Screen name="Home" component={LandingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
