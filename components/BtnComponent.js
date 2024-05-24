import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


function BtnComponent(props) {
  return (
    <View>
      {(props.status === 0)? 
        <TouchableOpacity class="stopwatch-btn stopwatch-btn-gre"
        onClick={props.start}><Text>Start</Text></TouchableOpacity> : <Text></Text>
      }

      {(props.status === 1)? 
        <View>
          <TouchableOpacity class="stopwatch-btn stopwatch-btn-red"
                  onClick={props.stop}><Text>Stop</Text></TouchableOpacity>
          <TouchableOpacity class="stopwatch-btn stopwatch-btn-yel"
                  onClick={props.reset}><Text>Reset</Text></TouchableOpacity>
        </View> : <Text></Text>
      }

     {(props.status === 2)? 
        <View>
          <TouchableOpacity class="stopwatch-btn stopwatch-btn-gre"
                  onClick={props.resume}><Text>Resume</Text></TouchableOpacity>
          <TouchableOpacity class="stopwatch-btn stopwatch-btn-yel"
                  onClick={props.reset}><Text>Reset</Text></TouchableOpacity>
        </View> : <Text></Text>
      }
     
    </View>
  );
}

export default BtnComponent;