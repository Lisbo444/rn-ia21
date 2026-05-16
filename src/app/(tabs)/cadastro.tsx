import { router } from "expo-router";
import { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Cadastro() {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [anos, setAnos] = useState("");
  const [stack, setTecnologia] = useState("");
  const [cor, setCor] = useState("azul");

  const [erroNome, setErroNome] = useState("");
  const [erroCargo, setErroCargo] = useState("");
  const [erroAnos, setErroAnos] = useState("");
  const [erroTecnologia, setErroTecnologia] = useState("");

  function validar() {
    let valido = true;

    setErroNome("");
    setErroCargo("");
    setErroAnos("");
    setErroTecnologia("");

    if (nome.trim().length < 3) {
      setErroNome("Digite um nome válido");
      valido = false;
    }

    if (cargo.trim() === "") {
      setErroCargo("Digite um cargo");
      valido = false;
    }

    if (Number(anos) <= 0) {
      setErroAnos("Digite um número maior que 0");
      valido = false;
    }

    if (stack.trim() === "") {
      setErroTecnologia("Digite uma stack");
      valido = false;
    }

    if (valido) {
      router.push({
        pathname: "/preview",
        params: {
          nome,
          cargo,
          empresa,
          anos,
          tecnologia: stack,
          cor,
        },
      });
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <TextInput
        placeholder="Nome completo"
        style={styles.input}
        value={nome}
        onChangeText={setNome}
      />
      {erroNome ? <Text style={styles.error}>{erroNome}</Text> : null}

      <TextInput
        placeholder="Cargo"
        style={styles.input}
        value={cargo}
        onChangeText={setCargo}
      />
      {erroCargo ? <Text style={styles.error}>{erroCargo}</Text> : null}

      <TextInput
        placeholder="Empresa"
        style={styles.input}
        value={empresa}
        onChangeText={setEmpresa}
      />

      <TextInput
        placeholder="Anos de experiência"
        style={styles.input}
        keyboardType="numeric"
        value={anos}
        onChangeText={setAnos}
      />
      {erroAnos ? <Text style={styles.error}>{erroAnos}</Text> : null}

      <TextInput
        placeholder="Tecnologia favorita"
        style={styles.input}
        value={stack}
        onChangeText={setTecnologia}
      />
      {erroTecnologia ? (
        <Text style={styles.error}>{erroTecnologia}</Text>
      ) : null}

      <Text style={styles.label}>Cor do cartão</Text>

      <View style={styles.colors}>
        <TouchableOpacity
          style={[styles.colorButton, { backgroundColor: "#3b82f6" }]}
          onPress={() => setCor("azul")}
        />

        <TouchableOpacity
          style={[styles.colorButton, { backgroundColor: "#22c55e" }]}
          onPress={() => setCor("verde")}
        />

        <TouchableOpacity
          style={[styles.colorButton, { backgroundColor: "#703de7" }]}
          onPress={() => setCor("roxo")}
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={validar}>
        <Text style={styles.buttonText}>Gerar cartão</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 18,
    backgroundColor: "#f4f4f5",
    flexGrow: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 12,
    marginBottom: 14,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  label: {
    marginTop: 10,
    marginBottom: 10,
    fontWeight: "bold",
  },
  colors: {
    flexDirection: "row",
    marginBottom: 20,
  },
  colorButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  button: {
    backgroundColor: "#5b4bdb",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
