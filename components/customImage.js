import React from "react";
import { StyleSheet, Image, ImageBackground } from "react-native";
import ImageOverlayText from "./imageOverlayText";

export default class CustomImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <ImageBackground source={this.props.imageSource} style={styles.image}>
        <ImageOverlayText
          header={this.props.header}
          navigation={this.props.navigation}
          body={this.props.body}
        />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 10,
  },
});
