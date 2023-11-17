import React from 'react'
import './Tabs.scss'
import { Tab } from '../../types/types';

export type TabsProps = {
  selectedId: string | number;
  tabs: Tab[];
  onClick: (id: string | number) => void;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({
  className,
  selectedId,
  tabs,
  onClick
}) => {
  return (
    <div className="tabs">
      {tabs &&
        tabs.map(tab => (
            <div className={`tab ${className} ${tab.id === selectedId ? "tab_selected" : "" }`}
                 key={tab.id}
                 onClick={() => onClick(tab.id)}>
              <p className={`tab__label ${tab.id === selectedId ? "tab__label_selected" : "" }`}>
                {tab.label}
              </p>
            </div>
        ))}
    </div>
  );
};

export default Tabs;