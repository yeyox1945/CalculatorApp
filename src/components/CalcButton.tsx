import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

interface Props {
  text: string;
  color?: string;
  widen?: boolean;
  onPress: (text: string) => void;
}

export const CalcButton = ({
  text,
  color = "#2d2d2d",
  widen = false,
  onPress,
}: Props) => {
  return (
    <TouchableOpacity onPress={() => onPress(text)} activeOpacity={0.7}>
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: widen ? 180 : 80,
        }}
      >
        <Text
          style={{
            ...styles.buttonText,
            color: color === "#9b9b9b" ? "black" : "white",
          }}
        >
          {text}{" "}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 30,
    color: "white",
    fontWeight: "400",
    textAlign: "center",
    left: 3,
  },
});
