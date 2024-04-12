import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchMockData } from '../mock/mockData';

export const useQueryItineraries = () =>
  useInfiniteQuery({
    queryKey: ['getItinerary'],
    queryFn: async ({ pageParam = 1 }) => {
      return await fetchMockData(pageParam);
    },
    initialPageParam: 0,
    getNextPageParam: lastPageData => lastPageData?.nextPage
  });
