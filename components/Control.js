import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
export default function Control({
  isRunning,
  handleLeftButtonPress,
  handleRightButtonPress,
}) {
  return (
    <>
    <TouchableOpacity
      style={[
        styles.controlButtonBorder,
        { backgroundColor: isRunning ? '#ffc000' : '#d3d3d3' },
      ]}
      onPress={handleLeftButtonPress}>
      <View style={styles.controlButton}>
        <Text style={{ color: isRunning ? '#000000' : '#000' },{fontSize:15}}>
          {isRunning ? 'Step' : 'Reset'}
        </Text>
      </View>
    </TouchableOpacity>
    <TouchableOpacity
        style={[
          styles.controlButtonBorder,
          { backgroundColor: isRunning ? "#ff0000" : "#66ff00" },
        ]}
        onPress={handleRightButtonPress}
      >
        <View style={styles.controlButton}>
          <Text style={{ color: isRunning ? "#fff" : "#000" },{fontSize:15}}>
            {isRunning ? "Stop" : "Start"}
          </Text>
        </View>
      </TouchableOpacity>
      </>
  );
}
const CENTER = {
  justifyContent:"center",
  alignItems:"center"
}
const styles = StyleSheet.create({
  controlButtonBorder: {
    ...CENTER,
    width: 65,
    height: 65,
    borderRadius: 65,
  },
  controlButton: {
    ...CENTER,
    width: 65,
    height: 65,
    borderRadius: 65,
    borderColor: '#fff',
    borderWidth: 2,
  },
});
