import { svgProperties } from "@/types/svg/svgProperties.type";
import React from "react";

const ArrowIcon = ({ width = 1.6, height = 1.6, deg = 0 }: svgProperties) => {
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
        d="M32.3188 11.9093C31.8968 11.4875 31.3246 11.2505 30.728 11.2505C30.1314 11.2505 29.5592 11.4875 29.1373 11.9093L17.9998 23.0468L6.86227 11.9093C6.43791 11.4994 5.86956 11.2726 5.27962 11.2777C4.68967 11.2829 4.12534 11.5195 3.70818 11.9367C3.29101 12.3538 3.05438 12.9182 3.04925 13.5081C3.04413 14.0981 3.27092 14.6664 3.68077 15.0908L16.409 27.819C16.831 28.2408 17.4031 28.4778 17.9998 28.4778C18.5964 28.4778 19.1686 28.2408 19.5905 27.819L32.3188 15.0908C32.7406 14.6688 32.9775 14.0966 32.9775 13.5C32.9775 12.9034 32.7406 12.3312 32.3188 11.9093Z"
        fill="white"
      />
    </svg>
  );
};

export default ArrowIcon;
