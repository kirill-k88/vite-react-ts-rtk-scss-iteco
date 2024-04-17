import { useMemo, type FC } from 'react';
import { Virtuoso, VirtuosoGrid } from 'react-virtuoso';
import classNames from 'classnames';

import styles from './List.module.scss';
import { Itinerary } from '../Itinerary/Itinerary';
import { useQueryItineraries } from '../../utils/hooks/useQueryItineraries';
import { Preloader } from '../Preloader/Preloader';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import { EViewStyles } from '../../store/slices/viewStyleSlice';
import { ItineraryCard } from '../ItineraryCard/ItineraryCard';
import { FETCH_SERVER_ERROR } from '../../utils/constants/constants';

interface IListProps {
  filterShow: boolean;
}

export const List: FC<IListProps> = ({ filterShow }) => {
  const viewStyle = useSelector((state: RootState) => state.viewStyleReducer);
  const { data, isLoading, isError, isLoadingError, fetchNextPage, hasNextPage, isFetching } =
    useQueryItineraries();

  return (
    <section className={classNames(styles.list, { [styles.list_wholeScreen]: !filterShow })}>
      {isLoading && <Preloader />}
      {(isError || isLoadingError) && (
        <p className={styles.list__preloader}>{FETCH_SERVER_ERROR}</p>
      )}
      {viewStyle.style === EViewStyles.list ? (
        <Virtuoso
          useWindowScroll
          data={data?.pages.flatMap(page => page?.data ?? []) ?? []}
          components={{
            Footer: () =>
              isFetching && !isLoading && <p className={styles.list__preloader}>Загрузка ...</p>
          }}
          itemContent={(_, item) => (
            <Itinerary
              key={item?.id}
              itenirary={item}
            />
          )}
          endReached={() => {
            if (hasNextPage) {
              fetchNextPage();
            }
          }}
          className={classNames(styles.list__infinityScroll, styles.list__infinityScroll_list)}
        />
      ) : (
        <VirtuosoGrid
          useWindowScroll
          data={data?.pages.flatMap(page => page?.data ?? []) ?? []}
          components={{
            Footer: () =>
              isFetching && !isLoading && <p className={styles.list__preloader}>Загрузка ...</p>
          }}
          itemContent={(_, item) => (
            <ItineraryCard
              key={item?.id}
              itenirary={item}
            />
          )}
          endReached={() => {
            if (hasNextPage) {
              fetchNextPage();
            }
          }}
          listClassName={classNames(styles.list__infinityScroll, styles.list__infinityScroll_grid)}
        />
      )}
    </section>
  );
};
