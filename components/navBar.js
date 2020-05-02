import React from "react";
import { Text, Button, View } from "react-native";
import { connect } from "react-redux";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cartCount: this.props.items,
    };
  }

  render() {
    return (
      <View style={{ marginTop: 40 }}>
        <Text>Cart Array Length: {this.props.count}</Text>
        <Text>ARR COUNT: {this.props.items}</Text>
        <Button
          title="check out"
          onPress={() => this.props.navigation.navigate("CART")}
        >
          Check Out
        </Button>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: 2,
    items: state.items.length,
  };
};

export default connect(mapStateToProps, null)(NavBar);
