import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => {
  const menuItems = ['All Tasks', 'Completed Tasks', 'Pending Tasks', 'Overdue Tasks'];

  return (
    <List style={{ width: '250px', backgroundColor: '#1e293b', height: '100vh', color: 'white' }}>
      {menuItems.map((item, index) => (
        <ListItem button key={index}>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  );
};

export default Sidebar;
