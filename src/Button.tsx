import { useState, type FC } from "react";

const Button: FC = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <button
        className={isActive ? "enabled" : "disabled"}
        onClick={() => setIsActive(!isActive)}
      >
        {isActive ? "on" : "off"}
      </button>
    </div>
  );
};

export default Button;
