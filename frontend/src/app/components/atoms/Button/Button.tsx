// src/components/atoms/Button.tsx
import React from "react";

interface ButtonProps {
  /** 子要素 */
  children: React.ReactNode;
  /** クリック時の処理 */
  onClick?: () => void;
  /** リンク先 */
  href?: string;
  /** css style */
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  href = "",
  className = "h-[26px] px-[4px] py-0 text-[12px] leading-[26px] bg-gray-0 hover:bg-gray-100 border-[1px] border-solid border-borderColor-default rounded-[100px] flex items-center relative justify-center ",
}) => {
  if (href === "") {
    return (
      <button
        // className={`bg-blue-500 hover:bg-blue-600 text-black font-semibold py-2 px-4 rounded  ${className}`}
        className={` bg-gray-0 hover:bg-gray-100 ${className}`}
        onClick={onClick}
      >
        {children}
      </button>
    );
  } else {
    return (
      <a className={` bg-gray-0 hover:bg-gray-100 ${className}`} href={href}>
        {children}
      </a>
    );
  }
};

export default Button;
