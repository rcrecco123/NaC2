import React from "react";
import { Text, View, Button, TextInput } from "react-native";
import { connect } from "react-redux";

class ReviewOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      addressName: "Little Buppy",
      address: "15 Funny Guy Lane",
      zipCode: "12112",
      billingAddress: "15 Funny Guy Lane",
      zipCode: "12112",
    };
  }

  render() {
    return (
      <View>
        <Text>Items</Text>
        <Text>"ITEMS GO HERE!"</Text>

        <Text>Shipping address</Text>
        <Text>{this.state.addressName}</Text>
        <Text>{this.state.address}</Text>
        <Text>{this.state.zipCode}</Text>
        <Button title="Process Order" />
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

export default connect(mapStateToProps, mapDispatchToProps)(ReviewOrder);
