import React from 'react'
import './Tabs.scss'

export type Tab = {
  id: string | number;
  label: string | number;
}

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
    <div className={"tabs"}>
      {tabs &&
        tabs.map(tab => (
            <div className={`tab ${className}`}
                 key={tab.id}
                 onClick={() => onClick(tab.id)}>
              {tab.label}
            </div>
        ))}
    </div>
  );
};

export default Tabs;