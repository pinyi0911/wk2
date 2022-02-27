import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
      <View style={styles.headerStyle}>
        <Text style={styles.textStyle}>EXO ALBUMS </Text>
      </View>
  );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android Only
    elevation: 5
  },
  textStyle: {
    fontSize: 20,
    fontWeight:"700",
    color:"#a1a1a1",
  },
});

export default Header;
