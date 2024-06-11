import Svg, { Path, SvgProps } from "react-native-svg";
const SvgComponent = (props: SvgProps) => (
  <Svg
    width={35}
    height={35}
    fill="none"
    stroke="#000"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    {...props}
  >
    <Path stroke="none" d="M0 0h35v35H0z" />
    <Path d="m20 8.75-8.75 8.75 8.75 8.75" />
  </Svg>
);
export default SvgComponent;
