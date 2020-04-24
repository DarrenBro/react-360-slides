import React, {Component} from 'react';
import {
    StyleSheet,
    Text
} from 'react-360';

export default class SlideOne extends Component {
    render() {
        return (
            <Text style={styles.greeting}>
                {"\n"}
                {"\n"} You add extra views to make them behave more like a ui
                {"\n"}
                {"\n"} e.g. Footers / Headers
                {"\n"}
                {"\n"}They behave just like these main slides but style sized down
            </Text>
        );
    }
};

const styles = StyleSheet.create({
    greeting: {
        fontSize: 30,
    },
});
