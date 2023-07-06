import * as React from "react"
import Svg, {
  G,
  Circle,
  Mask,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"
const SunnyIcon = (props:any) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={354}
    height={354}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Circle
        cx={176.62}
        cy={176.62}
        r={76.62}
        fill="#FFC701"
        fillOpacity={0.35}
      />
    </G>
    <Circle
      cx={176.621}
      cy={179.132}
      r={73.108}
      fill="url(#b)"
      stroke="url(#c)"
      strokeWidth={2}
    />
    <Mask
      id="e"
      width={149}
      height={108}
      x={102}
      y={146}
      maskUnits="userSpaceOnUse"
      // style={{
      //   maskType: "alpha",
      // }}
    >
      <Path
        fill="url(#d)"
        d="M250.729 179.133c0 40.928-33.18 74.108-74.108 74.108-40.929 0-74.109-33.18-74.109-74.108 0-40.929 27.527-31.402 68.456-31.402s79.761-9.527 79.761 31.402Z"
      />
    </Mask>
    <G filter="url(#f)" mask="url(#e)">
      <Path
        fill="#E18700"
        fillRule="evenodd"
        d="M289.667 314.788c0 29.83-24.182 54.011-54.011 54.011-.21 0-.419-.001-.628-.003v.003H45.361l.002-.003c-.21.003-.42.004-.63.004-29.83 0-54.011-24.182-54.011-54.011 0-29.83 24.181-54.011 54.01-54.011 25.713 0 47.229 17.966 52.678 42.03l18.291-23.19 57.151-18.841h62.176v.004c.209-.003.418-.004.628-.004 29.829 0 54.011 24.182 54.011 54.011Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={176.621}
        x2={176.621}
        y1={105.024}
        y2={253.241}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFE600" />
        <Stop offset={1} stopColor="#FF7A00" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={176.621}
        x2={176.621}
        y1={105.024}
        y2={253.241}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={176.621}
        x2={176.621}
        y1={105.024}
        y2={253.241}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFD600" />
        <Stop offset={1} stopColor="#FF7A00" />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default SunnyIcon
