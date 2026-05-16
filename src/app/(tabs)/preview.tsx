import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "../../componsts/Buttons";
import { THEME } from "../../styles/constants";

export default function PreviewScreen() {
  return (
    <SafeAreaView>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Seu cartão</Text>
      </View>

      <View style={styles.cardContainer}>
        <View style={styles.cardAvatarContainer}>
          <Text style={styles.cardAvatarLetter}>M</Text>
        </View>

        <View style={styles.cardTextGoup}>
          <Text style={styles.cardTitle}>Mateus Lisboa</Text>
        </View>
        <Text style={styles.cardText}>Arquiteto de Software</Text>
        <Text style={styles.cardSubtile}>HWT</Text>

        <View style={styles.cardSeparator} />

        <View style={[styles.cardBadgeContainer, { marginTop: 8 }]}>
          <Text style={styles.cardTextGoup}>Especialista em </Text>
          <Text style={styles.cardRole}>Backend </Text>
        </View>

        <View style={styles.cardBadgeContainer}>
          <Text style={styles.cardBadgeText}>Especialista</Text>
        </View>

        <View>
          <Text style={styles.cardSubtile}>1 ano de experiência</Text>
        </View>
      </View>

      <View style={styles.footerContainer}>
        <Button label="Finalizar" variant="primary" />
        <Button label="Editar" variant="outline" />
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
    gap: 12,
  },
  headerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
  title: {
    color: THEME.colors.heading,
    fontWeight: "bold",
    fontSize: THEME.text.heading.h3,
    textAlign: "center",
  },

  footerContainer: {
    flexDirection: "column",
    gap: 22,
    marginTop: 20,
    marginBottom: 20,
  },
  cardContainer: {
    backgroundColor: "#6f96da",
    borderRadius: THEME.border.radius.xl,
    padding: 32,
    justifyContent: "center",
    alignItems: "center",
    gap: 14,
  },
  cardAvatarContainer: {
    backgroundColor: "#ced8f8",
    justifyContent: "center",
    alignContent: "center",
    padding: 27,
    borderRadius: 99,
    height: 90,
    width: 90,
  },
  cardAvatarSubContainer: {
    backgroundColor: "#f1f2f5",
    borderRadius: "100%",
    height: 80,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  cardAvatarLetter: {
    color: "#29469c",
    fontSize: THEME.text.heading.h2,
    fontWeight: "bold",
  },
  cardTitle: {
    color: "#f1f2f5",
    fontSize: THEME.text.heading.h2,
    fontWeight: "bold",
  },
  cardText: {
    color: "#dbdbdb",
    fontSize: 14,
  },

  cardSeparator: {
    backgroundColor: "#f1f2f5",
    height: 1,
    width: 250,
    marginVertical: 8,
  },
  cardSubtile: {
    color: "#dbdbdb",
    fontSize: 14,
  },
  cardRole: {
    color: "#f1f2f5",
    fontSize: THEME.text.heading.h4,
    fontWeight: "bold",
  },
  cardBadgeContainer: {
    backgroundColor: "#d37810",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: THEME.border.radius.xxl,
  },
  cardBadgeText: {
    color: "#140c01",
    fontWeight: "bold",
    letterSpacing: 1,
  },
  cardTextGoup: {
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
});
