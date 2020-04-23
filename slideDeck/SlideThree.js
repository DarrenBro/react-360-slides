import React, {Component} from 'react';
import {
    StyleSheet,
    Text
} from 'react-360';

export default class SlideOne extends Component {
    render() {
        return (
            <Text style={styles.greeting}>
                Some Gotchas {"\n"}
                {"\n"} You add extra views to make them behave more like a ui
                {"\n"} e.g. footers
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
