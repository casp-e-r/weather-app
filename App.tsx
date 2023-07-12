import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Appearance, SafeAreaView } from "react-native";
import { useEffect, useMemo, useState } from "react";
import HomeScreen from "./screens/HomeScreen";
import { Context } from "./utils/Context";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [weather, setWeather] = useState({});
  const [changedTheme, setChangedTheme] = useState(false);
  const [isDataLoading, setIsDataLoading] = useState(false);
  useEffect(() => {
    if (!changedTheme) {
      const handleThemeChange = () => {
        const currentMode = Appearance.getColorScheme();
        setIsDarkMode(currentMode === "dark");
      };

      handleThemeChange();
      Appearance.addChangeListener(handleThemeChange);
    }
    return () => {
      // Appearance.removeChangeListener(handleThemeChange);
    };
  });

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = useMemo(() => {
    return isDarkMode ? darkTheme : lightTheme
  }, [isDarkMode]); 
  
  return (
    <Context.Provider
      value={{
        theme,
        toggleTheme,
        weather,
        setWeather,
        isDataLoading,
        setIsDataLoading,
        changedTheme,
        setChangedTheme,
        isDarkMode, setIsDarkMode
      }}
    >
      <SafeAreaView style={[styles.container,theme?.container]}>
        <StatusBar style={isDarkMode ? "light" : "dark"} />
        <HomeScreen />
      </SafeAreaView>
    </Context.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
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
