import React from "react";
import { sizes } from "../../constants";

const AppTitle = ({ children, size = sizes.md, ...props }) => {
  return (
    <h2
      {...props}
      style={{
        color: "white",
        fontSize: size,
        fontWeight: "bold",
        margin: "0 0 0.5rem 0",
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
        ...props.style,
      }}
    >
      {children}
    </h2>
  );
};

export default AppTitle;
