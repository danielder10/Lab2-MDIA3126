import { View } from "react-native";
import Image from "@/components/atoms/Image";
import Bio from "@/components/atoms/Bio";
import Label from "@/components/atoms/Label";

export default function Profile({bioText, labelText}) {
  return (
    <View style={{ alignItems: "center" }}>
      <Image />
      <Label labelText={labelText}/>
      <Bio bioText={bioText} />
    </View>
  );
}
