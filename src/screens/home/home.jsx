import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Footer from "../../components/footer/footer";
import Hero from "../../components/hero/Hero";
import Prevention from "../../components/prevention/prevention";
import { colors } from "../../theme/color";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Hero />
      <Prevention />
      <Footer />
    </SafeAreaView>
  );
};

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default Home;
