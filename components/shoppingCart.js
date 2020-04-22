import React from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { connect } from "react-redux";

class ShoppingCart extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            items: []
        }
    }

    render() {

        let masterItems = this.state.items.map(item => {

            <Text>{item.name}</Text>

        })

        return (
            <View>
                <Text>
                    Items
                </Text>

                {masterItems}

            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.items
    }
}

export default connect(mapStateToProps, null)(ShoppingCart);

