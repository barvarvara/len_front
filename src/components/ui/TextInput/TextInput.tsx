import './TextInput.scss';
import React from 'react';

export type TextInputProps = {
  placeholder: string,
  label?: string,
  addStyle?: string,
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  label,
  addStyle
}) => {
  return (
    <>
      {label &&
        <label> {label} </label>
      }

      <div className="text-input">
        <input className={`form-text-input ${addStyle}`} placeholder={`${placeholder}`}/>
      </div>

    </>
  )
}

export default TextInput;