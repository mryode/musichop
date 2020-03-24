import uuid from 'uuid';

export const sections = [
  {
    title: 'drums',
    imageUrl: `${process.env.PUBLIC_URL}/products/drums/sectionImg.jpg`,
    id: uuid.v4(),
  },
  {
    title: 'pianos',
    imageUrl: `${process.env.PUBLIC_URL}/products/pianos/sectionImg.jpg`,
    id: uuid.v4(),
  },
  {
    title: 'audio',
    imageUrl: `${process.env.PUBLIC_URL}/products/audio/sectionImg.jpg`,
    id: uuid.v4(),
  },
  {
    title: 'basses',
    imageUrl: `${process.env.PUBLIC_URL}/products/basses/sectionImg.jpg`,
    size: 'large',
    id: uuid.v4(),
  },
  {
    title: 'guitars',
    imageUrl: `${process.env.PUBLIC_URL}/products/guitars/sectionImg.jpg`,
    size: 'large',
    id: uuid.v4(),
  },
];
