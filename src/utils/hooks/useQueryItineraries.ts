import { useInfiniteQuery, useQueryClient } from '@tanstack/react-query';
import { fetchMockData } from '../mock/mockData';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useEffect } from 'react';

export const useQueryItineraries = () => {
  const filterState = useSelector((state: RootState) => state.filterReducer);

  const queryClient = useQueryClient();
  useEffect(() => {
    queryClient.removeQueries({ queryKey: ['getItinerary'] });
  }, [filterState.filter, queryClient]);

  return useInfiniteQuery({
    queryKey: ['getItinerary', filterState.filter],
    queryFn: async ({ pageParam = 1 }) => {
      return await fetchMockData(pageParam, filterState.filter);
    },
    initialPageParam: 0,
    getNextPageParam: lastPageData => lastPageData?.nextPage,
    refetchInterval: false
  });
};
