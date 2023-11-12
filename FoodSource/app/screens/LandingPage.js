import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const LandingPage = ({ navigation }) => {
  const handleScanItem = () => {
    // TODO: Handle the scanning logic or navigate to the scanning page
    navigation.navigate("Scan");
  };

  return (
    <View style={styles.container}>
      <Button title="Scan Item" onPress={handleScanItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  // Add more styles if needed
});

export default LandingPage;
