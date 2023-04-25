import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import User_small from "../assets/images/User_small.png";

const PostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((state) => [...state, route.params]);
    }
  }, [route.params]);

  // console.log(posts);

  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image source={User_small} />
        <View style={styles.userSignature}>
          <Text style={styles.userName}>Name</Text>
          <Text style={styles.userEmail}>Email</Text>
        </View>
      </View>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <View style={styles.imgContainer}>
              <Image style={styles.img} source={{ uri: item.photo }} />
            </View>
            <Text style={styles.caption}>{item.caption}</Text>
            <View style={styles.signatureContainer}>
              <Pressable
                style={styles.commentsContainer}
                onPress={() => navigation.navigate("Comments")}
              >
                <MaterialCommunityIcons
                  name="comment-outline"
                  color="#BDBDBD"
                  size={24}
                />
                <Text style={styles.commentsCount}>0</Text>
              </Pressable>
              <Pressable style={styles.likesContainer}>
                <AntDesign name="like2" color="#BDBDBD" size={24} />
                <Text style={styles.likesCount}>0</Text>
              </Pressable>
              <Pressable
                style={styles.locationContainer}
                onPress={() => navigation.navigate("Map", item.location)}
              >
                <SimpleLineIcons
                  name="location-pin"
                  color="#BDBDBD"
                  size={24}
                />
                <Text style={styles.locationName}>{item.locationName}</Text>
              </Pressable>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  userContainer: {
    flex: 0,
    flexDirection: "row",
    gap: 8,
    height: 60,
    marginBottom: 32,
  },
  userSignature: {
    justifyContent: "center",
  },
  userName: {
    fontSize: 13,
    fontWeight: 700,
    color: "#212121",
  },
  userEmail: {
    fontSize: 11,
    color: "#212121CC",
  },
  postContainer: {
    height: 300,
    marginBottom: 32,
  },
  imgContainer: {
    justifyContent: "center",
    width: "100%",
    height: 240,
    borderRadius: 8,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
  },
  caption: {
    marginVertical: 8,
    fontSize: 16,
    fontWeight: 500,
    color: "#212121",
  },
  signatureContainer: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 24,
  },
  commentsContainer: {
    flex: 0,
    flexDirection: "row",
  },
  commentsCount: {
    marginLeft: 6,
    fontSize: 16,
    color: "#BDBDBD",
  },
  likesContainer: {
    flex: 0,
    flexDirection: "row",
  },
  likesCount: {
    marginLeft: 6,
    fontSize: 16,
    color: "#BDBDBD",
  },
  locationContainer: {
    flex: 0,
    flexDirection: "row",
    gap: 4,
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  locationName: {
    fontSize: 16,
    fontWeight: 500,
    color: "#212121",
    textDecorationLine: "underline",
  },
});

export default PostsScreen;
