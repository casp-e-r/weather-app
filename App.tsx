import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Appearance } from "react-native";
import { useEffect, useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import { Context } from "./utils/Context";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [weather, setWeather] = useState({})
  const [changedTheme, setChangedTheme] = useState(false);

  useEffect(() => {
    const handleThemeChange = () => {
      const currentMode = Appearance.getColorScheme();
      setIsDarkMode(currentMode === "dark");
    };

    handleThemeChange();
    Appearance.addChangeListener(handleThemeChange);

    return () => {
      // Appearance.removeChangeListener(handleThemeChange);
    };
  });

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;
  return (
    <Context.Provider value={{ theme, toggleTheme, weather, setWeather}}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <HomeScreen />
      </View>
    </Context.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

const lightTheme = StyleSheet.create({
  container: {
    backgroundColor: "#AFD3E2",
  },
  text: {
    color: "#000000",
  },
});

const darkTheme = StyleSheet.create({
  container: {
    backgroundColor: "#146C94",
  },
  text: {
    color: "#FFFFFF",
  },
});
