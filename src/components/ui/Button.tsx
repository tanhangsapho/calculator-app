import React from "react";

const Button = ({
  className,
  onClick,
  children,
  span = 1,
}: {
  className: string;
  onClick: () => void;
  children: React.ReactNode;
  span?: number;
}) => {
  return (
    <button
      className={`${className} ${span > 1 ? `col-span-${span}` : ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
