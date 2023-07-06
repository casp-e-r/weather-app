import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";
import Search from "../components/SearchComponent";
import ForcastCard from "../components/ForecastCard";
import UpcomingForecast from "../components/UpcomingForecast";
import { useContext } from "react";
import { Context } from "../utils/Context";

export default function HomeScreen() {
  const { weather }:any = useContext(Context);
  return (
    <View style={{ flex: 1, width:'100%' }}>
      <StatusBar style="auto" />
      <SafeAreaView style={{ display: "flex", flex: 1, paddingTop: 40 }}>
        <Search />
        <ForcastCard data={weather}/>
        <UpcomingForecast data={weather}/>
      </SafeAreaView>
    </View>
  );
}
