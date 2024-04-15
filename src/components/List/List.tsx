import { FC } from 'react';
import { Virtuoso } from 'react-virtuoso';

import styles from './List.module.scss';
import { Itinerary } from '../Itinerary/Itinerary';
import { useQueryItineraries } from '../../hooks/useQueryItineraries';
import { Preloader } from '../Preloader/Preloader';

export const List: FC = () => {
  const { data, isLoading, isError, isLoadingError, fetchNextPage, hasNextPage, isFetching } =
    useQueryItineraries();

  console.log(data?.pages.length);

  return (
    <section className={styles.list}>
      {isLoading && <Preloader />}
      {(isError || isLoadingError) && (
        <p className={styles.list__preloader}>Ошибка при загрузке данных с сервера</p>
      )}
      <Virtuoso
        data={data?.pages.flatMap(page => page?.data ?? []) ?? []}
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
        className={styles.list__infinityScrol}
      />
      {isFetching && !isLoading && <p className={styles.list__preloader}>Загрузка ...</p>}
    </section>
  );
};
