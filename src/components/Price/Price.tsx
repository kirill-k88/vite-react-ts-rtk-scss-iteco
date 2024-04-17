import { type FC } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { EViewStyles } from '../../store/slices/viewStyleSlice';
import questionImg from '../../utils/images/question.png';

import stylesList from './PriceList.module.scss';
import stylesGrid from './PriceGrid.module.scss';
interface IPriceProps {
  price: number;
  fuelPrice: number;
}

export const Price: FC<IPriceProps> = ({ price, fuelPrice }) => {
  const viewStyle = useSelector((state: RootState) => state.viewStyleReducer);
  const styles = viewStyle.style === EViewStyles.list ? stylesList : stylesGrid;

  return (
    <div className={styles.price}>
      <p className={styles.price__price}>{`${price} ₽`}</p>
      <p className={styles.price__fuelPrice}>
        {viewStyle.style === EViewStyles.grid && (
          <img
            src={questionImg}
            className={styles.price__img}
          />
        )}
        {`ГСМ: ${fuelPrice} ₽`}
      </p>
    </div>
  );
};
