import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg width={33} height={32} fill="none" {...props}>
    <Path
      stroke={props.color || "#000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.137 21V5.24M9.067 11.24l5.66-5.65a2 2 0 0 1 2.82 0l5.66 5.65M27.137 21v4a2 2 0 0 1-2 2h-18a2 2 0 0 1-2-2v-4"
    />
  </Svg>
);
export default SvgComponent;
