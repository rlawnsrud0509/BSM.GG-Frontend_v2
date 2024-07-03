import { svgProperties } from "@/types/svg/svgProperties.type";
import React from "react";

const SearchIcon = ({ width = 2.4, height = 2.4, deg = 0 }: svgProperties) => {
  return (
    <svg
      width={`${width}rem`}
      height={`${height}rem`}
      transform={`rotate(${deg})`}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.0465 24.9255L33.471 31.3485L31.3485 33.471L24.9255 27.0465C22.5356 28.9623 19.563 30.0044 16.5 30C9.048 30 3 23.952 3 16.5C3 9.048 9.048 3 16.5 3C23.952 3 30 9.048 30 16.5C30.0044 19.563 28.9623 22.5356 27.0465 24.9255ZM24.0375 23.8125C25.9412 21.8548 27.0043 19.2306 27 16.5C27 10.6995 22.3005 6 16.5 6C10.6995 6 6 10.6995 6 16.5C6 22.3005 10.6995 27 16.5 27C19.2306 27.0043 21.8548 25.9412 23.8125 24.0375L24.0375 23.8125Z"
        fill="black"
      />
    </svg>
  );
};

export default SearchIcon;
