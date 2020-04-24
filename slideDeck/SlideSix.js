import React, {Component} from 'react';
import {
    StyleSheet,
    Text
} from 'react-360';

export default class SlideSix extends Component {
    render() {
        return (
            <Text style={styles.greeting}>
                Further Ideas {"\n"}
                {"\n"} LiveTourLab is a framework for creating Live VR tours
                {"\n"}It has predefined components that enable navigation,
                preloading, blending photography and so much more.
                Json text file defines interactivity
                {"\n"}

                {"\n"} Maybe an office tour if you're feeling 'homesick'
            </Text>
        );
    }
};

const styles = StyleSheet.create({
    greeting: {
        fontSize: 28,
    },
});
