import React from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import { useTailwind } from "tailwind-rn"; // Tailwind hook
import MapView from "react-native-maps";
import * as Location from "expo-location";

const LocationScreen = () => {
  const tailwind = useTailwind();

  const requestLocationPermission = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      const location = await Location.getCurrentPositionAsync({});
      Alert.alert("Location Accessed", `Lat: ${location.coords.latitude}, Lon: ${location.coords.longitude}`);
    } else {
      Alert.alert("Permission Denied", "Location access is required to continue.");
    }
  };

  return (
    <View style={tailwind("flex-1 bg-white items-center justify-center")}>
      {/* Logo */}
      <Text style={tailwind("text-2xl font-bold mb-4")}>
        <Text>Hotel</Text>
        <Text style={tailwind("text-black underline")}>Orbit</Text>
      </Text>

      {/* Prompt */}
      <Text style={tailwind("text-lg text-center px-4 mb-6")}>
        Allow <Text style={tailwind("font-bold")}>“HotelOrbit”</Text> to use your location?{"\n"}
        Your location helps us provide accurate results and enhance your booking journey.
      </Text>

      {/* Map */}
      <View style={tailwind("h-56 w-11/12 mb-8 rounded-lg overflow-hidden border")}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>

      {/* Buttons */}
      <TouchableOpacity
        style={tailwind("bg-blue-500 px-6 py-3 rounded-lg mb-4")}
        onPress={requestLocationPermission}
      >
        <Text style={tailwind("text-white font-semibold")}>Allow Location Access</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={tailwind("border border-blue-500 px-6 py-3 rounded-lg")}
        onPress={() => Alert.alert("Manual Entry", "Redirecting to manual entry...")}
      >
        <Text style={tailwind("text-blue-500 font-semibold")}>Enter Location Manually</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LocationScreen;
