import { useCallback, useContext, useState } from "react";
import {
  KeyboardAvoidingView,
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
  const [locationsLoading, setLocationsLoading] = useState(true);

  const { setWeather }: any = useContext(Context);

  const handleSearch = (search: string) => {
    if (search && search.length > 2)
      fetchLocations({ cityName: search }).then((data) => {
        setLocations(data);
      });
  };
  const handleLocation = (loc: any) => {
    setLocationsLoading(true);
    toggleSearch(false);
    setLocations([]);
    fetchWeatherForecast({
      cityName: loc.name,
      days: "7",
    }).then((data) => {
      setLocationsLoading(false);
      setWeather(data);
      // storeData('city',loc.name);
    }).catch(()=>{
      setLocationsLoading(false);
    })
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 1200), []);
  return (
    <View
      style={{
        minHeight: 56,
        marginRight: 16,
        position: "relative",
        zIndex: 50,
        marginTop: 20,
        backgroundColor: "rgba(255, 255, 255, 0.73)",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "rgba(209, 213, 219, 0.3)",
        width:"100%",    
      }}
    >
        {!showSearch ? (
          <KeyboardAvoidingView enabled={true}>
            <TextInput
              onChangeText={handleTextDebounce}
              placeholder="Search city"
              placeholderTextColor={"lightgray"}
              style={{
                paddingLeft: 24,
                flex: 1,
                paddingVertical: 12,
              }}
            />
          </KeyboardAvoidingView>
        ) : null}
        <TouchableOpacity
          onPress={() => toggleSearch(!showSearch)}
          style={{
            paddingVertical: 12,
            paddingHorizontal: 16,
            margin: 5,
            right:6,
            position:'absolute',
            borderRadius: 20,
            backgroundColor: "blue",
          }}
        >
          <Text>Icon</Text>
        </TouchableOpacity>
      {locations.length > 0 && showSearch ? (
        <View
          style={{
            position: "absolute",
            backgroundColor: "rgb(226 232 240)",
            top: 64,
            width: "100%",
            right:34,
            zIndex:6
          }}
        >
          {locations.map((loc: any, index: number) => {
            let showBorder = index + 1 != locations.length;
            let borderClass = showBorder ? " border-b-2 border-b-gray-400" : "";
            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleLocation(loc)}
                style={{ padding: 12, marginBottom: 4 }}
              >
                <Text>
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
