import React from "react";
import { Text, View, ScrollableView, Button } from "react-native";
import { connect } from "react-redux";
import { TextInput, Switch } from "react-native-gesture-handler";

class AddressComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View>
        <Text>SHIPPING ADDRESS</Text>
        <TextInput placeholder="Name" />
        <TextInput placeholder="Address" />
        <TextInput placeholder="State" />
        <TextInput placeholder="Zip" />

        <Text>BILLING ADDRESS</Text>
        <TextInput placeholder="Name" />
        <TextInput placeholder="Address" />
        <TextInput placeholder="State" />
        <TextInput placeholder="Zip" />

        <Button
          title="Next"
          onPress={() =>
            this.props.navigation.navigate("PAYMENT", {
              navigation: this.props.navigation,
            })
          }
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(AddressComponent);
