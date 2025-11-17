// App.js - Minimal WebView Wrapper

import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";

// NOTE: You must install the webview package first (Step 1A)

// This configuration object will be injected by your build server!
import appConfig from "./app.config.json"; 

export default function App() {
  // Use the baseUrl from app.config.json (or the injected config)
  const uri = appConfig.extra.baseUrl; 

  return (
    <SafeAreaView style={styles.container}>
      {/* The microservice will inject the real URL into app.config.json 
        before starting the build.
      */}
      <WebView 
        source={{ uri: uri }} 
        startInLoadingState={true} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  // Use flex: 1 to ensure the WebView takes up the entire screen space
  container: {
    flex: 1,
  },
});