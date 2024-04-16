import { type FC } from 'react';

import listImg from '../../images/list.png';
import gridImg from '../../images/grid.png';

import styles from './ListToggler.module.scss';
import classNames from 'classnames';

export const ListToggler: FC = () => {
  return (
    <div className={styles.listToggle}>
      <button
        type="button"
        className={classNames(styles.listToggle__btn, styles.listToggle__btn_active)}>
        <img
          src={listImg}
          className={styles.listToggle__img}
        />
      </button>
      <button
        type="button"
        className={styles.listToggle__btn}>
        <img
          src={gridImg}
          className={styles.listToggle__img}
        />
      </button>
    </div>
  );
};
