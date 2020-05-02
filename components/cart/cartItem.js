import React from "react";
import { Text, View, Button } from "react-native";
import { connect } from "react-redux";

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={{ borderWidth: 1 }}>
        <Text>{this.props.item.name}</Text>
        <Text>{this.props.item.price}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
