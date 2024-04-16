import { type FC } from 'react';

import { DeliveryRoute } from '../DeliveryRoute/DeliveryRoute';
import { IItinerary } from '../../mock/mockData';
import { CargoInfoGrid } from '../CargoInfoGrid/CargoInfoGrid';

import styles from './ItineraryCard.module.scss';
interface ItineraryCardProps {
  itenirary: IItinerary;
}

export const ItineraryCard: FC<ItineraryCardProps> = ({ itenirary }) => {
  return (
    <div className={styles.itineraryCard}>
      <DeliveryRoute
        from={itenirary.from}
        fromState={itenirary.fromState}
        to={itenirary.to}
        toState={itenirary.toState}
        distance={itenirary.distance}
        points={itenirary.points}
      />
      <CargoInfoGrid
        cargo={itenirary.cargo}
        weight={itenirary.weight}
        volume={itenirary.volume}
        loadingDate={itenirary.loadingDate}
      />
    </div>
  );
};
