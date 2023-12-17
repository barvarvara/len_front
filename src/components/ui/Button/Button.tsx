import React from 'react'
import './Button.scss'

export type ButtonProps = {
  height?: number;
  fontSize?: number;
  title?: string;
  disabled?: boolean;
  bgColorActive?: string;
  bgColorUnactive?: string;
  colorActive?: string;
  colorUnactive?: string;
  alt?: string;
  icon?: React.ReactNode;
  onPress: () => void;
  addStyleClass?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
};

const Button: React.FC<ButtonProps> = ({
  height,
  fontSize,
  title,
  disabled,
  bgColorActive,
  bgColorUnactive,
  colorActive,
  colorUnactive,
  alt,
  icon,
  onPress,
  addStyleClass,
  type
}) => {
  return (
    <button
      onClick={(event) => {
        event.preventDefault()
        return !disabled && onPress()
      }
      }
      className={`button ${addStyleClass}`}
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;