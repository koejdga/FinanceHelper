import { base, blue } from "@/app/constants/Colors";
import { FontNames, Fonts } from "@/app/constants/Fonts";
import { Text, View } from "react-native";

const Help = () => {
  return (
    <View style={{ margin: 16, gap: 10 }}>
      <Text style={[Fonts[FontNames.BODY_1], { color: base.light.light40 }]}>
        For questions or support, contact us at:
      </Text>
      <Text style={[Fonts[FontNames.BODY_1], { color: blue[80] }]}>
        support@financehelper.com
      </Text>
    </View>
  );
};

export default Help;
