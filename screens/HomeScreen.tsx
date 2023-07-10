import { StatusBar } from "expo-status-bar";
import { SafeAreaView, Text, View } from "react-native";
import Search from "../components/SearchComponent";
import ForcastCard from "../components/ForecastCard";
import UpcomingForecast from "../components/UpcomingForecast";
import { useContext, useEffect, useState } from "react";
import { Context } from "../utils/Context";
import * as Location from "expo-location";
import { fetchCurrentLocationForecast } from "../api/weather";

export default function HomeScreen() {
  const { weather, setWeather }: any = useContext(Context);
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, [Location]);

  useEffect(() => {
    location?.coords?.latitude&&
      location?.coords?.longitude &&fetchCurrentLocationForecast(
      location?.coords?.latitude,
      location?.coords?.longitude
    ).then(data=>{
      setWeather(data);
      // storeData('city',loc.name);
    }).catch((error)=>{
      console.log("Error ",error);
      
    })
  }, [location?.coords?.latitude, location?.coords?.longitude]);
  

  return (
    <View>
      {Object.keys(weather)?.length > 0 ? (
        <View style={{ flex: 1, width: "100%" }}>
          <StatusBar style="auto" />
          <SafeAreaView style={{ display: "flex", flex: 1, paddingTop: 40 }}>
            <Search />
            <ForcastCard data={weather} />
            <UpcomingForecast data={weather} />
          </SafeAreaView>
        </View>
      ) : (
        <View>
          <Text>Location</Text>
        </View>
      )}
    </View>
  );
}
