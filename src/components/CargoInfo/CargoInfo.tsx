import { FC } from 'react';

import styles from './CargoInfo.module.scss';

interface ICargoInfoProps {
  cargo: string;
  weight: number;
  volume: number;
  act: string;
  loadingDate: Date;
}

export const CargoInfo: FC<ICargoInfoProps> = ({ cargo, weight, volume, act, loadingDate }) => {
  return (
    <div className={styles.cargoInfo}>
      <div className={styles.cargoInfo__line}>
        <p className={styles.cargoInfo__name}>{cargo}</p>
        <p className={styles.cargoInfo__namber}>{`№${act.toUpperCase()}`}</p>
      </div>
      <div className={styles.cargoInfo__line}>
        <p className={styles.cargoInfo__text}>{`${weight} т./ ${volume} м3`}</p>
        <p className={styles.cargoInfo__text}>{`Тент / полная`}</p>
      </div>
      <div className={styles.cargoInfo__line}>
        <p className={styles.cargoInfo__text}>
          {`Погрузка: `}
          <span className={styles.cargoInfo__date}>{loadingDate}</span>
        </p>
      </div>
    </div>
  );
};
