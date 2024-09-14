import { Text, View } from "react-native";

export default function Bio({ bioText }) {
  return (
    <View style={{ alignItems: "center", border:"1px solid", width:"50%", marginTop: 10}}>
      <Text style={{ color: "salmon", fontSize: 18, marginBottom: 10, marginTop: 10, width: "90%", alignItems: "center"}}>
        {bioText}
      </Text>
    </View>
  );
}
