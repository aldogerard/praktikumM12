import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import login from "./page/login";
import front from "./page/front";

// menginisialisasi data screen
const screens = {
  LoginScreen: {
    screen: login,
  },
};

const App = createStackNavigator(
  screens,
  {
    defaultNavigationOptions: {
      headerShown: false, //menghilangkan Header
      headerStyle: {
        backgroundColor: "#fff",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        textAlign: "center",
        fontWeight: "bold",
      },
    },
  },
  { initialRouteName: "LoginScreen" } //screen awal yaitu loginScreen
);

const RootNavigator = createSwitchNavigator(
  {
    App: App,
    Splash: front,
  },
  {
    initialRouteName: "Splash",
  }
);

export default createAppContainer(RootNavigator);
