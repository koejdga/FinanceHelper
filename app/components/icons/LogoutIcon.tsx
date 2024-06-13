import Svg, { Path, SvgProps } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg width={33} height={32} fill="none" {...props}>
    <Path
      stroke={props.color || "#000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.19 8V7a2 2 0 0 0-2-2h-10a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1M11.19 16h15.83M23.78 11.76l2.82 2.83a2 2 0 0 1 0 2.82l-2.82 2.83"
    />
  </Svg>
);
export default SvgComponent;
