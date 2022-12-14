import * as React from "react";
import Svg, { Path } from "react-native-svg";

const DownArrowVector = (props) => (
  <Svg
    width={11}
    height={8}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M5.334 8a1.529 1.529 0 0 1-1.182-.569L.41 2.898A1.867 1.867 0 0 1 .179.933 1.564 1.564 0 0 1 1.592 0h7.485a1.564 1.564 0 0 1 1.413.933 1.867 1.867 0 0 1-.231 1.965L6.517 7.43A1.529 1.529 0 0 1 5.334 8Z"
      fill="#61688B"
    />
  </Svg>
);

export default DownArrowVector;
