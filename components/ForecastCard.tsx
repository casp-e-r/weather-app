import { StyleSheet, Text, View } from "react-native";

export default function ForcastCard() {
  return (
    <View
      style={{
        marginHorizontal: 16,
        display: "flex",
        justifyContent: "space-around",
        flex: 1,
        marginVertical: 8,
      }}
    >
      <Text style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}>
        Kochi,
        <Text style={{ textAlign: "center", fontSize: 22, fontWeight: "600" }}>
          India
        </Text>
      </Text>
      <View style={{marginRight: 'auto',marginLeft:'auto' }}>
        <View style={{ height: 128, width: 140, backgroundColor: 'red' }}>
          <Text>Image</Text>
        </View>
      </View>

      <View>
        <Text
          style={{
            marginBottom: 4,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 60,
            marginLeft: 20,
          }}
        >
          35
        </Text>
        <Text style={{ letterSpacing: 1 }}>Condition</Text>
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
