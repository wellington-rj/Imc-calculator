import React, { useState } from "react"
import { View, Button, Text, TextInput} from "react-native"
import ResultImc from "./Resultimc/index"
export default function Form() {
  const [heigth, setHeigth] = useState(null)
  const [weigth, setWeigth] = useState(null)
  const [messageImc, setMessageImc] = useState("preencha o peso e altura")
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState("Calcular")

  function imcCalculator() {
    return setImc(  (   (weigth / heigth) * heigth).toFixed(2)  );
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
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput 
            onChangeText={setHeigth} 
            value={heigth}
            placeholder="Ex: 1.75" 
            keyboardType="numeric"> 
        </TextInput>

        <Text>Peso</Text>

        <TextInput 
            onChangeText={setWeigth} 
            value={weigth}
            placeholder="Ex: 80" 
            keyboardType="numeric">
        </TextInput>

        <Button onPress={()=> validationImc()}
        title={textButton}>
        </Button>

      </View>
        <ResultImc messageResultImc={messageImc} resultImc={imc}>  </ResultImc>
    </View>
  );
}
