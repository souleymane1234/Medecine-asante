import React from 'react';
import {StyleSheet, View} from 'react-native';

const LineRight = () => {
  return <View style={styles.line}></View>;
};

const styles = StyleSheet.create({
  line: {
    borderRightWidth: 1,
    borderRightColor: '#c3c3c3',
    marginHorizontal: 20
  },
});

export default LineRight;