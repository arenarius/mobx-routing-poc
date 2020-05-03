import React from 'react';
import { observer } from 'mobx-react';
import { paramsStore } from './ParamsStore';

const ParamsIndicator = (props) => {
  let id = paramsStore.params;
  return (
    <div>
      <h3>ID from paramsStore: {id || 'not here...'}</h3>
    </div>
  );
}


export default observer(ParamsIndicator);