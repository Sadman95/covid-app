import React from "react";
import { Pressable, StyleSheet, View } from "react-native";
import BellVector from "../svg/BellVector";
import MenuVector from "../svg/MenuVector";

const TopBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <MenuVector />
      </Pressable>

      <Pressable>
        <BellVector />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default TopBar;
