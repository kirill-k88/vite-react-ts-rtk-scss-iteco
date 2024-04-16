import { type FC } from 'react';

import styles from './Price.module.scss';

interface IPriceProps {
  price: number;
  fuelPrice: number;
}

export const Price: FC<IPriceProps> = ({ price, fuelPrice }) => {
  return (
    <div className={styles.price}>
      <p className={styles.price__price}>{`${price} ₽`}</p>
      <p className={styles.price__fuelPrice}>{`ГСМ: ${fuelPrice} ₽`}</p>
    </div>
  );
};
