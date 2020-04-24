import React, {Component} from 'react';
import {
    StyleSheet,
    Text
} from 'react-360';

export default class SlideSeven extends Component {
    render() {
        return (
            <Text style={styles.greeting}>
                Questions for props{"\n"}
                {"\n"}Can you run React VR inside a react.js project?
                {"\n"}
                {"\n"}Can this talk and the next talk be combined?
                {"\n"}
                {"\n"}Can anyone pronounce this word? "Equirectangular"
            </Text>
        );
    }
};

const styles = StyleSheet.create({
    greeting: {
        fontSize: 25,
    },
});



