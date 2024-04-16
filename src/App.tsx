import { type FC } from 'react';

import { List } from './components/List/List';
import { FilterForm } from './components/FilterForm/FilterForm';
import { ListToggler } from './components/ListToggler/ListToggler';

import './App.css';

export const App: FC = () => {
  return (
    <div className="mainContainer">
      <FilterForm />
      <ListToggler />
      <List />
    </div>
  );
};
