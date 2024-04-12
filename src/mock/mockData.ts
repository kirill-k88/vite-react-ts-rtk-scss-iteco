import { faker } from '@faker-js/faker/locale/ru';
import { format } from 'date-fns';
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

const getItinerary = (): IItinerary => {
  const date = faker.date.past();
  return {
    id: faker.string.uuid(),
    loadingDate: format(date, 'd MMMM yyyy HH:mm', { locale: ru }),
    from: faker.location.city(),
    fromState: districtReplace(faker.location.state()),
    to: faker.location.city(),
    toState: districtReplace(faker.location.state()),
    distance: Math.floor(Math.random() * (1500 - 500 + 1)) + 500,
    points: Math.floor(Math.random() * 6) + 1,
    cargo: faker.commerce.productName(),
    weight: Math.floor(Math.random() * 4) + 1,
    volume: Math.floor(Math.random() * 4) + 1,
    act: faker.string.alphanumeric(5),
    price: Math.floor(Math.random() * (15000 - 500 + 1)) + 500,
    fuelPrice: Math.floor(Math.random() * (15000 - 500 + 1)) + 500
  };
};

const getMockData = (count: number): IItinerary[] => {
  const itineraryList = [];

  for (let i = 0; i < count; i++) {
    itineraryList.push(getItinerary());
  }

  return itineraryList;
};

export const fetchMockData = async (count: number) => {
  try {
    const data = await new Promise<IItinerary[]>(resolve => {
      setTimeout(() => resolve(getMockData(count)), 2000);
    });
    return data;
  } catch (err) {
    console.log('Ошибка при запросе:', err);
  }
};
