import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Appearance, TextInput } from "react-native";
import { ThemeContext } from "./utils/ThemeContext";
import { useEffect, useState } from "react";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
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
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <HomeScreen />
      </View>
    </ThemeContext.Provider>
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

const lightTheme = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
  },
  text: {
    color: "#000000",
  },
});

const darkTheme = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
  },
  text: {
    color: "#FFFFFF",
  },
});
