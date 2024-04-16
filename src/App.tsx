import { type FC } from 'react';

import { List } from './components/List/List';
import { FilterForm } from './components/FilterForm/FilterForm';
import { ViewStyleToggler } from './components/ViewStyleToggler/ViewStyleToggler';

import './App.css';

export const App: FC = () => {
  return (
    <div className="mainContainer">
      <FilterForm />
      <ViewStyleToggler />
      <List />
    </div>
  );
};
