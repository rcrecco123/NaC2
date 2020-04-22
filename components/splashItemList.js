import React from 'react';
import { ScrollView, View, Text, Button, Image, StyleSheet } from 'react-native';
import CustomImage from './customImage';


export default class SplashItemList extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', padding: 5 }}>

                <View style={styles.col2}>
                    <CustomImage imageSource={require('../assets/textile.jpeg')} header="men's accessories" />
                </View>

                <View style={styles.col1}>
                    <CustomImage imageSource={require('../assets/maniquen.jpeg')} header="woman's accessories" />
                </View>

                <View style={styles.contentBanner} >
                    <CustomImage imageSource={require('../assets/designer1.jpg')} header="woman's clothing" />
                </View>

                <View style={styles.col1} >
                    <CustomImage imageSource={require('../assets/manmodel1.jpg')} header="men's clothing" />
                </View>
                <View style={styles.col2} >
                    <CustomImage imageSource={require('../assets/shoes.png')} header="shoes" />
                </View>

            </View >
        )
    }

}

const styles = StyleSheet.create({
    col1: {
        flex: 1,
        padding: 5,
        height: 50
    },
    col2: {
        flex: 2,
        padding: 5
    },
    contentBanner: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    }
})