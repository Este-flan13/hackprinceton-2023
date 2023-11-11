import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Picker,
} from "react-native";
import { useForm, Controller } from "react-hook-form";

const Login = () => {
  const { control, handleSubmit, errors } = useForm();
  const [selectedRole, setSelectedRole] = useState("customer");

  const onSubmit = (data) => {
    data.role = selectedRole;
    console.log(data);

    // Here you would typically send data to your backend service
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <Text style={styles.label}>Email</Text>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            keyboardType="email-address"
          />
        )}
        name="email"
        rules={{ required: true }}
        defaultValue=""
      />
      {/* {errors.email && (
        <Text style={styles.error}>This field is required.</Text>
      )} */}

      <Text style={styles.label}>Password</Text>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            secureTextEntry
          />
        )}
        name="password"
        rules={{ required: true }}
        defaultValue=""
      />
      {/* {errors.password && (
        <Text style={styles.error}>This field is required.</Text>
      )} */}

      <Text style={styles.label}>Role</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedRole}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedRole(itemValue)}
        >
          <Picker.Item label="Consumer" value="consumer" />
          <Picker.Item label="Inspector" value="inspector" />
          <Picker.Item label="Processor" value="processor" />
          <Picker.Item label="Distributor" value="distributor" />
          <Picker.Item label="Retailer" value="retailer" />
        </Picker>
      </View>

      <Button title="Submit" onPress={handleSubmit(onSubmit)} color="#4CAF50" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#4CAF50",
    textAlign: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#4CAF50",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  pickerContainer: {
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
  },
  picker: {
    height: 40,
  },
});

export default Login;
