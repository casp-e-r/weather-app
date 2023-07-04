import {
    ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function UpcomingForecast() {

  return (
    <View 
    style={{marginVertical:8,paddingBottom:8,paddingHorizontal:4}}>
                <View>
                  <Text>Daily forecast</Text>
                </View>
                <ScrollView   
                  horizontal
                  contentContainerStyle={{paddingHorizontal: 15}}
                  showsHorizontalScrollIndicator={false}
                >
                  {[1,2,3,4,5,6,7]?.map((data:any,index:number)=>{
                    return(
                        <View 
                          key={index} 
                          style={{display: 'flex',justifyContent:'center',alignItems:'center',width:96,marginHorizontal:8, backgroundColor:'rgba(17, 25, 40, 0.12)',height:120}}
                        >
                          <Text>data</Text>
                        </View>
                    )
                  })}
                  
                </ScrollView>

              </View>
  );
}



