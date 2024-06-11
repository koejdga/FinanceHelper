import { Image } from "react-native";

const EditIcon = () => {
  return (
    <Image
      style={{ width: 30, height: 30 }}
      source={require("@/app/assets/images/icons/edit.png")}
    ></Image>
  );
};

export default EditIcon;
