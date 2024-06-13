import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CheckEmailExportData from "./CheckEmailExportData";
import ExportData from "./ExportData";

const Stack = createNativeStackNavigator();
const ExportDataStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ExportData" component={ExportData} />
      <Stack.Screen
        name="CheckEmailExportData"
        component={CheckEmailExportData}
      />
    </Stack.Navigator>
  );
};

export default ExportDataStack;
