import React from 'react';

interface Props {
  isLoading: boolean;
  options: string[];
}
export const SomeComp: React.FC<Props> = ({ options, isLoading }) => (
  <div style={{ maxHeight: 500 }} className="overflow-auto">
    {isLoading ? (
      <span>dfs</span>
    ) : (
      options.map(option => (
        <div className="flex flex-col mb-1" key={option}>
          {option}
        </div>
      ))
    )}
  </div>
);
