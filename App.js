import { useFonts } from "expo-font";
import Home from "./src/screens/home/home";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Graphik-regular": require("./assets/fonts/GraphikRegular.otf"),
    "Graphik-medium": require("./assets/fonts/GraphikMedium.otf"),
    "Graphik-bold": require("./assets/fonts/GraphikBold.otf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return <Home />;
}
