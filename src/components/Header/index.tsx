import { Image, Text, View } from "react-native";

import { styles } from "./style";

export function Header() {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/Logo.png")} style={styles.image} />
    </View>
  );
}
