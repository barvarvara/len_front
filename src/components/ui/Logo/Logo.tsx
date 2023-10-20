import './Logo.scss';
import React from 'react';

export type LogoProps = {
  addStyle?: string;
}

const Logo: React.FC<LogoProps> = ({addStyle}) => {
  return (
    <a href="/" className={`logo ${addStyle}`}> </a>
  )
}

export default Logo;