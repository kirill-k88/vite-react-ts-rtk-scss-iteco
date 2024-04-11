import { faker } from '@faker-js/faker';

interface IItinerary {
  id: string;
  loadingDate: Date;
  from: string;
  to: string;
  distance: number;
  points: number;
  cargo: string;
  weight: number;
  volume: number;
  act: string;
  price: number;
  fuelPrice: number;
}

const getItinerary = () => {
  return {
    id: faker.string.uuid(),
    loadingDate: faker.date.past(),
    from: faker.location.city(),
    to: faker.location.city(),
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

export const getMockData = (count: number): IItinerary[] => {
  return '1'
    .repeat(count)
    .split('')
    .map(i => getItinerary);
};
