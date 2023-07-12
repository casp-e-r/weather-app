import { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Context } from "../utils/Context";
import { weatherImages } from "../utils/WeatherImages";
interface Props {
  data: any;
}
export default function ForcastCard({ data }: Props) {

  return (
    <View
      style={{
        marginHorizontal: 16,
        padding:20,
        display: "flex",
        flex: 1,
        marginVertical: 8,
        backgroundColor: "rgba(250, 250, 250, 0.63)",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "rgba(209, 213, 219, 0.3)"
      }}
    >
      <Text style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}>
        {data?.location?.name},
        <Text style={{ textAlign: "center", fontSize: 22, fontWeight: "600" }}>
          {data?.location?.country}
        </Text>
      </Text>
      <View style={{ marginRight: "auto", marginLeft: "auto" }}>
        <Image source={weatherImages[data?.current?.condition?.text || "other"]} style={{width:285,height:285}} resizeMode="contain" />
      </View> 
      <View style={{
        display:'flex',
        justifyContent:'center'
      }}>
        <Text
          style={{
            marginBottom: 4,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 60,
            marginLeft: 20,
          }}
        >
          {data?.current?.temp_c}&#176;
        </Text>
        <Text style={{ letterSpacing: 1,textAlign: "center", }}>{data?.current?.condition?.text}</Text>
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
