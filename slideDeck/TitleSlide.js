import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    View,
    Pano,
    asset,
    Text
} from 'react-360';

export default class TitleSlide extends Component {
    render() {
        return (
            <View>
                <Text>Quantum 360</Text>
                <Image source={asset('vr.jpg')} />
                {/*<Pano source={asset("360_southern_sky.jpg")} />*/}
            </View>
        );
    }
};

const styles = StyleSheet.create({
    greeting: {
        fontSize: 30,
    },
});
