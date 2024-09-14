import { View } from "react-native";
import Image from "@/components/atoms/Image";
import Bio from "@/components/atoms/Bio";

export default function Profile({ bioText }) {
  return (
    <View style={{ alignItems: "center" }}>
      <Image />
      <Bio bioText={bioText} />
    </View>
  );
}
