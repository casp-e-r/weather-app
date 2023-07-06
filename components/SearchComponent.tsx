import { useCallback, useContext, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { fetchLocations, fetchWeatherForecast } from "../api/weather";
import { debounce } from "lodash";
import { Context } from "../utils/Context";

export default function Search() {
  const [showSearch, toggleSearch] = useState(false);
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const { setWeather }:any = useContext(Context);
  
  const handleSearch = (search: string) => {
    if (search && search.length > 2)
      fetchLocations({ cityName: search }).then((data) => {
        setLocations(data);
      });
  };
  const handleLocation = (loc:any)=>{
    setLoading(true);
    toggleSearch(false);
    setLocations([]);
    fetchWeatherForecast({
      cityName: loc.name,
      days: '7'
    }).then(data=>{
      setLoading(false);
      setWeather(data);
      // storeData('city',loc.name);
    })
  }

  
  const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);
  return (
    <View
      style={{
        minHeight: 56,
        marginHorizontal: 16,
        position: "relative",
        zIndex: 50,
        marginTop: 5,
        backgroundColor: "rgba(255, 255, 255, 0.73)",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "rgba(209, 213, 219, 0.3)",
      }}
    >
      <View style={{ display: "flex", flexDirection: "row", flex: 1 }}>
        {!showSearch ? (
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <TextInput
              onChangeText={handleTextDebounce}
              placeholder="Search city"
              placeholderTextColor={"lightgray"}
              style={{
                paddingLeft: 24,
                height: 60,
                flex: 1,
              }}
            />
          </KeyboardAvoidingView>
        ) : null}
        <TouchableOpacity
          onPress={() => toggleSearch(!showSearch)}
          style={{
            paddingVertical: 12,
            paddingHorizontal: 16,
            margin: 4,
            borderRadius: 20,
            marginLeft: "auto",
            backgroundColor: "blue",
          }}
        >
          <Text>Icon</Text>
        </TouchableOpacity>
      </View>
      {locations.length > 0 && showSearch ? (
        <View
        style={{
          position:'absolute',
          backgroundColor:'rgb(226 232 240)',
          top:64,
          width:'100%'
        }}>
          {locations.map((loc:any, index:number) => {
            let showBorder = index + 1 != locations.length;
            let borderClass = showBorder ? " border-b-2 border-b-gray-400" : "";
            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleLocation(loc)}
                style={{padding:12,marginBottom:4}}
              >
                {/* <MapPinIcon size="20" color="gray" /> */}
                <Text >
                  {loc?.name}, {loc?.country}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
