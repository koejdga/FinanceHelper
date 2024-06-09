import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg width={33} height={32} fill="none" {...props}>
    <Path
      fill={props.color || "#000"}
      d="M16.19 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
    <Path
      fill={props.color || "#000"}
      d="m25.98 17-.38-.23a.94.94 0 0 1 0-1.62l.38-.23a3 3 0 0 0 1.1-4.09l-1-1.74A3 3 0 0 0 21.98 8l-.32.18a1 1 0 0 1-1.47-.82V7a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v.36a1 1 0 0 1-1.48.86L10.4 8a3 3 0 0 0-4.1 1.09l-1 1.74A3 3 0 0 0 6.4 15l.38.23a.94.94 0 0 1 0 1.62L6.4 17a3 3 0 0 0-1.1 4.09l1 1.74A2.999 2.999 0 0 0 10.4 24l.31-.17a1 1 0 0 1 1 0 1 1 0 0 1 .49.84V25a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-.37a1 1 0 0 1 1.5-.84l.31.18a3 3 0 0 0 4.1-1.09l1-1.74A3.002 3.002 0 0 0 25.98 17Zm-9.79 3a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z"
    />
  </Svg>
);
export default SvgComponent;
