import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../../theme/color";
import FrameVector from "../svg/FrameVector";
import Text from "../text/text";

const Footer = () => {
  return (
    <View style={styles.footer}>
      <FrameVector />
      <View>
        <Text>Do your own test!</Text>
        <Text>Follow the instructions to do your own test.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.blue,
  },
});

export default Footer;
