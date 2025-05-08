import React from "react";

const Logo = ({ className = "", ...props }) => (
  <img
    src={`${import.meta.env.BASE_URL}assets/logo.png`}
    alt="Eventual Logo"
    className={`h-8 w-auto ${className}`}
    {...props}
  />
);

export default Logo; 