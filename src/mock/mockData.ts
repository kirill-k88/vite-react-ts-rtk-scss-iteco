import { faker } from '@faker-js/faker/locale/ru';
import { format, lastDayOfDecade } from 'date-fns';
import { ru } from 'date-fns/locale';
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
  from: string | null,
  to: string | null,
  loadingDate: string | null,
  act: string | null
): IItinerary => {
  const date = faker.date.past();
  return {
    id: faker.string.uuid(),
    loadingDate: loadingDate || format(date, 'd MMMM yyyy HH:mm', { locale: ru }),
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

const getMockData = (
  count: number,
  from: string | null = null,
  to: string | null = null,
  loadingDate: string | null = null,
  act: string | null = null
): IItinerary[] => {
  const itineraryList = [];

  for (let i = 0; i < count; i++) {
    itineraryList.push(getItinerary(from, to, loadingDate, act));
  }

  return itineraryList;
};

export const fetchMockData = async (page: number) => {
  try {
    const data = await new Promise<IItinerary[]>((resolve, reject) => {
      setTimeout(() => resolve(getMockData(50)), 2000);
      /*  setTimeout(() => {
        reject('Ошибка сервера');
      }, 2000); */
    });
    return { data, nextPage: page + 1 };
  } catch (err) {
    console.log(`Ошибка при запросе: ${err}`);
    throw new Error(`Ошибка при запросе: ${err}`);
  }
};

export const fetchFilteredMockData = async (
  page: number,
  from: string | null = null,
  to: string | null = null,
  loadingDate: string | null = null,
  act: string | null = null
) => {
  try {
    const data = await new Promise<IItinerary[]>((resolve, reject) => {
      setTimeout(() => resolve(getMockData(50, from, to, loadingDate, act)), 2000);
    });
    return { data, nextPage: page + Math.floor(Math.random() * 2) };
  } catch (err) {
    console.log(`Ошибка при запросе: ${err}`);
    throw new Error(`Ошибка при запросе: ${err}`);
  }
};
