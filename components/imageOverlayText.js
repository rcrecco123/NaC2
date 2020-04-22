import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation' //this gives my component access to this.props.navigation.navigate

class ImageOverlayText extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {

        let header = this.props.header ?
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Category', { item: this.props.header, })}>
                <Text style={styles.header}
                >{this.props.header}</Text>
            </TouchableOpacity>
            : null;

        let body = this.props.body ?
            <Text>{this.props.body}</Text>
            : null;

        return (
            <View>
                {header}
                {body}
            </View>
        )
    }
}

export default withNavigation(ImageOverlayText);

const styles = StyleSheet.create({
    header: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 3,
        elevation: 1,

        alignSelf: 'center',
        fontSize: 18,
        textAlign: 'center',
        padding: 10,
        backgroundColor: 'rgba(255,255,255,0.6)',
        fontWeight: 'bold'
    },
    body: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.6,
        shadowRadius: 3,
        elevation: 1,

        alignSelf: 'center',
        fontSize: 16,
        fontStyle: 'italic',
        textAlign: 'center',
        padding: 8,
        marginTop: 8,
        backgroundColor: 'rgba(255,255,255,0.6)',
    }
})