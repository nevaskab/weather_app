import * as React from "react";

const Location: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="33"
    fill="none"
    viewBox="0 0 26 33"
  >
    <path
      fill={props.color || "#676B73"}
      fillRule="evenodd"
      d="M13.125 9.281a3.094 3.094 0 1 0 0 6.187 3.094 3.094 0 0 0 0-6.187m0 8.25a5.156 5.156 0 1 1 0-10.312 5.156 5.156 0 0 1 0 10.312m0-17.531C6.291 0 .75 5.54.75 12.375.75 17.55 11.068 33.011 13.125 33 15.15 33.011 25.5 17.48 25.5 12.375 25.5 5.541 19.96 0 13.125 0"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default Location;
