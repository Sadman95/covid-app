import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { colors } from "../../theme/color";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";
import Button from "../button/button";
import ChatVector from "../svg/ChatVector";
import DownArrowVector from "../svg/DownArrowVector";
import PhoneVector from "../svg/PhoneVector";
import Text from "../text/text";
import TopBar from "../topbar/topbar";

const Hero = () => {
  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.headline}>
        <Text style={{ flex: 2 }} preset="h2">
          Covid-19
        </Text>
        <Pressable style={styles.options}>
          <Image source={require("../../../assets/images/country.png")} />
          <Text preset="small" style={styles.country}>
            USA
          </Text>
          <DownArrowVector />
        </Pressable>
      </View>
      <Text preset="h4">Are you feeling sick?</Text>
      <Text preset="small" style={styles.description}>
        If you feel sick with any of covid-19 symptoms please call or SMS us
        immediately for help.
      </Text>
      <View style={styles.contact}>
        <Button
          style={{ paddingHorizontal: spacing[9] }}
          title="Call Now"
          onPress={() => console.log("call")}
          variant="danger"
        >
          <View style={{ marginRight: spacing[6] }}>
            <PhoneVector />
          </View>
        </Button>
        <Button
          style={{ paddingHorizontal: spacing[9] }}
          title="Send SMS"
          onPress={() => console.log("SMS")}
          variant="primary"
        >
          <View style={{ marginRight: spacing[6] }}>
            <ChatVector />
          </View>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blue,
    paddingHorizontal: spacing[5],
    paddingVertical: spacing[9],
    borderBottomLeftRadius: spacing[8],
    borderBottomRightRadius: spacing[8],
  },
  country: { fontFamily: typography.medium, color: colors.black },
  description: {
    marginTop: spacing[4],
    lineHeight: spacing[6],
  },
  contact: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: spacing[7],
  },
  headline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: spacing[9],
    marginBottom: spacing[9],
  },
  options: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.white,
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[3],
    borderRadius: spacing[8],
  },
});

export default Hero;
