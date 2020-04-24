import React, {Component} from 'react';
import {
    StyleSheet,
    Text
} from 'react-360';

export default class SlideOne extends Component {
    render() {
        return (
            <Text style={styles.greeting}>
                What is React VR? {"\n"}
                {"\n"}React VR is similar react native, also known as Web VR / 360
                {"\n"}Uses View, Image, and Text as core components and supports Flexbox layouts.
                {"\n"}
                {"\n"}In addition, React VR adds VR components like Pano.
                {"\n"}Uses Three.js to support these APIS (WebVR and WebGL)
            </Text>
        );
    }
};

const styles = StyleSheet.create({
    greeting: {
        fontSize: 25,
    },
});
