import { IconCheck } from "@tabler/icons-react-native";
import { ColorValue } from "react-native";

type Props = {
  size?: number;
  color?: string;
  stroke?: ColorValue;
};

const SvgComponent: React.FC<Props> = ({ size, color, stroke }) => (
  <IconCheck
    color={color || "#000"}
    size={size || 24}
    stroke={stroke || "#000"}
  />
);

export default SvgComponent;
