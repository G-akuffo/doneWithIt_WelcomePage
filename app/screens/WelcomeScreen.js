import React from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo-red.png")} />
        <Text style={styles.text}>Sell What You Don't Need Anymore</Text>
      </View>
      <TouchableOpacity style={styles.loginButton}>
        <View style={styles.loginButton}>
          <Text style={styles.setColorWhite}>LOGIN</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginButton}>
        <View style={styles.registerButton}>
          <Text style={styles.setColorWhite}>REGISTER</Text>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#fc5c65",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: "#4ecdc4",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
  },

  setColorWhite: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default WelcomeScreen;
