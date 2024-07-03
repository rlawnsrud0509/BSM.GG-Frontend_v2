import { svgProperties } from "@/types/svg/svgProperties.type";
import React from "react";

const ReloadIcon = ({ width = 1.6, height = 1.6, deg = 0 }: svgProperties) => {
  return (
    <svg
      width={`${width}rem`}
      height={`${height}rem`}
      transform={`rotate(${deg})`}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.9331 13.041C19.7442 14.4809 19.167 15.8423 18.2632 16.9792C17.3595 18.116 16.1633 18.9853 14.803 19.494C13.4427 20.0027 11.9696 20.1315 10.5417 19.8666C9.1138 19.6017 7.78492 18.953 6.69761 17.9903C5.6103 17.0275 4.80557 15.787 4.36973 14.4016C3.93389 13.0163 3.88338 11.5384 4.22362 10.1266C4.56385 8.7147 5.282 7.42208 6.30104 6.38734C7.32007 5.3526 8.60156 4.61477 10.0081 4.25298C13.9071 3.25298 17.9431 5.25998 19.4331 8.99998"
        stroke="#A1A1A1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 4V9H15"
        stroke="#A1A1A1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ReloadIcon;
