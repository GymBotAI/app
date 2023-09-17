import React, { useState, useEffect, useRef } from "react";
import { StyleSheet } from "react-native";
import MapView, { Marker, Polyline } from "react-native-maps";
import * as Location from "expo-location";
import getDistanceFromLatLonInKm from "./getDistanceInKM";

export default function MapAndPos({
  updateTotalDistance,
  updateCalibrated,
  isActive,
}) {
  const [locations, setLocations] = useState([]);
  const [calibrated, setCalibrated] = useState(false);

  const mapRef = useRef(null);

  useEffect(() => {
    let isMounted = true;
    let newLocation;

    const calibrate = async () => {
      //This function works because I have noticed that precision improves as iterations increase soooo... dont delete it if u want to give ur user a good experience.
      for (let i = 4; i > 0; i--) {
        try {
          newLocation = await Location.getCurrentPositionAsync({}); //You can comment this line out when debugging since precision is irrelevant
          console.log(`Calibrating... ${i} iterations left`);
        } catch (error) {
          console.error(error);
        }
      }
      console.log("Calibrated");
      setCalibrated(true);
      updateCalibrated(calibrated);
    };

    const calculateDistAndDrawMap = async () => {
      try {
        newLocation = await Location.getCurrentPositionAsync({});

        if (isMounted) {
          setLocations((prevLocations) => [
            ...prevLocations,
            newLocation.coords,
          ]);

          if (mapRef.current) {
            mapRef.current.animateCamera({
              center: {
                latitude: newLocation.coords.latitude,
                longitude: newLocation.coords.longitude,
              },
              zoom: 15,
            });
          }

          if (locations.length > 0) {
            const prevLocation = locations[locations.length - 1];
            const distance = getDistanceFromLatLonInKm(
              prevLocation.latitude,
              prevLocation.longitude,
              newLocation.coords.latitude,
              newLocation.coords.longitude
            );
            updateTotalDistance(
              (prevTotalDistance) => prevTotalDistance + distance
            );
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission Denied");
        return;
      }

      if (!calibrated) {
        calibrate();
      }

      if (isActive && calibrated) {
        calculateDistAndDrawMap();
      }
    })();

    return () => {
      isMounted = false;
    };
  }, [isActive, calibrated, locations]);

  useEffect(() => {
    if (locations.length > 0 && mapRef.current) {
      mapRef.current.fitToCoordinates(
        locations.map((location) => ({
          latitude: location.latitude,
          longitude: location.longitude,
        })),
        {
          edgePadding: {
            top: 50,
            right: 50,
            bottom: 50,
            left: 50,
          },
        }
      );
    }
  }, [locations]);

  return (
    <MapView
      ref={mapRef}
      style={styles.map}
      initialRegion={{
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
      <Polyline coordinates={locations} strokeColor="#00F" strokeWidth={15} />
      {locations.length > 0 && (
        <Marker
          coordinate={{
            latitude: locations[locations.length - 1].latitude,
            longitude: locations[locations.length - 1].longitude,
          }}
          title="Current Location"
        />
      )}
    </MapView>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
