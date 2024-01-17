import './TextInput.scss';
import React from 'react';

export type TextInputProps = {
  placeholder: string,
  label?: string,
  addStyle?: string,
  value?: string,
  onChangeText: (t: string) => void;
  secure?: boolean;
  inputType?: string;
}

const TextInput: React.FC<TextInputProps> = ({
  placeholder,
  label,
  addStyle,
  value,
  onChangeText,
  secure,
  inputType,
}) => {
  return (
    <>
      {label &&
        <label> {label} </label>
      }

      <div className="text-input">
        <input className={`form-text-input ${addStyle}`}
               placeholder={`${placeholder}`}
               value={value}
               onChange={(event) => onChangeText(event.target.value)}
               type={inputType ?? (secure ? 'password' : 'text')}
        />
      </div>

    </>
  )
}

export default TextInput;