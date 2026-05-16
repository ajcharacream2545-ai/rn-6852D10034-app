import {
    Kanit_400Regular,
    Kanit_700Bold,
    useFonts,
} from "@expo-google-fonts/kanit";

import React, { useState } from "react";

import {
    Alert,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function TaxiFare() {
  const [distance, setDistance] = useState("");

  const [trafficTime, setTrafficTime] = useState("");

  const [fare, setFare] = useState(0);

  const [fontsLoaded] = useFonts({
    Kanit_400Regular,
    Kanit_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  const calculateFare = () => {
    const km = parseFloat(distance);

    const traffic = parseFloat(trafficTime);

    if (isNaN(km) || isNaN(traffic)) {
      Alert.alert("แจ้งเตือน", "กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    let total = 35;

    if (km > 1) {
      const step = Math.min(km, 10) - 1;

      total += step * 6.5;
    }

    if (km > 10) {
      const step = Math.min(km, 20) - 10;

      total += step * 7;
    }

    if (km > 20) {
      const step = Math.min(km, 40) - 20;

      total += step * 8;
    }

    if (km > 40) {
      const step = Math.min(km, 60) - 40;

      total += step * 8.5;
    }

    if (km > 60) {
      const step = Math.min(km, 80) - 60;

      total += step * 9;
    }

    if (km > 80) {
      const step = km - 80;

      total += step * 10.5;
    }

    total += traffic * 3;

    setFare(total);
  };

  const clearData = () => {
    setDistance("");
    setTrafficTime("");
    setFare(0);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Taxi Fare</Text>
        </View>

        <Image
          source={require("../assets/images/taxi.png")}
          style={styles.logo}
        />

        <Text style={styles.title}>คำนวณค่าโดยสารแท็กซี่</Text>

        <Text style={styles.label}>ระยะทาง (กิโลเมตร) 🚕</Text>

        <TextInput
          style={styles.input}
          placeholder="กรุณากรอกระยะทาง"
          keyboardType="numeric"
          value={distance}
          onChangeText={setDistance}
        />

        <Text style={styles.label}>เวลารถติด (นาที) ⏰</Text>

        <TextInput
          style={styles.input}
          placeholder="กรุณากรอกเวลารถติด"
          keyboardType="numeric"
          value={trafficTime}
          onChangeText={setTrafficTime}
        />

        <TouchableOpacity style={styles.btnCalculate} onPress={calculateFare}>
          <Text style={styles.btnText}>คำนวณค่าโดยสาร</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnCancel} onPress={clearData}>
          <Text style={styles.btnText}>ยกเลิก</Text>
        </TouchableOpacity>

        <View style={styles.resultBox}>
          <Text style={styles.resultTitle}>ค่าโดยสารแท็กซี่</Text>

          <Text style={styles.resultFare}>{fare.toFixed(2)}</Text>

          <Text style={styles.resultBaht}>บาท</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#e5e5e5",
  },

  card: {
    flex: 1,
    backgroundColor: "#f7f2f7",
    minHeight: "100%",
    paddingBottom: 30,
  },

  header: {
    height: 100,
    backgroundColor: "#f4bc00",
    paddingVertical: 12,
    alignItems: "center",
  },

  headerText: {
    color: "#fff",
    fontSize: 22,
    fontFamily: "Kanit_700Bold",
    marginTop: 40,
  },

  logo: {
    width: 130,
    height: 130,
    alignSelf: "center",
    marginTop: 30,
    resizeMode: "contain",
  },

  title: {
    textAlign: "center",
    fontSize: 24,
    marginTop: 10,
    marginBottom: 20,
    color: "#333",
    fontFamily: "Kanit_700Bold",
  },

  label: {
    marginLeft: 25,
    marginBottom: 8,
    fontSize: 16,
    color: "#333",
    fontFamily: "Kanit_400Regular",
  },

  input: {
    width: "85%",
    height: 50,
    borderWidth: 1,
    borderColor: "#bbb",
    backgroundColor: "#fff",
    alignSelf: "center",
    borderRadius: 5,
    paddingHorizontal: 12,
    marginBottom: 18,
    fontSize: 16,
    fontFamily: "Kanit_400Regular",
  },

  btnCalculate: {
    width: "85%",
    backgroundColor: "#f4bc00",
    paddingVertical: 14,
    alignSelf: "center",
    borderRadius: 6,
    marginBottom: 12,
  },

  btnCancel: {
    width: "85%",
    backgroundColor: "#9e9e9e",
    paddingVertical: 14,
    alignSelf: "center",
    borderRadius: 6,
  },

  btnText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 18,
    fontFamily: "Kanit_700Bold",
  },

  resultBox: {
    width: "85%",
    backgroundColor: "#f2df9f",
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 8,
    paddingVertical: 20,
    alignItems: "center",
  },

  resultTitle: {
    fontSize: 16,
    color: "#555",
    fontFamily: "Kanit_400Regular",
  },

  resultFare: {
    fontSize: 40,
    color: "red",
    fontFamily: "Kanit_700Bold",
  },

  resultBaht: {
    fontSize: 16,
    color: "#555",
    fontFamily: "Kanit_400Regular",
  },
});
