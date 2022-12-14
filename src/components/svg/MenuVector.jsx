import * as React from "react";
import Svg, { ClipPath, Defs, G, Path } from "react-native-svg";

const MenuVector = (props) => (
  <Svg
    width={24}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G
      clipPath="url(#a)"
      stroke="#fff"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <Path d="M3 13h12M3 5h18" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h24v18H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default MenuVector;
