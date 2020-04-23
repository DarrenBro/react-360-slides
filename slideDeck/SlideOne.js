import React, {Component} from 'react';
import {
    StyleSheet,
    Text
} from 'react-360';

export default class SlideOne extends Component {
    render() {
        return (
            <Text style={styles.greeting}>
                How to get started; {"\n"}
                {"\n"} $ react-360 init hello-vr
                {"\n"} $ cd hello-vr
                {"\n"} $ npm start
            </Text>
        );
    }
};

const styles = StyleSheet.create({
    greeting: {
        fontSize: 30,
    },
});
