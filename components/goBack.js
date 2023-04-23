import { Pressable } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const GoBack = ({ navigation }) => {
  return (
    <Pressable onPress={() => navigation.goBack()}>
      <AntDesign
        style={{ marginHorizontal: 16 }}
        name={"arrowleft"}
        color={"#212121cc"}
        size={24}
      />
    </Pressable>
  );
};

export default GoBack;
