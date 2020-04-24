import React, {Component} from 'react';
import {
    StyleSheet,
    Text
} from 'react-360';

export default class SlideNine extends Component {
    render() {
        return (
            <Text style={styles.greeting}>
                Can this talk and the next talk be combined?
                {"\n"}
                {"\n"}Apparently so! =>() react-vr-graphql"
                {"\n"}A startup that offers GraphQL back-end as a service
                {"\n"}
                {"\n"}Facilitates building VR applications with React Native and GraphQL
            </Text>
        );
    }
};

const styles = StyleSheet.create({
    greeting: {
        fontSize: 28,
    },
});



