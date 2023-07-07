import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { weatherImages } from "../utils/WeatherImages";
interface Props {
  data: any;
}
export default function UpcomingForecast({ data }: Props) {
  return (
    <View
      style={{
        marginTop: 80,
        marginBottom: 8,
        paddingBottom: 8,
        paddingHorizontal: 4,
      }}
    >
      <View>
        <Text>Daily forecast</Text>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={{ paddingHorizontal: 15 }}
        showsHorizontalScrollIndicator={false}
      >
        {/* <Text>
          {JSON.stringify(data?.forecast)}
        </Text> */}
        {data?.forecast?.forecastday?.map((item: any, index: number) => {
          const date = new Date(item.date);
          const options: any = { weekday: "long" };
          let dayName = date.toLocaleDateString("en-US", options);
          dayName = dayName.split(",")[0];
          return (
            <View
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: 96,
                marginHorizontal: 8,
                backgroundColor: "rgba(17, 25, 40, 0.12)",
                height: 120,
                marginTop: 10,
                borderRadius:20
              }}
            >
              <Image
                source={weatherImages[item?.day?.condition?.text || "other"]}
                style={{
                  width: 44,
                  height: 44,
                }}
              />
              <Text>{dayName}</Text>
              <Text>{item?.day?.avgtemp_c}</Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
