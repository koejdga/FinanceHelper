import Svg, { Path, SvgProps } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill={props.color || "#000"}
      d="M9.442 19.118a.75.75 0 0 1-.532-.225.75.75 0 0 1 0-1.058l4.245-4.245a2.25 2.25 0 0 0 0-3.18L8.91 6.165a.75.75 0 0 1 1.057-1.057l4.283 4.237a3.75 3.75 0 0 1 0 5.31l-4.245 4.238a.75.75 0 0 1-.563.225Z"
    />
  </Svg>
);
export default SvgComponent;
