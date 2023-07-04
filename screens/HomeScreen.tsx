import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";
import Search from "../components/SearchComponent";
import ForcastCard from "../components/ForecastCard";
import UpcomingForecast from "../components/UpcomingForecast";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, width:'100%' }}>
      <StatusBar style="auto" />
      <SafeAreaView style={{ display: "flex", flex: 1, paddingTop: 40 }}>
        <Search />
        <ForcastCard/>
        <UpcomingForecast/>
      </SafeAreaView>
    </View>
  );
}
