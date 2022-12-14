import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { colors } from "../../theme/color";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";
import Text from "../text/text";

const variants = {
  default: {
    backgroundColor: colors.white,
    color: colors.black,
  },
  primary: {
    backgroundColor: colors.sky,
    color: colors.white,
  },
  danger: {
    backgroundColor: colors.red,
    color: colors.white,
  },
};

const Button = ({ children = null, onPress, variant, title, style }) => {
  const { backgroundColor, color } = variants[variant];
  return (
    <Pressable
      onPress={onPress}
      style={StyleSheet.compose(style, styles.container(backgroundColor))}
    >
      {children}
      <Text style={styles.title(color)} preset="small">
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: (bgColor) => ({
    backgroundColor: bgColor,
    padding: spacing[4],
    borderRadius: spacing[8],
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  }),
  title: (textColor) => ({
    color: textColor,
    fontFamily: typography.medium,
  }),
});

export default Button;
