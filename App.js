import React, {Component, Fragment} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableHighlight
} from 'react-native';
import Video from 'react-native-video';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';


const videoURL = 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_5mb.mp4';
const audioURL = 'https://sample-videos.com/audio/mp3/wave.mp3';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mediaType: 'audio',
      muted: false,
      paused: true,
      rate: 1,
      volume: 1,
    }
  }

  render() {
    return (
      <Fragment>
        <Video
          audioOnly={true}
          source={{uri: this.state.mediaType === 'video' ? videoURL : audioURL }}
          ref={(ref) => {
            this.player = ref
          }}
          onBuffer={() => {}}
          onError={() => {}}
          paused={this.state.paused}
          poster='https://sample-videos.com/img/Sample-jpg-image-1mb.jpg'
          style={styles.video}
          rate={this.state.rate}
          volume={this.state.volume}
          muted={this.state.muted}
          resizeMode='contain'
          onProgress={() => {}}
          onLoad={() => {}}
          onEnd={() => {}}
          playInBackground={true}
          playWhenInactive={true}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <TouchableHighlight onPress={() => { this.setState({ paused: !this.state.paused }) }} style={{width: '100%', height: '100%'}} >
              <Text>Play/Pause Media</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.button}>
            <TouchableHighlight onPress={() => { this.setState({ mediaType: 'video' }) }} style={{width: '100%', height: '100%'}} >
              <Text>Video</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.button}>
            <TouchableHighlight onPress={() => { this.setState({ mediaType: 'audio' }) }} style={{width: '100%', height: '100%'}} >
              <Text>Audio</Text>
            </TouchableHighlight>
          </View>
          <View style={styles.button}>
            <TouchableHighlight onPress={() => { console.log("seek button")}} style={{width: '100%', height: '100%'}} >
              <Text>Seek 5s</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Fragment>
    );
  };
};

const styles = StyleSheet.create({
  video: {
    top: 0,
    left: 0,
    height: '50%',
    backgroundColor: '#333'
  },
  button: {
    backgroundColor: '#888',
    height: '20%',
    width: '20%'
  },
  buttonContainer: {
    justifyContent: 'space-evenly',
    flex: 1,
    flexDirection: 'row',
  }
});

export default App;
