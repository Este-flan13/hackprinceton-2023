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
import firestore from "@react-native-firebase/firestore";
import { FIREBASE_AUTH } from "../../Firebase.Config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState("");
  const auth = FIREBASE_AUTH;

  const { control, handleSubmit, errors } = useForm();

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error) {
      console.log(error);
      alert("Sign in failed: " + error.message);
    } finally {
      setLoading(false);
      console.log("Signed in.");
    }
  };

  const signUp = async () => {
    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(response);
      const userId = response.user.uid;
      firestore().collection("users").doc(userId).set({
        email: email,
        userType: role,
      });
      console.log("User registered with Firestore");
    } catch (error) {
      console.log(error);
      alert("Sign up failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>

      <Text style={styles.label}>Email</Text>
      <Controller
        control={control}
        render={({ onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => setEmail(value)}
            value={value}
            keyboardType="email-address"
          />
        )}
        name="email"
        rules={{ required: true }}
        defaultValue=""
      />

      <Text style={styles.label}>Password</Text>
      <Controller
        control={control}
        render={({ onBlur, value }) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={(value) => setPassword(value)}
            value={value}
            secureTextEntry
          />
        )}
        name="password"
        rules={{ required: true }}
        defaultValue=""
      />

      <Text style={styles.label}>Role</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={role}
          style={styles.picker}
          onValueChange={(value) => setRole(value)}
        >
          <Picker.Item label="Consumer" value="consumer" />
          <Picker.Item label="Inspector" value="inspector" />
          <Picker.Item label="Processor" value="processor" />
          <Picker.Item label="Distributor" value="distributor" />
          <Picker.Item label="Retailer" value="retailer" />
        </Picker>
      </View>

      <Button title="Login" onPress={signIn} color="#4CAF50" />
      <Button title="Create account" onPress={signUp} color="#4CAF50" />
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
