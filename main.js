function dateTransform(date) {
  return date.split('-').reverse().join('.');
}
console.log(dateTransform('2020-08-26'));

//#2

const data = [
  {
    country: 'Russia',
    city: 'Saint Petersburg',
    hotel: 'Hotel Leopold',
  },
  {
    country: 'Spain',
    city: 'Santa Cruz de Tenerife',
    hotel: 'Apartment Sunshine',
  },
  {
    country: 'Slowakia',
    city: 'Vysokie Tatry',
    hotel: 'Villa Kunerad',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hostel Friendship',
  },
  {
    country: 'Indonesia',
    city: 'Bali',
    hotel: 'Ubud Bali Resort&SPA',
  },
  {
    country: 'Netherlands',
    city: 'Rotterdam',
    hotel: 'King Kong Hostel',
  },
  {
    country: 'Marocco',
    city: 'Ourika',
    hotel: 'Rokoko Hotel',
  },
  {
    country: 'Germany',
    city: 'Berlin',
    hotel: 'Hotel Rehberge Berlin Mitte',
  },
];

function arraySearch (search_word) {
  const matches = [];

  for (let i = 0; i < data.length; i++) {
    console.log(data[i]);
    if (data[i].country.includes(search_word) || data[i].city.includes(search_word) || data[i].hotel.includes(search_word)) {
      matches.push(`${data[i].country}, ${data[i].city}, ${data[i].hotel}`);
    }
  }
  return matches;
}

console.log(arraySearch('Marocco'));

export { dateTransform, arraySearch }
