import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "black",
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "flex-end",
  },
  result: {
    color: "white",
    fontSize: 60,
    textAlign: "right",
    marginBottom: 10,
  },
  resultSm: {
    color: "rgba(255, 255, 255, 0.5)",
    fontSize: 30,
    textAlign: "right",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 18,
    gap: 15,
  },
});
