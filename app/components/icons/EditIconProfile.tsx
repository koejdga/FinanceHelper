import Svg, { Path, Rect, SvgProps } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg width={40} height={40} fill="none" {...props}>
    <Rect width={39} height={39} x={0.5} y={0.5} stroke="#F1F1FA" rx={7.5} />
    <Path
      stroke={props.color || "#000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m29.19 16.46-12 12a2.06 2.06 0 0 1-1 .54l-3.54.71a2 2 0 0 1-2.35-2.35l.7-3.51a2.06 2.06 0 0 1 .54-1L23.38 11a4.15 4.15 0 0 1 5.94 0 4 4 0 0 1-.13 5.51v-.05Z"
    />
  </Svg>
);
export default SvgComponent;
