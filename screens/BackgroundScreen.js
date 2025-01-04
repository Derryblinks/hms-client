import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';

const BackgroundScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/images/background.png')} 
      style={styles.background}
      resizeMode="cover" //this resized mode will ensure the background covers the entire screen
    >
      <View style={styles.overlay}>
        {/* Additional content would be added here  */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1, 
    width: '100%',
    height: '100%',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.4)', 
  },
});

export default BackgroundScreen;
