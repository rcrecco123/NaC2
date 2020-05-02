import React from "react";
import { Text, View, Button, Badge } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { connect } from "react-redux";

class CustomCartIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCount: null,
    };
  }

  componentDidMount() {
    this.setState({
      cartCount: this.props.cartCount,
    });
  }

  render() {
    return (
      <View style={{ marginRight: 100 }}>
        <Text>{this.props.cartCount}</Text>
        <MaterialCommunityIcons name="cart" />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartCount: state.items.length,
  };
};

export default connect(mapStateToProps, null)(CustomCartIcon);
