import { faker } from '@faker-js/faker/locale/ru';
import { format, parseISO } from 'date-fns';
import { ru } from 'date-fns/locale';
import { IFilter } from '../types/types';
export interface IItinerary {
  id: string;
  loadingDate: string;
  from: string;
  fromState: string;
  to: string;
  toState: string;
  distance: number;
  points: number;
  cargo: string;
  weight: number;
  volume: number;
  act: string;
  price: number;
  fuelPrice: number;
}

const districtReplace = (district: string): string => {
  return district
    .replace('Республика', 'Рес.')
    .replace('область', 'обл.')
    .replace('край', 'кр.')
    .replace('автономный округ', 'авт. окр.');
};

const getItinerary = (
  from: string | undefined,
  to: string | undefined,
  loadingDate: string | undefined,
  act: string | undefined
): IItinerary => {
  const date = faker.date.past();
  return {
    id: faker.string.uuid(),
    loadingDate:
      (loadingDate && format(parseISO(loadingDate), 'd MMMM yyyy HH:mm', { locale: ru })) ||
      format(date, 'd MMMM yyyy HH:mm', { locale: ru }),
    from: from || faker.location.city(),
    fromState: districtReplace(faker.location.state()),
    to: to || faker.location.city(),
    toState: districtReplace(faker.location.state()),
    distance: Math.floor(Math.random() * (1500 - 500 + 1)) + 500,
    points: Math.floor(Math.random() * 6) + 1,
    cargo: faker.commerce.productName(),
    weight: Math.floor(Math.random() * 4) + 1,
    volume: Math.floor(Math.random() * 4) + 1,
    act: act || faker.string.alphanumeric(5),
    price: Math.floor(Math.random() * (15000 - 500 + 1)) + 500,
    fuelPrice: Math.floor(Math.random() * (15000 - 500 + 1)) + 500
  };
};

const getMockData = (count: number, filter: IFilter): IItinerary[] => {
  const itineraryList = [];

  for (let i = 0; i < count; i++) {
    itineraryList.push(getItinerary(filter.from, filter.to, filter.loadingDate, filter.act));
  }

  return itineraryList;
};

export const fetchMockData = async (page: number, filter: IFilter) => {
  try {
    const data = await new Promise<IItinerary[]>(resolve => {
      setTimeout(() => resolve(getMockData(filter.act ? 1 : 50, filter)), 2000);
      /*  setTimeout(() => {
        reject('Ошибка сервера');
      }, 2000); */
    });
    return { data, nextPage: filter.act ? undefined : page + 1 };
  } catch (err) {
    console.log(`Ошибка при запросе: ${err}`);
    throw new Error(`Ошибка при запросе: ${err}`);
  }
};
