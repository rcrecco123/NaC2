import React from 'react';
import { View, Text } from 'react-native';

export default class WelcomeNote extends React.Component {
    render() {
        return (
            <View>
                <Text style={{ padding: 5, fontSize: 25, textAlign: 'center' }}>
                    Welcome to Nickle & Chance
                </Text>
            </View>
        )
    }
}