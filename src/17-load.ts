import _ from 'lodash';

const data = [
  {
    username: 'al',
    role: 'admin',
  },
  {
    username: 'ev',
    role: 'admin',
  },
  {
    username: 'ss',
    role: 'seller'
  },
  {
    username: 'sh',
    role: 'seller'
  },
  {
    username: 'kh',
    role: 'seller'
  },
  {
    username: 'ah',
    role: 'customer'
  }
];

const rta = _.groupBy(data, (item) => item.role)

console.log(rta)
