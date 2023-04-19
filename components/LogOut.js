import { StyleSheet, Pressable } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const LogOut = () => {
  return (
    <Pressable onPress={() => alert("Log Out")}>
      <MaterialIcons
        style={styles.icon}
        name="logout"
        size={24}
        color="#BDBDBD"
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginRight: 16,
    padding: 4,
  },
});

export default LogOut;
