import * as React from "react";

const Graphic: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="33"
    height="30"
    fill="none"
    viewBox="0 0 33 30"
  >
    <path
      fill={props.color || "#676B73"}
      fillRule="evenodd"
      d="M18.278 0v13.333H32.5C32.5 5.97 26.132 0 18.278 0m-3.556 16.667h14.222C28.944 24.03 22.576 30 14.722 30S.5 24.03.5 16.667 6.868 3.333 14.722 3.333z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default Graphic;
