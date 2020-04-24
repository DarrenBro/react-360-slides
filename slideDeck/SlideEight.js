import React, {Component} from 'react';
import {
    StyleSheet,
    Text
} from 'react-360';

export default class SlideEight extends Component {
    render() {
        return (
            <Text style={styles.greeting}>
                Can you run a React VR app inside an existing react.js app? {"\n"}
                {"\n"}Q1 - No
                {"\n"}
            </Text>
        );
    }
};

const styles = StyleSheet.create({
    greeting: {
        fontSize: 30,
    },
});



