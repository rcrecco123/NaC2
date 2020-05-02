import React from "react";
import { connect } from "react-redux";
import { Text, View, ScrollableView, Button, TextInput } from "react-native";
import { CheckBox } from "react-native-elements";

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creditCard: false,
      debitCard: false,
    };
  }
  render() {
    return (
      <View>
        <Text>Payment</Text>
        {this.state.debitCard ? null : (
          <CheckBox
            title="Credit card"
            checked={this.state.creditCard}
            onPress={() => {
              this.setState({
                creditCard: !this.state.creditCard,
              });
            }}
          />
        )}
        {this.state.creditCard ? null : (
          <CheckBox
            title="Debit card"
            checked={this.state.debitCard}
            onPress={() => {
              this.setState({
                debitCard: !this.state.debitCard,
              });
            }}
          />
        )}
        <View>
          {!this.state.creditCard && !this.state.debitCard ? null : (
            <View>
              <TextInput placeholder="Card name" />
              <TextInput placeholder="Card number" />
              <TextInput placeholder="Expiration" />
              <TextInput placeholder="CVC" />
              <Button
                title="Review Order"
                onPress={() =>
                  this.props.navigation.navigate("REVIEW", {
                    navigation: this.props.navigation,
                  })
                }
              />
            </View>
          )}
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps, null)(Payment);
