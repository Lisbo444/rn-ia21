import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../componsts/Buttons";
import { THEME } from "../../styles/constants";

export default function Sucessocreen() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Cartão criado com sucesso</Text>
          <Text style={styles.subtitle}>
            Seu cartão de visita digital está pronto. Compartilhe com a galera!
          </Text>
        </View>
        <View style={styles.footerContainer}>
          <Button label="Criar outro cartão" variant="primary" />
          <Button label="Voltar ao início" variant="secondary" />
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
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    height: 720,
  },
  title: {
    color: THEME.colors.heading,
    fontWeight: "bold",
    fontSize: THEME.text.heading.h2,
    width: 200,
    textAlign: "center",
  },

  subtitle: {
    color: THEME.colors.subtitle,
    fontWeight: "400",
    fontSize: 18,
    width: 200,
    textAlign: "center",
  },
  footerContainer: {
    flexDirection: "column",
    gap: 12,
  },
});
