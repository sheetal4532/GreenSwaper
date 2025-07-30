import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { MyColors } from "./../Utils/MyColors";
import { useNavigation } from "@react-navigation/native";

const Splash = ({ navigation }) => {
  const nav = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      nav.replace("Login");
    }, 5000);
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.contentContainer}>
        <Text style={styles.welcomeText}>Welcome to</Text>
        <Text style={styles.appTitle}>Green Swaper</Text>
        {/* <Text style={styles.subtitle}>We make it for you</Text> */}

        <Image
          style={styles.logo}
          source={require("../assets/logo.png")}
          resizeMode="contain"
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.signUpButton]}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.signUpButtonText}>SIGN UP</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.signInButton]}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.signInButtonText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MyColors.primary,
    justifyContent: "center",
    padding: 20,
  },
  contentContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  welcomeText: {
    color: MyColors.lightText,
    fontSize: 18,
    fontFamily: "Poppins-Regular",
    marginBottom: 0,
    marginTop: 35,
  },
  appTitle: {
    color: MyColors.lightText,
    fontSize: 35,
    fontFamily: "Poppins-SemiBold",
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: { width: 0, height: 4 },
    // textShadowRadius: 4,
    marginBottom: 5,
  },
  subtitle: {
    color: MyColors.lightText,
    fontSize: 15,
    fontFamily: "Poppins-Regular",
    marginBottom: 30,
  },
  logo: {
    height: 395,
    width: 395,
    marginVertical: 0,
  },
  buttonContainer: {
    width: "100%",
    paddingHorizontal: 7,
  },
  button: {
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  signUpButton: {
    backgroundColor: MyColors.lightText,
  },
  signInButton: {
    borderWidth: 1,
    borderColor: MyColors.lightText,
  },
  signUpButtonText: {
    color: MyColors.primary,
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
  },
  signInButtonText: {
    color: MyColors.lightText,
    fontFamily: "Poppins-semiBold",
    fontSize: 16,
  },
});

export default Splash;
