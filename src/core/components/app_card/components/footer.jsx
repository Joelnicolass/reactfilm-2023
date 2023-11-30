import React, { useState } from "react";
import { useCardContext } from "../provider/card_context";

const Footer = ({ children, ...props }) => {
  const { isHovered } = useCardContext();

  return (
    <section
      {...props}
      style={{
        padding: "10px",
        borderTop: "1px solid #ccc",
        backdropFilter: "blur(4px)",
        opacity: isHovered ? "1" : "0",
        transform: isHovered ? "translateY(0)" : "translateY(10px)",
        transition: "all 0.2s ease-in-out",
        ...props.style,
      }}
    >
      {children}
    </section>
  );
};

export default Footer;
