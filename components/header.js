import React from 'react';
import { Text, View, Image } from 'react-native';

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }


    render() {
        return (
            <View style={{
                width: '100%', marginLeft: '25%', height: 65, display: 'flex', flex: 1, marginTop: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'
            }}>
                <Image resizeMode="contain" source={require('../assets/nnc.png')} style={{ maxWidth: '6%', flex: 1, }} />
                <Text style={{ fontSize: 25, flex: 1, marginLeft: 8 }}>Nickle & Chance</Text>
            </ View >
        )
    }

}