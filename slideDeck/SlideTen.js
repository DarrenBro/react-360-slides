import React, {Component} from 'react';
import {
    StyleSheet,
    Text
} from 'react-360';

export default class SlideTen extends Component {
    render() {
        return (
            <Text style={styles.greeting}>
                Equirectangular {"\n"}
                {"\n"}ee-quee-rectangular
                {"\n"}An equirectangular pano consists of a single image with an aspect ratio of 2:1,
                {"\n"}meaning that the width must be twice the height.
                {"\n"}
                {"\n"}These images are created with a special 360 camera.
            </Text>
        );
    }
};

const styles = StyleSheet.create({
    greeting: {
        fontSize: 26,
    },
});



