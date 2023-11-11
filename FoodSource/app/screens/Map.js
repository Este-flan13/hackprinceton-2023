import React, { useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import { StyleSheet, View, Text, Dimensions } from "react-native";
import * as Location from "expo-location";

const Map = ({ navigation }) => {
  const [mapRegion, setMapRegion] = useState({
    latitude: 40.349573,
    longitude: -74.657708,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }); // Change this to a list

  const userLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied.");
    }
    let location = await Location.getCurrentPositionAsync({
      enableHighAccuracy: true,
    });
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });

    useEffect(() => {
      userLocation();
    }, []);

    return (
      <View style={styles.container}>
        <MapView style={styles.map} region={mapRegion}>
          <Marker coordinate={mapRegion} />
        </MapView>
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default Map;
