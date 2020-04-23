import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  VrButton
} from 'react-360';
import SlideOne from './slideDeck/SlideOne';
import SlideTwo from "./slideDeck/SlideTwo";
import SlideThree from "./slideDeck/SlideThree";
import TitleSlide from "./slideDeck/TitleSlide";

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
          <View style={styles.greetingBox}>
            <Text>Quantum 360</Text>
            {(this.state.slide === 0) ? <TitleSlide/> : null}
            {(this.state.slide === 1) ? <SlideOne/> : null}
            {(this.state.slide === 2) ? <SlideTwo/> : null}
            {(this.state.slide === 3) ? <SlideThree/> : null}
            {(this.state.slide === 4) ? <SlideTwo/> : null}
            {(this.state.slide === 5) ? <SlideTwo/> : null}
          </View>

          {(this.state.slide === 3) ?
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
