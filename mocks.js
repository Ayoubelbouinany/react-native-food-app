//HOME==========================
const infoHome = [
  { 
    id: 1,
    title: 'Hot Restaurants Around',
    datas: [
      {
        id: 1,
        star: 4.1,
        url: require('./assets/Home/ftour.png'),
        title: 'Ramdane Ftour',
        subTitle: 'Tamr, Herrera,...',
      },
      {
        id: 2,
        star: 4.2,
        url: require('./assets/Home/ftour2.jpg'),
        title: 'Ramdane Ftour',
        subTitle:'Tamr, Herrera,...',
      },
      {
        id: 3,
        star: 4.4,
        url: require('./assets/Home/ftour3.jpeg'),
        title: 'Ramdane Ftour ',
        subTitle:'Tamr, Herrera,...',
      },
    ]
  },
];


//PROFILE=======================

const items = [
  {
    id: 1,
    url: require('./assets/Profile/select.png'),
    title: 'Saved Restaurants',
  },
  {
    id: 2,
    url: require('./assets/Profile/shop2.png'),
    title: 'My Orders',
  },
  {
    id: 3,
    url: require('./assets/Profile/offers.png'),
    title: 'Offers',
  },
  {
    id: 4,
    url: require('./assets/Profile/conf.png'),
    title: 'Account Settings',
  },
  {
    id: 5,
    url: require('./assets/Profile/pay.png'),
    title: 'Payment Profile',
  },
  {
    id: 6,
    url: require('./assets/Profile/help.png'),
    title: 'Help & Support',
  },
  {
    id: 7,
    url: require('./assets/Profile/logOut.png'),
    title: 'Logout',
  },
];

//RESTAURANT=========================

const rest = [
  {
    id: 1,
    url: require('./assets/Restaurant/hrira.jpg'),
    title: 'soupe marocaine ',
    price: 5.00,
    qtd: 124,
  },
  {
    id: 2,
    url: require('./assets/Restaurant/bread.png'),
    title: 'Bread',
    price: 3.00,
    qtd: 124,
  },
  {
    id: 3,
    url: require('./assets/Restaurant/gateaux.png'),
    title: ' gateaux',
    price: 5.00,
    qtd: 124,
  },
  {
    id: 5,
    url: require('./assets/Restaurant/msaman.jpg'),
    title: 'Msamane',
    price: 5.00,
    qtd: 124,
  },
  {
    id: 5,
    url: require('./assets/Restaurant/jus.jpg'),
    title: 'Jus de orange ',
    price: 10.00,
    qtd: 124,
  },


];


export { infoHome, items, rest };