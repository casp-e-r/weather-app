import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Search() {
  const [showSearch, toggleSearch] = useState(true);

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
        {showSearch ? (
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <TextInput
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
