import React, {Component} from 'react';
import {
    StyleSheet,
    Text
} from 'react-360';

export default class SlideFive extends Component {
    render() {
        return (
            <Text style={styles.greeting}>
                Some Gotchas {"\n"}
                {"\n"}Do not run ’npm audit fix’
                {"\n"}Keep "react-native”
                {"\n"}
                {"\n"}keep package >0.57
                {"\n"}
                {"\n"}Got issue "Cannot find module 'metro/src/blacklist”
            </Text>
        );
    }
};

const styles = StyleSheet.create({
    greeting: {
        fontSize: 28,
    },
});
