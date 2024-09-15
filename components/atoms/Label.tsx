import { Text, View } from "react-native";

export default function Label({ labelText }) {
  return (
    <View style={{ alignItems: "center", border: "1px solid", width: "50%", marginTop: 10 }}>
      <Text style={{ color: "salmon", fontSize: 18, marginBottom: 10, marginTop: 10, width: "90%", textAlign: "center" }}>
        {labelText}
      </Text>
    </View>
  );
}
