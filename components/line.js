import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import {COLORS} from '../variables/color';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Custom Components

const Line = ({
  title,
  style,
  textStyle,
  onPress,
  icon1,
  icon2,
  icon1Color,
  iconStyle
}) => {
  return (
    <View style={[styles.line]}>
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    borderBottomWidth: 1,
    borderBlockColor: "#CFCFCF",
    margin: 10
  },
});

export default Line;
