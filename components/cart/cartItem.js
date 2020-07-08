import React from "react";
import { Text, View, Button, Image, StyleSheet } from "react-native";
import { connect } from "react-redux";

class CartItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    debugger;
    return (
      <View
        style={{
          borderWidth: 1,
          flexDirection: "row",
          justifyContent: "space-evenly",
          height: 65,
        }}
      >
        <Image
          style={styles.image}
          source={require("../../assets/cart2.png")}
        />
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

const styles = StyleSheet.create({
  image: {
    marginRight: 75,
    marginTop: 6,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 10,
  },
});
