import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: "#e2aa88",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    borderBottomColor: "#e2aa88",
    borderBottomWidth: 2,
    marginVertical: 4,
    marginHorizontal: 12,
  },
});

export default Subtitle;
