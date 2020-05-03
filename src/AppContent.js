import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { paramsStore } from './ParamsStore';

const AppContent = ({ title }) => {
  const { id } = useParams();
  
  useEffect(() => {
    //needed to avoid warning https://stackoverflow.com/questions/60526786/react-warning-cannot-update-a-component-from-inside-the-function-body-of-a-diff
    paramsStore.updateParams(id);
  }, [id])
  
  return (
    <div>
      {title}
      <h3>ID directly from params: {id || 'not defined'}</h3>
    </div>
  );
}

export default AppContent;