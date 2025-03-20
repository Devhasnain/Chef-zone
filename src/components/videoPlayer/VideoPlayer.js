import { Dimensions, View, TouchableOpacity, SafeAreaView } from 'react-native';
// import React from 'react';
import React, { useState, useCallback, useRef } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import YoutubePlayer from 'react-native-youtube-iframe';


export const Player = ({navigation, route}) => {
  const height = Dimensions.get('screen').height;
  const top = height / 3;
  const video_data = route.params.data;
  const [playing, setPlaying] = useState(true);
  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
    }
  }, []);
  return (
    <SafeAreaView
      style={{
        minHeight: height / 3,
        backgroundColor: 'gray',
        width: '100%',
      }}>
      <View style={{marginTop: 60, position: 'absolute', left: 10, zIndex: 10}}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          activeOpacity={0.8}
          style={{
            backgroundColor: 'transparent',
            borderColor: '#231f20',
            borderWidth: 2,
            width: 40,
            height: 40,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Icon
            name="arrow-back-ios"
            style={{color: '#231f20', marginLeft: 10}}
            size={20}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          marginTop: top,
        }}>
        <YoutubePlayer
          height={height}
          volume={100}
          webViewProps={{
            contentMode: 'mobile',
          }}
          play={playing}
          videoId={video_data?.video_id}
          onChangeState={onStateChange}
        />
      </View>
    </SafeAreaView>
  );
};
