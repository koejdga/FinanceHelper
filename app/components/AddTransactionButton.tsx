import { Pressable } from "react-native";
import { Accent, base } from "../constants/Colors";
import AddIcon from "./icons/AddIcon";

type Props = {
  onPress?: () => void;
};

const AddTransactionButton: React.FC<Props> = ({ onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={{
        position: "absolute",
        bottom: 7,
        right: 7,
        backgroundColor: Accent[100],
        width: 71,
        aspectRatio: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 35.5,
        zIndex: 10,
      }}
    >
      <AddIcon tintColor={base.light.light80} size={50} />
    </Pressable>
  );
};

export default AddTransactionButton;
