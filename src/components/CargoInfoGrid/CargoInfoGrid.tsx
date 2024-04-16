import { type FC } from 'react';

import styles from './CargoInfoGrid.module.scss';

interface ICargoInfoGridProps {
  cargo: string;
  weight: number;
  volume: number;
  loadingDate: string;
}

export const CargoInfoGrid: FC<ICargoInfoGridProps> = ({ cargo, weight, volume, loadingDate }) => {
  return (
    <div className={styles.cargoInfo}>
      <div className={styles.cargoInfo__line}>
        <p className={styles.cargoInfo__name}>{cargo}</p>
        {/* <p className={styles.cargoInfo__namber}>{`№${act.toUpperCase()}`}</p> */}
        <span className={styles.cargoInfo__date}>{loadingDate}</span>
      </div>
      <div className={styles.cargoInfo__line}>
        <p className={styles.cargoInfo__text}>{`${weight} т./ ${volume} м3`}</p>
        <p className={styles.cargoInfo__text}>{`Тент / полная`}</p>
      </div>
    </div>
  );
};
