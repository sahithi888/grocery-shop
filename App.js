import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import Navigator from "./routes/detailsStack";
import Drawers from "./routes/drawers";
import { Provider } from "react-redux";
import { StatusBar } from "expo-status-bar";
import persist from "./reducers/cartStore";
import * as Font from "expo-font";
import Routing from "./scren/Routes";
import "react-native-gesture-handler";
import { PersistGate } from "redux-persist/integration/react";
import offer from "./scren/offer";
import { createDrawerNavigator } from "react-navigation-drawer";


const getFonts = () =>
  Font.loadAsync({
    "Comfortaa-Bold": require("./assets/fonts/Comfortaa-Bold.ttf"),
    "Comfortaa-Light": require("./assets/fonts/Comfortaa-Light.ttf")
  });

const persistStore = persist();

const MyApp = createDrawerNavigator({
  Offer: {
    screen: offer
  }
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#040404" barStyle="light-content" />
        <Provider store={persistStore.store}>
          <PersistGate loading={null} persistor={persistStore.persistor}>
            <NavigationContainer>
              <Routing />
              <Drawers />
              <Navigator />
            </NavigationContainer>
          </PersistGate>
        </Provider>
      </View>
    );
  } else {
    return (
      <AppLoading
        startAsync={() => {
          getFonts();
        }}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

