import React from 'react';
import { View, Image } from 'react-native';

export default class Banner extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <View style={{ width: '100%', height: 300 }}>
                <Image source={require('../assets/womanmodelMAIN.jpeg')}
                    style={{ width: '100%', height: '100%', alignItems: 'center' }} />
            </View>
        )
    }

}