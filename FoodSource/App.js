import React from "react";
import { View, StyleSheet } from "react-native";
import Login from "./app/screens/Login";

const App = () => {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  // You can add other styles if needed
});

export default App;
