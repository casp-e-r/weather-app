// import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Switch,
  Text,
  View,
} from "react-native";
import Search from "../components/SearchComponent";
import ForcastCard from "../components/ForecastCard";
import UpcomingForecast from "../components/UpcomingForecast";
import { useContext, useEffect, useState } from "react";
import { Context } from "../utils/Context";
import * as Location from "expo-location";
import { fetchCurrentLocationForecast } from "../api/weather";
import { Platform } from "react-native";

export default function HomeScreen() {
  const { weather, setWeather, changedTheme, isDataLoading, isDarkMode, toggleTheme, setChangedTheme }: any = useContext(Context);
  const [location, setLocation] = useState<Location.LocationObject | null>(null);
  const [granted, setGranted] = useState<Boolean>(false);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setGranted(false);
        console.log("Permission to access location was denied");
        return;
      }
      setGranted(true);
      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
    return () => {
      // Location.stopLocationUpdatesAsync();
    };
  }, []);

  useEffect(() => {
    if (location?.coords?.latitude && location?.coords?.longitude) {
      fetchCurrentLocationForecast(
        location?.coords?.latitude,
        location?.coords?.longitude
      )
        .then((data) => {
          setWeather(data);
          // storeData('city',loc.name);
        })
        .catch((error) => {
          console.log("Error ", error);
        });
    }
  }, [location]);
  

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1, marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0, }}
      keyboardShouldPersistTaps="handled"
    >
      <View style={{ flex: 1 }}>
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ flex: 0, marginHorizontal:10 }}>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => {
                  setChangedTheme(true);
                  toggleTheme();
                }}
                value={isDarkMode}
              />
            </View>
            <View style={{ flex: 1 }}>
              <Search />
            </View>
          </View>
          {(!isDataLoading && Object.keys(weather)?.length > 0) ? (
            <View style={{ flex: 1 }}>
              <ForcastCard data={weather} />
              <UpcomingForecast data={weather} />
            </View>
          ) : (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
              <ActivityIndicator size="large" />
            </View>
          )}
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}

