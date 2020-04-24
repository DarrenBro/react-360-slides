import React, {Component} from 'react';
import {
    StyleSheet,
    Text
} from 'react-360';

export default class SlideBackgroundTwo extends Component {
    render() {
        return (
            <Text style={styles.greeting}>
                {"\n"}{"\n"}{"\n"}{"\n"}Create "World's within worlds"
            </Text>
        );
    }
};

const styles = StyleSheet.create({
    greeting: {
        fontSize: 30,
    },
});
