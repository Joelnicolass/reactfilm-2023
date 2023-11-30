import React from "react";
import { createPortal } from "react-dom";

const AppModal = ({ children, onClickedOut = () => {}, open }) => {
  return (
    <>
      {open &&
        createPortal(
          <div
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                onClickedOut();
              }
            }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
          >
            {children}
          </div>,
          document.body
        )}
    </>
  );
};

export default AppModal;
