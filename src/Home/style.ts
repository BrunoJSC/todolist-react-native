import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    alignItems: "center",
  },

  box: {
    width: "100%",
    marginVertical: -40,
    flexDirection: "row",
    padding: 15,
  },

  input: {
    flex: 1,
    height: 56,
    borderRadius: 5,
    padding: 16,
    color: "#ffffff",
    backgroundColor: "#262626",
    marginRight: 7,
    borderWidth: 1,
    borderColor: "#5E60CE",
  },

  button: {
    width: 56,
    height: 56,
    backgroundColor: "#4EA8DE",
    borderRadius: 5,

    alignItems: "center",
    justifyContent: "center",
  },

  listBox: {
    width: "100%",
  },

  containerBox: {
    width: 327,
    flex: 1,
    marginVertical: 50,
  },

  info: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    padding: 25,
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#333333",
  },

  textTaskCreated: {
    flexDirection: "row",
    alignItems: "center",
  },

  textTaskCompleted: {
    flexDirection: "row",
    alignItems: "center",
  },

  boxs: {
    backgroundColor: "#333333",
    color: "#f2f2f2",
    padding: 10,
    borderRadius: 50,
    marginLeft: 10,
  },
});
