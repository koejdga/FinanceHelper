import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MyPDFContent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>My PDF Document</Text>
      <Text>This is a sample PDF generated using React Native.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default MyPDFContent;
