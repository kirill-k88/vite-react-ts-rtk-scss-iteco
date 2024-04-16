import { FC } from 'react';
import { VirtuosoGrid } from 'react-virtuoso';
import { ItineraryCard } from '../ItineraryCard/ItineraryCard';

const gridComponents = {
  List: forwardRef(({ style, children }, ref) => (
    <div
      ref={ref}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '19px',
        ...style
      }}
    >
      {children}
    </div>
  ))
};

export const Grid: FC = () => {
  return (
    <VirtuosoGrid
      data={data?.pages.flatMap(page => page?.data ?? []) ?? []}
      itemContent={(_, item) => <ItineraryCard />}
      endReached={() => {
        if (hasNextPage) {
          fetchNextPage();
        }
      }}
      className={classNames(styles.list__infinityScroll, styles.list__infinityScroll_grid)}
    />
  );
};
