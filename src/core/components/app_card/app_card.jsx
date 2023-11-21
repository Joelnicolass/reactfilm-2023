import React from "react";

const Header = ({ children }) => {
  return <section>{children}</section>;
};

const Body = () => {
  return <section>Body</section>;
};

const Footer = () => {
  return <section>Footer</section>;
};

const AppCard = ({ children }) => {
  return <article>{children}</article>;
};

AppCard.Header = Header;
AppCard.Body = Body;
AppCard.Footer = Footer;

export default AppCard;
