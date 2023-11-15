import { View, Text } from "react-native";
import { styles } from "../theme/AppTheme";
import { CalcButton } from "../components/CalcButton";
import { useCalculator } from "../hooks/useCalculator";

export const CalculatorScreen = () => {
  const {
    result,
    lastResult,
    clear,
    toggleSign,
    delAction,
    addAction,
    substractAction,
    multiplyAction,
    divideAction,
    buildNumber,
    calculate,
  } = useCalculator();

  return (
    <View style={styles.container}>
      {lastResult !== "0" && <Text style={styles.resultSm}> {lastResult}</Text>}

      <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
        {result}
      </Text>

      {/* Buttons row */}
      <View style={styles.row}>
        <CalcButton text="C" color="#9b9b9b" onPress={clear} />
        <CalcButton text="+/-" color="#9b9b9b" onPress={toggleSign} />
        <CalcButton text="del" color="#9b9b9b" onPress={delAction} />
        <CalcButton text="/" color="#ff9427" onPress={divideAction} />
      </View>

      {/* Buttons row */}
      <View style={styles.row}>
        <CalcButton text="7" onPress={buildNumber} />
        <CalcButton text="8" onPress={buildNumber} />
        <CalcButton text="9" onPress={buildNumber} />
        <CalcButton text="X" color="#ff9427" onPress={multiplyAction} />
      </View>

      {/* Buttons row */}
      <View style={styles.row}>
        <CalcButton text="4" onPress={buildNumber} />
        <CalcButton text="5" onPress={buildNumber} />
        <CalcButton text="6" onPress={buildNumber} />
        <CalcButton text="-" color="#ff9427" onPress={substractAction} />
      </View>

      {/* Buttons row */}
      <View style={styles.row}>
        <CalcButton text="1" onPress={buildNumber} />
        <CalcButton text="2" onPress={buildNumber} />
        <CalcButton text="3" onPress={buildNumber} />
        <CalcButton text="+" color="#ff9427" onPress={addAction} />
      </View>

      {/* Buttons row */}
      <View style={styles.row}>
        <CalcButton text="0" widen onPress={buildNumber} />
        <CalcButton text="." onPress={buildNumber} />
        <CalcButton text="=" color="#ff9427" onPress={calculate} />
      </View>
    </View>
  );
};
