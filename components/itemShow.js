import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import { ScrollView } from "react-native";
import { Picker } from "@react-native-community/picker";
import RNPickerSelect from "react-native-picker-select";
import { connect } from "react-redux";
import { addItem } from "../redux/actions/cart";
import * as firebase from "firebase";

class itemShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      size: "",
      price: this.props.route.params.itemObject.price,
    };
  }

  componentDidMount() {}

  render() {
    return (
      <ScrollView style={{ height: 100, borderWidth: 1, padding: 25 }}>
        <View style={styles.main}>
          <Text style={{ padding: 7, fontSize: 25 }}>
            {this.props.route.params.name}
          </Text>
          <Image
            source={require("../assets/clothingitem1.jpeg")}
            resizeMode="contain"
            style={styles.image}
          />
          <Text>{this.state.price}</Text>
          <RNPickerSelect
            onValueChange={(value) =>
              this.setState({
                size: value,
              })
            }
            placeholder={{ label: "select a size" }}
            items={[
              { label: "s", value: "small" },
              { label: "m", value: "medium" },
              { label: "l", value: "large" },
              { label: "xl", value: "extra large" },
            ]}
          />

          <Button
            title="add to cart"
            onPress={() =>
              this.props.addItem(this.props.route.params.itemObject)
            }
          />
        </View>

        {/* <RelatedProducts /> */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    borderWidth: 2,
    alignItems: "center",
    height: 400,
  },
  image: {
    height: 300,
    width: 300,
  },
});

const mapStateToProps = (state) => {
  return {};
};

//I am trying to add an item to my store by dispatching this action. I can't seem to
//figure out what the issue is.

//BUG ISSUE ERROR

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: (item) => dispatch(addItem(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(itemShow);
