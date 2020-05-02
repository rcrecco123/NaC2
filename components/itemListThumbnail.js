import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

export default class ItemListThumbnail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.list}>
        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate("ITEM_SHOW", {
              itemObject: this.props.itemObject,
              name: this.props.itemName,
              item: this.props.item,
            })
          }
        >
          {/* <Image source={this.props.image} image={this.props.image} style={styles.image} resizeMode='contain'></Image> */}
          <Text style={styles.text}>{this.props.itemName} </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  list: {
    textAlign: "center",
    width: 174,
    height: 160,
    borderWidth: 1,
    borderRadius: 5,
    margin: 8,
  },
  text: {
    marginTop: 10,
    alignSelf: "center",
  },
  image: {
    alignContent: "center",
    alignSelf: "center",
    width: "70%",
    height: "70%",
    marginTop: 8,
  },
});
