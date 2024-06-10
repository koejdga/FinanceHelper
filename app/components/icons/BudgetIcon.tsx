import Svg, { Path, SvgProps } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <Path fill={props.color || "#000"} d="M28 15H17V4a12 12 0 0 1 11 11Z" />
    <Path
      fill={props.color || "#000"}
      d="M28 17A12 12 0 1 1 15 4v12a1 1 0 0 0 1 1h12Z"
    />
  </Svg>
);
export default SvgComponent;
