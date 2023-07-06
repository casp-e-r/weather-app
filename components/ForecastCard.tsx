import { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Context } from "../utils/Context";
import SunnyIcon from "../assets/icons/SunnyIcon";
interface Props {
  data: any;
}
export default function ForcastCard({ data }: Props) {

  return (
    <View
      style={{
        marginHorizontal: 16,
        paddingTop:20,
        display: "flex",
        // justifyContent: "space-around",
        flex: 1,
        marginVertical: 8,
      }}
    >
      <Text style={{ textAlign: "center", fontSize: 24, fontWeight: "bold" }}>
        {data?.location?.name},
        <Text style={{ textAlign: "center", fontSize: 22, fontWeight: "600" }}>
          {data?.location?.country}
        </Text>
      </Text>
      <View style={{ marginRight: "auto", marginLeft: "auto" }}>
        <SunnyIcon style={{ marginHorizontal: "auto" }} />
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
        <Text style={{ letterSpacing: 1 }}>{data?.current?.condition?.text}</Text>
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
