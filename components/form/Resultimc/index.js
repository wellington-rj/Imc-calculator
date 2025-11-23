import React from "react";
import { Text, View } from "react-native";
import styles from "../Resultimc/style";

export default function ResultImc(props) {
  return (
    <View style={styles.resultImc}> 
      <Text style={styles.information}>{props.messageResultImc}</Text>
      <Text style={styles.numberImc}>{props.resultImc}</Text>
    </View>
  );
}
