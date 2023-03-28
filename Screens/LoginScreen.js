import { useState } from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  TextInput,
  View,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";

const LoginScreen = () => {
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPass, setIsFocusedPass] = useState(false);
  const [passDisplay, setPassDisplay] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passDisplayToggle = () => setPassDisplay((prevState) => !prevState);

  const onLogin = () => {
    if (email && password) {
      return console.log("email:", email, "password:", password);
    };
    Alert.alert("Please, fill in all fields!");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ImageBackground
        source={require("../assets/images/background_img_2x.jpg")}
        style={styles.bgImg}
      >
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "heigth"}
        >
          <View style={styles.container}>
            <Text style={styles.title}>Sign in</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                value={email}
                onChangeText={(value) => setEmail(value)}
                placeholder="Email"
                inputMode="email"
                style={[
                  styles.input,
                  isFocusedEmail && {
                    backgroundColor: "#FFF",
                    borderColor: "#FF6C00",
                  },
                ]}
                onBlur={() => setIsFocusedEmail(false)}
                onFocus={() => setIsFocusedEmail(true)}
              />
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                value={password}
                onChangeText={(value) => setPassword(value)}
                placeholder="Password"
                secureTextEntry={passDisplay}
                style={[
                  styles.input,
                  isFocusedPass && {
                    backgroundColor: "#FFF",
                    borderColor: "#FF6C00",
                  },
                ]}
                onBlur={() => setIsFocusedPass(false)}
                onFocus={() => setIsFocusedPass(true)}
              />
              <Pressable onPress={passDisplayToggle} style={styles.passDisplay}>
                <Text style={styles.passDisplayText}>
                  {passDisplay ? "Show" : "Hide"}
                </Text>
              </Pressable>
            </View>
            <Pressable
              onPress={onLogin}
              style={({ pressed }) => [
                { backgroundColor: pressed ? "#EA5700" : "#FF6C00" },
                styles.button,
              ]}
            >
              <Text style={styles.buttonTitle}>LogIn</Text>
            </Pressable>
            <View
              style={[
                styles.subscribe,
                { marginBottom: isFocusedEmail || isFocusedPass ? -130 : 110 },
              ]}
            >
              <Text style={styles.loginLink}>
                Don't have an account? Sign up
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  bgImg: {
    flex: 1,
    justifyContent: "flex-end",
    resizeMode: "cover",
  },
  container: {
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingHorizontal: 16,
    paddingVertical: 32,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    fontFamily: "Roboto-Regular",
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    fontWeight: "500",
    color: "#212121",
    marginBottom: 32,
  },
  inputWrapper: {
    position: "relative",
    width: "100%",
    height: 50,
    marginBottom: 16,
  },
  input: {
    width: "100%",
    height: "100%",
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 6,
    fontSize: 16,
    color: "#212121",
  },
  passDisplay: {
    position: "absolute",
    right: 4,
    padding: 12,
  },
  passDisplayText: {
    color: "#1B4371",
    fontSize: 16,
  },
  button: {
    width: "100%",
    alignItems: "center",
    marginTop: 27,
    marginBottom: 16,
    padding: 16,
    borderRadius: 25,
  },
  buttonTitle: {
    color: "#FFF",
  },
  subscribe: {
    flexDirection: "row",
    marginBottom: 110,
  },
  loginLink: {
    color: "#1B4371",
    fontSize: 16,
  },
});

export default LoginScreen;
