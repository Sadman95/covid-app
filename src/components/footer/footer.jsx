import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "../../theme/color";
import { spacing } from "../../theme/spacing";
import FrameVector from "../svg/FrameVector";
import Text from "../text/text";

const Footer = () => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={["#ada1e5c5", colors.blue]}
      style={styles.footer}
    >
      <View style={styles.imageWrapper}>
        <FrameVector />
      </View>
      <View style={styles.footerDetails}>
        <Text preset="h4">Do your own test!</Text>
        <Text preset="small" style={{ lineHeight: spacing[7] }}>
          Follow the instructions to do your own test.
        </Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  footer: {
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.blue,
    flexDirection: "row",
    margin: spacing[4],
    marginTop: spacing[8],
    borderRadius: spacing[4],
    paddingLeft: spacing[4],
    paddingRight: spacing[8],
  },
  imageWrapper: {
    marginTop: -spacing[4],
    flex: 1,
  },
  footerDetails: {
    marginLeft: spacing[4],

    flex: 1.5,
  },
});

export default Footer;
