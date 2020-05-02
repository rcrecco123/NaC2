import React from "react";
import { Text, View } from "react-native";
import Banner from "./banner";
import SplashItemList from "./splashItemList";
import Header from "./header";
import WelcomeNote from "./welcomeNote";
import { ScrollView } from "react-native-gesture-handler";

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView navigation={this.props.navigation.navigate}>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>

          <Header />
          <Banner />
          <WelcomeNote />
          <SplashItemList navigation={this.props.navigation} />

          <Text></Text>
        </ScrollView>
      </View>
    );
  }
}
