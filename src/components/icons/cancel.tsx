
export const CancelIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      width="16px"
      height="16px"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      className={className}
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <defs></defs> <title></title>{" "}
        <g id="cross">
          {" "}
          <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2px"
            x1="7"
            x2="25"
            y1="7"
            y2="25"
          ></line>{" "}
          <line
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2px"
            x1="7"
            x2="25"
            y1="25"
            y2="7"
          ></line>{" "}
        </g>{" "}
      </g>
    </svg>
  );
}
