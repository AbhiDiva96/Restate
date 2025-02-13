import { SplashScreen, Stack } from "expo-router";

import "./global.css";

import { useEffect } from "react";
import {useFonts} from "expo-font";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
   const [fontsLoaded] = useFonts({
              "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
        "Rubik-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
        "Rubik-SemiBold": require("../assets/fonts/Rubik-SemiBold.ttf"),
        "Rubik-Light": require("../assets/fonts/Rubik-Light.ttf"),
        "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
        "Rubik-ExtraBold": require("../assets/fonts/Rubik-ExtraBold.ttf")
   })

   useEffect(() => {
       if(fontsLoaded){
            SplashScreen.hideAsync();
       }
   }, [fontsLoaded])

   if(!fontsLoaded) return null;

  return <Stack screenOptions={{headerShown: false}}/>;
}
