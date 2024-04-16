import { type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import listImg from '../../images/list.png';
import gridImg from '../../images/grid.png';

import styles from './ViewStyleToggler.module.scss';
import { setStyle, viewStyles } from '../../store/slices/viewStyleSlice';
import { RootState } from '../../store/store';

export const ViewStyleToggler: FC = () => {
  const viewStyle = useSelector((state: RootState) => state.viewStyleReducer);
  const dispatch = useDispatch();

  const toggleViewStyleInList = () => {
    dispatch(setStyle({ style: viewStyles.list }));
  };

  const toggleViewStyleInGrid = () => {
    dispatch(setStyle({ style: viewStyles.grid }));
  };

  return (
    <div className={styles.listToggle}>
      <button
        type="button"
        className={classNames(styles.listToggle__btn, {
          [styles.listToggle__btn_active]: viewStyle.style === viewStyles.list
        })}
        onClick={toggleViewStyleInList}
      >
        <img src={listImg} className={styles.listToggle__img} />
      </button>
      <button
        type="button"
        className={classNames(styles.listToggle__btn, {
          [styles.listToggle__btn_active]: viewStyle.style === viewStyles.grid
        })}
        onClick={toggleViewStyleInGrid}
      >
        <img src={gridImg} className={styles.listToggle__img} />
      </button>
    </div>
  );
};
