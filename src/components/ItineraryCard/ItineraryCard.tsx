import { type FC } from 'react';

import { DeliveryRoute } from '../DeliveryRoute/DeliveryRoute';
import type { IItinerary } from '../../utils/mock/mockData';
import { CargoInfoGrid } from '../CargoInfoGrid/CargoInfoGrid';
import { Price } from '../Price/Price';

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
      <div className={styles.itineraryCard__priceContainer}>
        <Price
          price={itenirary.price}
          fuelPrice={itenirary.fuelPrice}
        />
        <button
          type="submit"
          className={styles.itineraryCard__btn}>
          ОТКЛИКНУТЬСЯ
        </button>
      </div>
      <p className={styles.itineraryCard__namber}>{`№${itenirary.act.toUpperCase()}`}</p>
    </div>
  );
};
