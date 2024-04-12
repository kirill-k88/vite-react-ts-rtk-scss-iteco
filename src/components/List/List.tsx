import { FC } from 'react';
import { Virtuoso } from 'react-virtuoso';

import styles from './List.module.scss';
import { Itinerary } from '../Itinerary/Itinerary';
import { useQueryItineraries } from '../../hooks/useQueryItineraries';

export const List: FC = () => {
  const { data, isLoading, isError, isLoadingError, fetchNextPage, hasNextPage, isFetching } =
    useQueryItineraries();

  return (
    <section className={styles.list}>
      {isLoading && <p>Грузим</p>}
      {(isError || isLoadingError) && <p>Ошибка при загрузке данных с сервера</p>}
      <Virtuoso
        data={data?.pages.flatMap(page => page?.data ?? []) ?? []}
        itemContent={(_, item) => <Itinerary key={item?.id} itenirary={item} />}
        endReached={() => {
          if (hasNextPage) {
            fetchNextPage();
          }
        }}
        className={styles.list__infinityScrol}
      />
      {isFetching && !isLoading && <p>Загрузка ...</p>}
    </section>
  );
};
