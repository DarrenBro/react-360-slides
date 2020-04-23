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
                {"\n"} Do not run ’npm audit fix’
                {"\n"} Keep "react-native” keep package >0.57
                {"\n"} Got issue "Cannot find module 'metro/src/blacklist”

                {/*<div>*/}
                {/*    They’ve renamed the container folder for metro but ‘fix' caused other issues*/}
                {/*    https://github.com/facebook/react-360/issues/721*/}
                {/*    https://github.com/facebook/react-native/issues/21093*/}
                {/*</div>*/}
            </Text>
        );
    }
};

const styles = StyleSheet.create({
    greeting: {
        fontSize: 30,
    },
});
