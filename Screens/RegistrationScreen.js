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

const RegistrationScreen = () => {
  const [isFocusedLogin, setIsFocusedLogin] = useState(false);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPass, setIsFocusedPass] = useState(false);
  const [passDisplay, setPassDisplay] = useState(true);
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const passDisplayToggle = () => setPassDisplay((prevState) => !prevState);

  const onLogin = () => {
    if (login && email && password) {
      return console.log("login", login, "email:", email, "password:", password);
    }
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
            <View style={styles.fotoWrapper}>
              <Pressable style={styles.fotoBtn}>
                <View style={styles.fotoBtnIconV}></View>
                <View style={styles.fotoBtnIconH}></View>
              </Pressable>
            </View>
            <Text style={styles.title}>Sign up</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                value={login}
                onChangeText={(value) => setLogin(value)}
                placeholder="Login"
                style={[
                  styles.input,
                  isFocusedLogin && {
                    backgroundColor: "#FFF",
                    borderColor: "#FF6C00",
                  },
                ]}
                onBlur={() => setIsFocusedLogin(false)}
                onFocus={() => setIsFocusedLogin(true)}
              />
            </View>
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
              <Text style={styles.buttonTitle}>Sign up</Text>
            </Pressable>
            <View
              style={[
                styles.subscribe,
                {
                  marginBottom:
                    isFocusedLogin || isFocusedEmail || isFocusedPass
                      ? -130
                      : 45,
                },
              ]}
            >
              <Text style={styles.loginLink}>
                Already have an account? Sign in
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
    position: "relative",
    alignItems: "center",
    backgroundColor: "#FFF",
    paddingHorizontal: 16,
    paddingTop: 92,
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
    // fontFamily: "Roboto-Regular",
  },
  fotoWrapper: {
    position: "absolute",
    top: -60,
    width: 120,
    height: 120,
    borderRadius: 16,
    backgroundColor: "#F6F6F6",
  },
  fotoBtn: {
    position: "absolute",
    bottom: 14,
    right: -12.5,
    width: 25,
    height: 25,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12.5,
    borderWidth: 1,
    borderColor: "#FF6C00",
  },
  fotoBtnIconV: {
    position: "absolute",
    width: 13,
    height: 1.5,
    backgroundColor: "#FF6C00",
  },
  fotoBtnIconH: {
    position: "absolute",
    width: 1.5,
    height: 13,
    backgroundColor: "#FF6C00",
  },
  title: {
    // fontFamily: "Roboto-Medium",
    fontSize: 30,
    // fontWeight: 500,
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

export default RegistrationScreen;
