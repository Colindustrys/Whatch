import "dotenv/config";

export default {
  expo: {
    name: "Whatch",
    slug: "Whatch",
    version: "1.0.0",
    icon: "./assets/icon.png",
    newArchEnabled: true,
    jsEngine: "hermes",
    userInterfaceStyle: "automatic",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#000000",
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.alexfahrer.Whatch",
      icon: {
        dark: "./assets/icon-dark.png",
        light: "./assets/icon-light.png",
        tinted: "./assets/icon-tinted.png",
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/icon.png",
        backgroundColor: "#000000",
        monochromeImage: "./assets/icon_monochome.png",
      },
      package: "com.alexfahrer.Whatch",
    },
    plugins: [
      [
        "expo-screen-orientation",
        {
          initialOrientation: "DEFAULT",
        },
      ],
      "expo-font",
    ],
    extra: {
      eas: {
        projectId: "be44d0d2-c337-4cb9-a8c4-dc50fa8543f7",
      },
      TMDB_KEY: process.env.TMDB_KEY,
    },
  },
};
