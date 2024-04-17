import { useState, type FC } from 'react';

import { List } from '../List/List';
import { FilterForm } from '../FilterForm/FilterForm';
import { ViewStyleToggler } from '../ViewStyleToggler/ViewStyleToggler';

import './App.css';

export const App: FC = () => {
  const [filterShow, setFilterShow] = useState(false);

  return (
    <div className="mainContainer">
      <FilterForm filterShow={filterShow} />
      <ViewStyleToggler
        filterShow={filterShow}
        setFilterShow={setFilterShow}
      />
      <List filterShow={filterShow} />
    </div>
  );
};
