import { ColorValue, Image } from "react-native";

type Props = {
  tintColor?: ColorValue;
  size?: number;
};

const AddIcon: React.FC<Props> = ({ tintColor, size = 30 }) => {
  return (
    <Image
      style={{ width: size, height: size, tintColor: tintColor }}
      source={require("@/app/assets/images/icons/plus.png")}
    ></Image>
  );
};

export default AddIcon;
