import { base, blue } from "@/app/constants/Colors";
import { FontNames, Fonts } from "@/app/constants/Fonts";
import { Text, View } from "react-native";

const About = () => {
  return (
    <View style={{ margin: 16 }}>
      <Text style={[Fonts[FontNames.TITLE_2]]}>About Finance Helper</Text>
      <Text
        style={[
          Fonts[FontNames.BODY_3],
          { color: base.dark.dark25, marginBottom: 15 },
        ]}
      >
        Version: 1.0.0
      </Text>
      <Text style={[Fonts[FontNames.BODY_1], { marginBottom: 20 }]}>
        Finance Helper is designed to help you manage your finances with ease
        and efficiency. Our goal is to provide you with a comprehensive tool to
        create budgets, track expenses, and achieve your financial goals.
      </Text>
      <Text style={[Fonts[FontNames.BODY_2]]}>Developers:</Text>
      <Text style={[Fonts[FontNames.BODY_3]]}>Sofiia Budilova</Text>
      <Text style={[Fonts[FontNames.BODY_3]]}>Myroslava Valkovets</Text>
      <Text style={[Fonts[FontNames.BODY_3]]}>Mykola Andrusenko</Text>
      <Text style={[Fonts[FontNames.BODY_3], { marginBottom: 20 }]}>
        Inna Stetsiuk
      </Text>
      <Text style={[Fonts[FontNames.BODY_1]]}>
        For more information, visit our website:
      </Text>
      <Text style={[Fonts[FontNames.BODY_1], { color: blue[80] }]}>
        www.financehelper.com
      </Text>
    </View>
  );
};

export default About;
