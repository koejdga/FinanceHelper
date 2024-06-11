import { Image } from "react-native";

const AddIcon = () => {
  return (
    <Image
      style={{ width: 30, height: 30 }}
      source={require("@/app/assets/images/icons/plus.png")}
    ></Image>
  );
};

export default AddIcon;
