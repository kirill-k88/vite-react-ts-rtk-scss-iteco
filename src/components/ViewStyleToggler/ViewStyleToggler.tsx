import { Dispatch, SetStateAction, type FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';

import listImg from '../../utils/images/list.png';
import gridImg from '../../utils/images/grid.png';
import filterImg from '../../utils/images/filter.png';

import styles from './ViewStyleToggler.module.scss';
import { setStyle, EViewStyles } from '../../store/slices/viewStyleSlice';
import { RootState } from '../../store/store';

interface IViewStyleTogglerProps {
  filterShow: boolean;
  setFilterShow: Dispatch<SetStateAction<boolean>>;
}

export const ViewStyleToggler: FC<IViewStyleTogglerProps> = ({ filterShow, setFilterShow }) => {
  const viewStyle = useSelector((state: RootState) => state.viewStyleReducer);
  const dispatch = useDispatch();

  const toggleViewStyleInList = () => {
    dispatch(setStyle({ style: EViewStyles.list }));
  };

  const toggleViewStyleInGrid = () => {
    dispatch(setStyle({ style: EViewStyles.grid }));
  };

  const togglefilterState = () => {
    setFilterShow(prevVal => !prevVal);
  };

  return (
    <div className={styles.listToggle}>
      <button
        type="button"
        className={classNames(styles.listToggle__btn, {
          [styles.listToggle__btn_active]: filterShow
        })}
        onClick={togglefilterState}>
        <img
          src={filterImg}
          className={styles.listToggle__img}
        />
      </button>
      <div className={styles.listToggle__toggleContainer}>
        <button
          type="button"
          className={classNames(styles.listToggle__btn, {
            [styles.listToggle__btn_active]: viewStyle.style === EViewStyles.list
          })}
          onClick={toggleViewStyleInList}>
          <img
            src={listImg}
            className={styles.listToggle__img}
          />
        </button>
        <button
          type="button"
          className={classNames(styles.listToggle__btn, {
            [styles.listToggle__btn_active]: viewStyle.style === EViewStyles.grid
          })}
          onClick={toggleViewStyleInGrid}>
          <img
            src={gridImg}
            className={styles.listToggle__img}
          />
        </button>
      </div>
    </div>
  );
};
