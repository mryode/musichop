import uuid from 'uuid';

export const shopsData = [
  {
    id: uuid.v4(),
    title: 'Drums',
    routeName: 'drums',
    items: [
      {
        id: uuid.v4(),
        name: 'Pearl P-10',
        imageUrl: `${process.env.PUBLIC_URL}/products/drums/pearl-1.jpg`,
        price: 200,
      },
      {
        id: uuid.v4(),
        name: 'YAMAHA 2020',
        imageUrl: `${process.env.PUBLIC_URL}/products/drums/yamaha-1.jpg`,
        price: 425,
      },
      {
        id: uuid.v4(),
        name: 'Roland TD-3',
        imageUrl: `${process.env.PUBLIC_URL}/products/drums/roland-1.jpg`,
        price: 250,
      },
      {
        id: uuid.v4(),
        name: 'DW Collectors Series',
        imageUrl: `${process.env.PUBLIC_URL}/products/drums/dw-1.jpg`,
        price: 1400,
      },
      {
        id: uuid.v4(),
        name: 'Planet Earth',
        imageUrl: `${process.env.PUBLIC_URL}/products/drums/planet-1.jpg`,
        price: 180,
      },
    ],
  },
];
