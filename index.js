import React from 'react';
import {
  AppRegistry, asset, Pano,
  StyleSheet,
  Text,
  View,
  VrButton,
  Environment
} from 'react-360';
import SlideOne from './slideDeck/SlideOne';
import SlideTwo from "./slideDeck/SlideTwo";
import SlideThree from "./slideDeck/SlideThree";
import TitleSlide from "./slideDeck/TitleSlide";
import SlideFour from "./slideDeck/SlideFour";
import SlideFive from "./slideDeck/SlideFive";
import SlideSix from "./slideDeck/SlideSix";
import SlideSeven from "./slideDeck/SlideSeven";
import SlideEight from "./slideDeck/SlideEight";
import SlideNine from "./slideDeck/SlideNine";
import SlideTen from "./slideDeck/SlideTen";
import SlideBackgroundOne from "./slideDeck/SlideBackgroundOne";
import SlideBackgroundTwo from "./slideDeck/SlideBackgroundTwo";
import SlideEleven from "./slideDeck/SlideEleven";

export default class quantum_vr extends React.Component {

  state = {
    slide: 0
  };

  previousSlide = () => {
    this.setState({
      slide: (this.state.slide -= 1)
    });
  };

  nextSlide = () => {
    this.setState({
      slide: (this.state.slide += 1)
    });
  };

  render() {
    return (
        // View is our "div"
        <View style={styles.panel}>

          {(this.state.slide === 4) ?
              <View style={styles.smallGreetingBox}>
                <Text style={styles.smallGreeting}>Header</Text>
              </View> : null }

          {/*<Pano source={asset("360_southern_sky.jpg")} />*/}
          <View style={styles.greetingBox}>
            <Text>Quantum 360</Text>
            {/*{(this.state.slide === 0) ? <TitleSlide/> : null}*/}
            {(this.state.slide === 1) ? <SlideOne/> : null}
            {(this.state.slide === 2) ? <SlideTwo/> : null}
            {(this.state.slide === 3) ? <SlideThree/> : null}
            {(this.state.slide === 4) ? <SlideFour/> : null}

            {(this.state.slide === 5) ? <SlideBackgroundOne/> : null}
            {(this.state.slide === 6) ? <SlideBackgroundTwo/> : null}

            {(this.state.slide === 7) ? <SlideFive/> : null}
            {(this.state.slide === 8) ? <SlideSix/> : null}
            {(this.state.slide === 9) ? <SlideSeven/> : null}
            {(this.state.slide === 10) ? <SlideEight/> : null}
            {(this.state.slide === 11) ? <SlideNine/> : null}
            {(this.state.slide === 12) ? <SlideTen/> : null}
            {(this.state.slide === 13) ? <SlideEleven/> : null}
          </View>

          {(this.state.slide === 5) ?
              Environment.setBackgroundImage(asset('360_southern_sky.jpg'), {
                format: '3DTB',
              }) : null }

          {(this.state.slide === 6) ?
              Environment.setBackgroundImage(asset('vr.jpg'), {
                format: '2D',
              }) : null }

          {(this.state.slide === 12) ?
              Environment.setBackgroundImage(asset('vr_1.jpg'), {
                format: '2D',
              }) : null }

          {(this.state.slide === 4) ?
          <View style={styles.smallGreetingBox}>
              <Text style={styles.smallGreeting}>Footer</Text>
          </View> : null }

          <VrButton onClick={this.previousSlide}>
            <Text style={styles.greeting}>Previous Slide</Text>
          </VrButton>
          <VrButton onClick={this.nextSlide}>
            <Text style={styles.greeting}>Next Slide</Text>
          </VrButton>
        </View>
    );
  }
};

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    width: 500,
    height: 400,
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  smallGreetingBox: {
    width: 500,
    height: 40,
    paddingLeft: 225,
    padding: 7,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 0,
  },
  smallGreeting: {
    fontSize: 20,
  },
  greeting: {
    fontSize: 30,
  },
});

AppRegistry.registerComponent('quantum_vr', () => quantum_vr);
