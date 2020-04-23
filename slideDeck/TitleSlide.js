import React, {Component} from 'react';
import {
    StyleSheet,
    Text
} from 'react-360';

export default class TitleSlide extends Component {
    render() {
        return (
            <Text>
                Title
            </Text>
        );
    }
};

const styles = StyleSheet.create({
    greeting: {
        fontSize: 30,
    },
});
