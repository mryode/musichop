const MINIFIED = true;

export const sections = [
  {
    id: '123-111-111-111',
    title: 'drums',
    imageUrl: `${process.env.PUBLIC_URL}/products/drums/sectionImg${
      MINIFIED ? '-min' : ''
    }.jpg`,
    linkUrl: 'shop/drums',
  },
  {
    id: '123-111-111-222',
    title: 'pianos',
    imageUrl: `${process.env.PUBLIC_URL}/products/pianos/sectionImg${
      MINIFIED ? '-min' : ''
    }.jpg`,
    linkUrl: 'shop/pianos',
  },
  {
    id: '123-111-111-333',
    title: 'audio',
    imageUrl: `${process.env.PUBLIC_URL}/products/audio/sectionImg${
      MINIFIED ? '-min' : ''
    }.jpg`,
    linkUrl: 'shop/audio',
  },
  {
    id: '123-111-111-444',
    title: 'basses',
    imageUrl: `${process.env.PUBLIC_URL}/products/basses/sectionImg${
      MINIFIED ? '-min' : ''
    }.jpg`,
    linkUrl: 'shop/basses',
    size: 'large',
  },
  {
    id: '123-111-111-555',
    title: 'guitars',
    imageUrl: `${process.env.PUBLIC_URL}/products/guitars/sectionImg${
      MINIFIED ? '-min' : ''
    }.jpg`,
    linkUrl: 'shop/guitars',
    size: 'large',
  },
];
