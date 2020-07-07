import React from "react";
import { Text, View, Button, Image } from "react-native";
import { connect } from "react-redux";

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    debugger;
    return (
      <View style={{ borderWidth: 1 }}>
        {/* <Image source={require(this.props.item.image)} /> */}
        <Text>{this.props.item.name}</Text>
        <Text>{this.props.item.price}</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // items: state.items,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
