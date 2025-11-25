import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Vibration } from "react-native";
import ResultImc from "./Resultimc/index";
import styles from "./style";
export default function Form() {
  const [heigth, setHeigth] = useState(null);
  const [weigth, setWeigth] = useState(null);
  const [messageImc, setMessageImc] = useState("preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");
  const [errorMessage, setErrorMessage] = useState(null);

  function imcCalculator() {
    return setImc(((weigth / heigth) * heigth).toFixed(2));
  }

  function verificationImc(){
    if(imc == null){
      Vibration.vibrate();
      setErrorMessage("Campo obrigatório*")
    }
  }

  function validationImc() {
    if (weigth != null && heigth != null) {
      imcCalculator();
      setHeigth(null)
      setWeigth(null)
      setMessageImc("Seu imc é igual a:")
      setTextButton("Calcular novamente")
      setErrorMessage(null)
      return;
    }
    verificationImc()
    setImc(null);
    setTextButton("Calcular")
    setMessageImc("Preencha o peso e altura");
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
          <Text style={styles.errorMessage}> {errorMessage} </Text>

        <TextInput
          style={styles.input}
          onChangeText={setHeigth}
          value={heigth}
          placeholder="Ex: 1.75"
          keyboardType="numeric"
        ></TextInput>

        <Text style={styles.formLabel}>Peso</Text>
        <Text style={styles.errorMessage}> {errorMessage} </Text>
        <TextInput
          style={styles.input}
          onChangeText={setWeigth}
          value={weigth}
          placeholder="Ex: 80"
          keyboardType="numeric"
        ></TextInput>

        <TouchableOpacity
          style={styles.ButtonCalculator}
          onPress={() => {
            validationImc();
          }}
        >
          <Text style={styles.textButtonCalculator}> {textButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc}></ResultImc>
    </View>
  );
}
