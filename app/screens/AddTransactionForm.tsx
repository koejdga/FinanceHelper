import { View, Text, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import ChooseTransaction from "../components/ChooseTransaction";

const AddTransactionForm = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitle: (props: any) => <ChooseTransaction {...props} />,
    });
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: "#FFF", flex: 1 }}></SafeAreaView>
  );
};

export default AddTransactionForm;
