import Svg, { Path, SvgProps } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg width={33} height={32} fill="none" {...props}>
    <Path
      fill={props.color || "#000"}
      d="M24.1 8.09a4.6 4.6 0 0 0-.91-.09h-12a1 1 0 1 1 0-2h12a5 5 0 0 0-4-2h-10a5 5 0 0 0-4 2 4.94 4.94 0 0 0-1 3v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V13a5 5 0 0 0-4.09-4.91ZM21.43 21c-.08.01-.16.01-.24 0a3 3 0 0 1 0-6 2.77 2.77 0 0 1 1 .18 3 3 0 0 1-.76 5.8V21Z"
    />
    <Path
      fill={props.color || "#000"}
      d="M21.19 19a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </Svg>
);
export default SvgComponent;
