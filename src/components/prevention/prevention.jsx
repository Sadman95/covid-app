import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { colors } from "../../theme/color";
import { spacing } from "../../theme/spacing";
import { typography } from "../../theme/typography";
import CloseContact from "../svg/CloseContactVector";
import FaceMaskVector from "../svg/FaceMaskVector";
import HandWashVector from "../svg/HandWashVector";
import Text from "../text/text";

const preventions = [
  {
    id: 1,
    image: <CloseContact />,
    title: "Avoid close contact",
  },
  {
    id: 2,
    image: <HandWashVector />,
    title: "Clean your hands often",
  },
  {
    id: 3,
    image: <FaceMaskVector />,
    title: "Wear a facemask",
  },
];

const Card = ({ item }) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        resizeMode="cover"
        style={styles.bgImage}
        source={require("../../../assets/images/bg_img.png")}
      >
        <View>{item.image}</View>
      </ImageBackground>
      <Text preset="p" style={styles.title}>
        {item.title}
      </Text>
    </View>
  );
};

const renderCard = ({ item }) => {
  return <Card item={item} />;
};

const Prevention = () => {
  return (
    <View style={styles.container}>
      <Text preset="h3" style={styles.mainTitle}>
        Prevention
      </Text>
      <View style={styles.cardWrapper}>
        {preventions.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: spacing[8],
    paddingHorizontal: spacing[5],
  },
  cardWrapper: {
    flexDirection: "row",
  },
  mainTitle: {
    color: colors.black,
    fontFamily: typography.medium,
    marginBottom: spacing[4],
  },
  title: {
    color: colors.black,
    textAlign: "center",
    fontFamily: typography.medium,
    marginTop: spacing[2],
  },
  card: {
    alignItems: "center",
    width: "33.33%",
  },
  bgImage: {
    height: 90,
    width: 90,
    borderRadius: 45,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Prevention;
