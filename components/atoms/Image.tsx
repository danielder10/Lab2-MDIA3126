import { View, Image, StyleSheet } from "react-native";

export default function ProfileImage() {
  return (
    <View>
      <Image
        source={{ uri: "https://cdn.britannica.com/81/82281-050-3ADDC3DB/John-Smith-engraving.jpg" }}
        style={styles.profileImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "salmon",
  },
});
