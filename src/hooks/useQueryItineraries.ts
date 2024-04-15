import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchMockData } from '../mock/mockData';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export const useQueryItineraries = () => {
  const filterState = useSelector((state: RootState) => state.filterReducer);

  console.log('useQueryItineraries', filterState.filter);
  return useInfiniteQuery({
    queryKey: ['getItinerary'],
    queryFn: async ({ pageParam = 1 }) => {
      return await fetchMockData(pageParam, filterState.filter);
    },
    initialPageParam: 0,
    getNextPageParam: lastPageData => lastPageData?.nextPage
  });
};
