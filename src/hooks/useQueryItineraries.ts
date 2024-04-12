import { useQuery } from '@tanstack/react-query';
import { fetchMockData } from '../mock/mockData';

export const useQueryItineraries = () =>
  useQuery({
    queryKey: ['getItinerary'],
    queryFn: async () => {
      return await fetchMockData(50);
    }
  });
