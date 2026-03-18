import * as React from "react";

const Search: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="21"
    fill="none"
    viewBox="0 0 22 21"
  >
    <path
      stroke={props.color || "white"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="3"
      d="M15.673 15.141 20 19.5m-2-10a8 8 0 1 1-16 0 8 8 0 0 1 16 0"
    ></path>
  </svg>
);

export default Search;
