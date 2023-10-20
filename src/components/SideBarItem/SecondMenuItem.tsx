import React, { ReactNode } from 'react'
import './SideBarItem.scss'

export type SecondMenuItemProps = {
  addStyle?: string,
  href?: string,
  children: ReactNode
}

const SecondMenuItem: React.FC<SecondMenuItemProps> = ({
  href,
  children
}) => {
  return (
    <figure className="sidebar-card">
      <figcaption>
        <p> {children} </p>

        <a href={`${href}`}> </a>
      </figcaption>
    </figure>
  );
};

export default SecondMenuItem;