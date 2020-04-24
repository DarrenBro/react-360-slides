import React, {Component} from 'react';
import {
    StyleSheet,
    Text
} from 'react-360';

export default class SlideTwo extends Component {
    render() {
        return (
            <Text style={styles.greeting}>
                {"\n"}'Full experience' needs a virtual machine
                {"\n"}e.g. to make use of an Oculus Rift {"\n"}
                {"\n"}'Carmel Developer Preview browser' to explore your React VR app
                {"\n"}via Gear VR headset
                {"\n"}Atm I've been using the local browser
            </Text>
        );
    }
};

const styles = StyleSheet.create({
    greeting: {
        fontSize: 30,
    },
});
