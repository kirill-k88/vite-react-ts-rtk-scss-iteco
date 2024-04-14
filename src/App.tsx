import { type FC } from 'react';

import { List } from './components/List/List';

import './App.css';
import { FilterForm } from './components/FilterForm/FilterForm';

export const App: FC = () => {
  return (
    <div className="mainContainer">
      <FilterForm />
      <List />
    </div>
  );
};
