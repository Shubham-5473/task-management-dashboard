import React, { useState } from 'react';

const TaskFilters = ({ onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState('all');

  const filters = [
    { label: 'All Tasks', value: 'all' },
    { label: 'Completed Tasks', value: 'completed' },
    { label: 'Pending Tasks', value: 'pending' },
    { label: 'Overdue Tasks', value: 'overdue' },
  ];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
    onFilterChange(filter);
  };

  return (
    <div style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
      {filters.map((filter) => (
        <button
          key={filter.value}
          onClick={() => handleFilterClick(filter.value)}
          style={{
            padding: '10px 15px',
            backgroundColor: activeFilter === filter.value ? '#2563eb' : '#1e293b',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};

export default TaskFilters;
