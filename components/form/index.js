import { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import ResultImc from "./Resultimc/index";
import styles from "./style";
export default function Form() {
  const [heigth, setHeigth] = useState(null);
  const [weigth, setWeigth] = useState(null);
  const [messageImc, setMessageImc] = useState("preencha o peso e altura");
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState("Calcular");

  function imcCalculator() {
    return setImc(((weigth / heigth) * heigth).toFixed(2));
  }

  function validationImc() {
    if (weigth != null && heigth != null) {
      imcCalculator();
      setHeigth(null);
      setWeigth(null);
      setMessageImc("Seu imc é igual a:");
      setTextButton("Calcular novamente");
      return;
    }
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha o peso e altura");
  }

  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
        
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput 
        style={styles.input}
          onChangeText={setHeigth}
          value={heigth}
          placeholder="Ex: 1.75"
          keyboardType="numeric"
        ></TextInput>

        <Text style={styles.formLabel} >Peso</Text>
        <TextInput
          style={styles.input}
          onChangeText={setWeigth}
          value={weigth}
          placeholder="Ex: 80"
          keyboardType="numeric"
        ></TextInput>

        <TouchableOpacity style={styles.ButtonCalculator} onPress={() => {validationImc() }}>
          <Text style={styles.textButtonCalculator}> {textButton}</Text>
          </TouchableOpacity>
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc}>

      </ResultImc>
    </View>
  );
}
