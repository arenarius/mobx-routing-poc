import React from 'react';
import { useParams } from 'react-router-dom';

const AppContent = ({ title }) => {
  let { id } = useParams();
  return (
    <div>
      {title}
      <h3>ID: {id || 'not defined'}</h3>
    </div>
  );
}

export default AppContent;