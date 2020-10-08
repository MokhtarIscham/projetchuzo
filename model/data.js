const Images = [
  {image: require('../assets/banners/RAFA_VENDIENDO_SUS_LIBROS.jpg')},
  {image: require('../assets/banners/RAFA_MELÓMANO.jpg')},
  {image: require('../assets/banners/RAFA_CON_CREDENCIAL_DE_ERIODISTA.jpg')},
];

export const data = [
  {
    id: '1',
    coordinate: {
      latitude: 22.6293867,
      longitude: 88.4354486,
    },
    title: 'Evenement 1',
    description: ` dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
      
      Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
    image: Images[0].image,
    rating: 4,
    reviews: 99,
    categories: ['Poeme', 'Auteuyr', 'Dineout'],
  },
  {
    id: '2',

    title: 'Evenement 2',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
      
      Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
    image: Images[1].image,
    rating: 5,
    reviews: 102,
    categories: ['Poeme', 'Auteuyr', 'Dineout'],
  },
  {
    id: '3',
    coordinate: {
      latitude: 22.6281662,
      longitude: 88.4410113,
    },
    title: 'Evenement 3',
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque est metus, gravida vel ex volutpat, posuere euismod tortor. Pellentesque tincidunt, mi ac varius blandit, quam orci dignissim risus, vitae rutrum orci urna ut neque.
      
      Pellentesque condimentum ut libero id blandit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
    image: Images[2].image,
    rating: 3,
    reviews: 220,
    categories: ['Poeme', 'Auteuyr', 'Dineout'],
  },
  
];
