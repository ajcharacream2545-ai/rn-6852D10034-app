import {
  Kanit_400Regular,
  Kanit_700Bold,
  useFonts,
} from "@expo-google-fonts/kanit";
import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";

export default function Index() {
  const [fontsLoaded] = useFonts({
    Kanit_400Regular,
    Kanit_700Bold,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/taxi_fare");
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#70a9c5" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.centerContent}>
        <Image
          source={require("../assets/images/taxi.png")}
          style={styles.imglogo}
        />

        <Text style={styles.txtAppName}>Taxi Fare Calculator</Text>

        <Text style={styles.txtAppName2}>คำนวณค่าโดยสารแท็กซี่</Text>

        <ActivityIndicator
          size="large"
          color="#ffea00"
          style={{ marginTop: 20 }}
        />
      </View>

      <View style={styles.me}>
        <Image
          source={require("../assets/images/profole.png")}
          style={styles.meimg}
        />

        <Text style={styles.mest}>พัฒนาโดย</Text>

        <Text style={styles.mest}>6852D10034 อัจฉรา พิเดช</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  centerContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  me: {
    alignItems: "center",
    marginBottom: 30,
  },
  mest: {
    fontFamily: "Kanit_400Regular",
    fontSize: 16,
    color: "#b4b3b3",
    marginTop: 10,
  },
  meimg: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 20,
  },

  imglogo: {
    width: 250,
    height: 250,
    marginBottom: 20,
    resizeMode: "contain",
  },

  txtAppName: {
    fontSize: 30,
    fontFamily: "Kanit_700Bold",
    color: "#70a9c5",
    marginBottom: 10,
  },

  txtAppName2: {
    fontSize: 20,
    fontFamily: "Kanit_400Regular",
    color: "#70a9c5",
  },
});
