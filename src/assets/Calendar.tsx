import * as React from "react";

const Calendar: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="27"
    fill="none"
    viewBox="0 0 28 27"
  >
    <path
      fill={props.color || "#676B73"}
      d="M.5 22.95C.5 25.245 2.255 27 4.55 27h18.9c2.295 0 4.05-1.755 4.05-4.05v-10.8H.5zM23.45 2.7h-2.7V1.35C20.75.54 20.21 0 19.4 0s-1.35.54-1.35 1.35V2.7h-8.1V1.35C9.95.54 9.41 0 8.6 0S7.25.54 7.25 1.35V2.7h-2.7C2.255 2.7.5 4.455.5 6.75v2.7h27v-2.7c0-2.295-1.755-4.05-4.05-4.05"
    ></path>
  </svg>
);

export default Calendar;
