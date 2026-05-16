import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../componsts/Buttons";
import { THEME } from "../../styles/constants";

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
          <Button label="Criar outro cartão" variant="primary" />
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
    color: "#6a07c7d0",
    fontWeight: "bold",
    fontSize: 57,
    textAlign: "center",
  },
  subtitle: {
    color: THEME.colors.subtitle,
    fontWeight: "800",
    fontSize: 20,
    width: 200,
    textAlign: "center",
    alignSelf: "center",
  },
});
