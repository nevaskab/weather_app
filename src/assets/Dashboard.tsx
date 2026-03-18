import * as React from "react";

const Dashboard: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="25"
    fill="none"
    viewBox="0 0 26 25"
  >
    <path
      fill={props.color || "#676B73"}
      d="M.5 23.611V1.39A1.39 1.39 0 0 1 1.889 0h9.722v25H1.89A1.39 1.39 0 0 1 .5 23.611m25 0V13.89H14.389V25h9.722a1.39 1.39 0 0 0 1.389-1.389m0-22.222A1.39 1.39 0 0 0 24.111 0H14.39v11.111H25.5z"
    ></path>
  </svg>
);

export default Dashboard;
