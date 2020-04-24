import React, {Component} from 'react';
import {
    StyleSheet,
    Text
} from 'react-360';

export default class SlideBackgroundOne extends Component {
    render() {
        return (
            <Text style={styles.greeting}>
                {"\n"}{"\n"} You can easily introduce a change of scenery
            </Text>
        );
    }
};

const styles = StyleSheet.create({
    greeting: {
        fontSize: 30,
    },
});
