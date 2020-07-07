import React from "react";
import { StyleSheet, Text, ScrollView, View } from "react-native";
import HomeScreen from "./components/home";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "@react-navigation/stack";
import ItemList from "./components/itemList";
import ItemShow from "./components/itemShow";
import firebaseConfig from "./firebaseConfig";
import * as firebase from "firebase";
import ShoppingCart from "./components/shoppingCart";
import ShoppingCartIcon from "./components/shoppingCartIcon";
import store from "./redux/reducers/store";
import { Provider } from "react-redux";
import NavBar from "./components/navBar";
import CustomCartIcon from "./components/customCartIcon";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Checkout from "./components/checkout";
import Payment from "./components/payment";
import Review from "./components/reviewOrder";

firebase.initializeApp(firebaseConfig);

// var storage = firebase.app("nickle-and-chance");
// var storageRef = storage.ref();

const Tab = createBottomTabNavigator();

function TabStack({ navigation, cartCount }) {
  return (
    <Tab.Navigator>
      <Tab.Screen name="MAIN" component={RootStack} />
      <Tab.Screen
        name="CART"
        component={CartStack}
        options={{
          tabBarIcon: () => {
            return <CustomCartIcon itemCount={cartCount} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function CartStack({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CART"
        navigation={navigation}
        component={ShoppingCart}
      />
      <Stack.Screen name="ADDRESS" component={Checkout} />
      <Stack.Screen name="PAYMENT" component={Payment} />
      <Stack.Screen name="REVIEW" component={Review} />
    </Stack.Navigator>
  );
}

function RootStack({ navigation }) {
  return (
    <Stack.Navigator navigation={navigation}>
      <Stack.Screen name="HOME" component={HomeScreen} />
      <Stack.Screen name="CATEGORY" component={ItemList} />
      <Stack.Screen name="ITEM_SHOW" component={ItemShow} />
      <Stack.Screen name="CART" component={ShoppingCart} />
    </Stack.Navigator>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <TabStack />
          {/* <NavStack /> */}
          {/* <NavBar nagivation={this.props.navigation} />
          <ShoppingCart /> */}
          {/* <RootStack /> */}
        </NavigationContainer>
      </Provider>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
