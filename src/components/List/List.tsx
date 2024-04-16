import { type FC } from 'react';
import { Virtuoso, VirtuosoGrid } from 'react-virtuoso';

import styles from './List.module.scss';
import { Itinerary } from '../Itinerary/Itinerary';
import { useQueryItineraries } from '../../hooks/useQueryItineraries';
import { Preloader } from '../Preloader/Preloader';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { EViewStyles } from '../../store/slices/viewStyleSlice';
import { ItineraryCard } from '../ItineraryCard/ItineraryCard';
import classNames from 'classnames';

export const List: FC = () => {
  const viewStyle = useSelector((state: RootState) => state.viewStyleReducer);
  const { data, isLoading, isError, isLoadingError, fetchNextPage, hasNextPage, isFetching } =
    useQueryItineraries();

  return (
    <section className={styles.list}>
      {isLoading && <Preloader />}
      {(isError || isLoadingError) && (
        <p className={styles.list__preloader}>Ошибка при загрузке данных с сервера</p>
      )}
      {viewStyle.style === EViewStyles.list ? (
        <Virtuoso
          data={data?.pages.flatMap(page => page?.data ?? []) ?? []}
          itemContent={(_, item) => <Itinerary key={item?.id} itenirary={item} />}
          endReached={() => {
            if (hasNextPage) {
              fetchNextPage();
            }
          }}
          className={classNames(styles.list__infinityScroll, styles.list__infinityScroll_list)}
        />
      ) : (
        <VirtuosoGrid
          data={data?.pages.flatMap(page => page?.data ?? []) ?? []}
          itemContent={(_, item) => <ItineraryCard key={item?.id} itenirary={item} />}
          endReached={() => {
            if (hasNextPage) {
              fetchNextPage();
            }
          }}
          listClassName={classNames(styles.list__infinityScroll, styles.list__infinityScroll_grid)}
        />
      )}
      {isFetching && !isLoading && <p className={styles.list__preloader}>Загрузка ...</p>}
    </section>
  );
};
