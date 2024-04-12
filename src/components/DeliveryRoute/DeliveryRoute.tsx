import { FC } from 'react';

import styles from './DeliveryRoute.module.scss';

interface IDeliveryRouteProps {
  from: string;
  fromState: string;
  to: string;
  toState: string;
  distance: number;
  points: number;
}

export const DeliveryRoute: FC<IDeliveryRouteProps> = ({
  from,
  fromState,
  to,
  toState,
  distance,
  points
}) => {
  const getPoints = (): string => {
    if (!points) return '';
    let str = 'пункт';
    if (points > 1 && points < 5) {
      str = 'пункта';
    }
    if (points >= 5) {
      str = 'пунктов';
    }
    return `+${points} ${str}`;
  };

  return (
    <div className={styles.deliveryRoute}>
      <div className={styles.deliveryRoute__address}>
        <p className={styles.deliveryRoute__text_span}>{from}</p>
        <p className={styles.deliveryRoute__text}>{fromState}</p>
      </div>
      <div className={styles.deliveryRoute__address}>
        <p className={styles.deliveryRoute__text_span}>{to}</p>
        <p className={styles.deliveryRoute__text}>{toState}</p>
      </div>
      <div className={styles.deliveryRoute__distance}>
        <p className={styles.deliveryRoute__destinationText}>
          Расстояние: <span className={styles.deliveryRoute__destinationText_span}>{distance}</span>{' '}
          км
        </p>
        <p className={styles.deliveryRoute__points}>{getPoints()}</p>
      </div>
    </div>
  );
};
