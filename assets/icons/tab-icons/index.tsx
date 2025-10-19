import * as React from "react";
import Svg, { Path, Rect, SvgProps } from "react-native-svg";

export const Home = (props: SvgProps) => {
  const color = props.color || "#000";
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      {...props}
    >
      <Path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
      <Path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    </Svg>
  );
};

export const OrangeMoney = (props: SvgProps) => {
  const color = props.color || "#000";
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      className="icon icon-tabler icons-tabler-outline icon-tabler-switch-vertical"
      {...props}
    >
      <Path stroke="none" d="M0 0h24v24H0z" />
      <Path d="m3 8 4-4 4 4M7 4v9M13 16l4 4 4-4M17 10v10" />
    </Svg>
  );
};

export const MyLine = (props: SvgProps) => {
  const color = props.color || "#000";
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      {...props}
    >
      <Path d="M12 14v4M14.172 2a2 2 0 0 1 1.414.586l3.828 3.828A2 2 0 0 1 20 7.828V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM8 14h8" />
      <Rect width={8} height={8} x={8} y={10} rx={1} />
    </Svg>
  );
};

export const Sugu = (props: SvgProps) => {
  const color = props.color || "#000";
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      {...props}
    >
      <Path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244" />
      <Path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05" />
    </Svg>
  );
};

export const Sarali = (props: SvgProps) => {
  const color = props.color || "#000";
  return (
    <Svg
      width={24}
      height={24}
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      {...props}
    >
      <Rect width={5} height={5} x={3} y={3} rx={1} />
      <Rect width={5} height={5} x={16} y={3} rx={1} />
      <Rect width={5} height={5} x={3} y={16} rx={1} />
      <Path d="M21 16h-3a2 2 0 0 0-2 2v3M21 21v.01M12 7v3a2 2 0 0 1-2 2H7M3 12h.01M12 3h.01M12 16v.01M16 12h1M21 12v.01M12 21v-1" />
    </Svg>
  );
};
