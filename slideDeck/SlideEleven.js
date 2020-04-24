import React, {Component} from 'react';
import {
    StyleSheet,
    Text
} from 'react-360';

export default class SlideTen extends Component {
    render() {
        return (
            <Text style={styles.greeting}>
                Let's look at some code and running apps!{"\n"}
                {"\n"}Chessland - Pillars for your companies needs.
                {"\n"}
                {"\n"}Space - Can you see your house?
                {"\n"}Tempted to show the spread of the virus
            </Text>
        );
    }
};

const styles = StyleSheet.create({
    greeting: {
        fontSize: 30,
    },
});



