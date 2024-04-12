import { FC } from 'react';

import { IItinerary } from '../../mock/mockData';
import styles from './List.module.scss';
import { Itinerary } from '../Itinerary/Itinerary';

interface IListProps {
  itineraryLsit: IItinerary[] | undefined;
}

export const List: FC<IListProps> = ({ itineraryLsit }) => {
  console.log('props', itineraryLsit);
  return (
    <section className={styles.list}>
      {itineraryLsit &&
        itineraryLsit.map(i => (
          <Itinerary
            key={i.id}
            itenirary={i}
          />
        ))}
    </section>
  );
};
