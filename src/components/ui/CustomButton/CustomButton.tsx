import React from 'react'
import './CustomButton.scss'

export type CustomButtonProps = {
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
  addStyle?: string;
};

const CustomButton: React.FC<CustomButtonProps> = ({
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
  addStyle,
}) => {
  return (
    <div
      onClick={() => !disabled && onPress()}
      className={`link ${addStyle}`}
    >
      {title}
    </div>
  );
};

export default CustomButton;