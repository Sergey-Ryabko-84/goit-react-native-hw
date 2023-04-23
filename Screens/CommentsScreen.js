import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const CommentsScreen = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Text>CommentsScreen</Text>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({});

export default CommentsScreen;
