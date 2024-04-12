import { FC } from 'react';

import { List } from './components/List/List';
import { useQueryItineraries } from './hooks/useQueryItineraries';

import './App.css';

export const App: FC = () => {
  const { data, isLoading, isError } = useQueryItineraries();

  return (
    <div>
      <List itineraryLsit={data} />
    </div>
  );
};
