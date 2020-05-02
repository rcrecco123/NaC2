import React from "react";
import { View, Text, Button } from "react-native";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { connect } from "react-redux";
import CartItem from "./cart/cartItem";

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: this.props.items,
    };
  }

  render() {
    const masterItems = this.props.items.map((item) => {
      return <CartItem item={item} />;
    });

    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Items</Text>
        <ScrollView style={{ width: "100%" }}>
          <View>{masterItems}</View>
        </ScrollView>

        <Button
          title="Checkout"
          onPress={() =>
            this.props.navigation.navigate("ADDRESS", {
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
    items: state.items,
  };
};

export default connect(mapStateToProps, null)(ShoppingCart);
