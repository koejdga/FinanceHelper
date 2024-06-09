import Svg, { Path, SvgProps } from "react-native-svg";

const SvgComponent = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <Path
      fill={props.color || "#000"}
      d="M20.13 17.93v1a5 5 0 0 1-5 5h-3.26a3 3 0 0 1-1.68 2.61 2.94 2.94 0 0 1-1.32.31A3 3 0 0 1 7 26.21L3.29 23.3a3 3 0 0 1 0-4.74L7 15.65a3 3 0 0 1 3.21-.34 2.86 2.86 0 0 1 1.46 1.62h7.43a1.001 1.001 0 0 1 1.03 1ZM29.87 11.07a3 3 0 0 1-1.16 2.37L25 16.35a3.09 3.09 0 0 1-1.89.65 2.94 2.94 0 0 1-1.32-.31 2.86 2.86 0 0 1-1.46-1.62h-7.46a1 1 0 0 1-1-1v-1a5 5 0 0 1 5-5h3.26A3 3 0 0 1 25 5.79l3.71 2.91a3 3 0 0 1 1.16 2.37Z"
    />
  </Svg>
);
export default SvgComponent;
