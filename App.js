// import React from 'react';
// import BackgroundScreen from './screens/BackgroundScreen';

// export default function App() {
//   return <BackgroundScreen />;

// }

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './screens/BackgroundScreen';
import OnboardingScreen from './screens/Onboarding';
import OnboardingScreen2 from './screens/Onboarding2';
import OnboardingScreen3 from './screens/Onboarding3';
import OnboardingScreen4 from './screens/Onboarding4';
import HomeScreen from './screens/HomeScreen';
import LocationScreen from './screens/LocationScreen';
// import OnboardingScreens from './screens/OnboardingScreens.js'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={SplashWithTimer} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name= "Onboarding2" component= {OnboardingScreen2} />
        <Stack.Screen name= "Onboarding3" component = {OnboardingScreen3} />
        <Stack.Screen name= "Onboarding4" component = {OnboardingScreen4} />
        <Stack.Screen name= "HomeScreen" component = {HomeScreen} />
        <Stack.Screen name= "LocationScreen" component = {LocationScreen} />
        {/* <Stack.Screen name= "Onboarding" component={OnboardingScreens}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Splash screen with timer
const SplashWithTimer = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Onboarding');
    }, 3000); // Display splash screen for 3 seconds
    return () => clearTimeout(timer);
  }, [navigation]);

  return <SplashScreen />;
};
