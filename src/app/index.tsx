import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../componsts/Buttons";
import { THEME } from "./styles/constants";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.logo}>Devcard</Text>
          <Text style={styles.subtitle}>
            Seu cartão de visita digital dev mobile
          </Text>
        </View>
        <View>
          <Button></Button>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 24,
  },
  headerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
    height: 720,
  },
  logo: {
    color: "#6d0fac33",
    fontWeight: "bold",
    fontSize: 56,
  },
  subtitle: {
    color: "#631f9133",
    fontWeight: "400",
    fontSize: 18,
    width: 200,
    textAlign: "center",
  },
  buttonContainer: {
    backgroundColor: THEME.colors.primary,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: THEME.border.radius.md,
  },
  buttonText: {
    color: THEME.colors.primary_foreground,
    fontWeight: "800",
    fontSize: 18,
  },
});
