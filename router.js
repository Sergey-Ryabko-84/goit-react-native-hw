import { createStackNavigator } from "@react-navigation/stack";
import { useSelector } from "react-redux";
import LoginScreen from "./screens/LoginScreen";
import RegistrationScreen from "./screens/RegistrationScreen";
import Home from "./screens/Home";
import CommentsScreen from "./screens/CommentsScreen";
import MapScreen from "./screens/MapScreen";
import { selectAuth } from "./redux/auth/authSelectors";

const Stack = createStackNavigator();

const Router = () => {
  const { isLogedIn } = useSelector(selectAuth);
  const auth = useSelector(selectAuth);
  console.log(auth);

  if (!isLogedIn) {
    return (
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Comments" component={CommentsScreen} />
        <Stack.Screen name="Map" component={MapScreen} />
      </Stack.Navigator>
    );
  }
};

export default Router;
