import { ColorValue, Image } from "react-native";

type Props = {
  size?: number;
  tintColor?: ColorValue;
};

const MoneyIcon: React.FC<Props> = ({ size = 30, tintColor }) => {
  return (
    <Image
      tintColor={tintColor}
      style={{ width: size, height: size }}
      source={require("@/app/assets/images/icons/moneybag.png")}
    ></Image>
  );
};

export default MoneyIcon;
