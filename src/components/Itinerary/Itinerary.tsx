import { type FC } from 'react';

import styles from './Itinerary.module.scss';
import type { IItinerary } from '../../utils/mock/mockData';
import { DeliveryRoute } from '../DeliveryRoute/DeliveryRoute';
import { CargoInfo } from '../CargoInfo/CargoInfo';
import { Price } from '../Price/Price';

interface ItineraryProps {
  itenirary: IItinerary;
}

export const Itinerary: FC<ItineraryProps> = ({ itenirary }) => {
  return (
    <div className={styles.itinerary}>
      <DeliveryRoute
        from={itenirary.from}
        fromState={itenirary.fromState}
        to={itenirary.to}
        toState={itenirary.toState}
        distance={itenirary.distance}
        points={itenirary.points}
      />
      <CargoInfo
        cargo={itenirary.cargo}
        weight={itenirary.weight}
        volume={itenirary.volume}
        act={itenirary.act}
        loadingDate={itenirary.loadingDate}
      />
      <Price
        price={itenirary.price}
        fuelPrice={itenirary.fuelPrice}
      />
    </div>
  );
};
