(() => {

  const login = (email: string, password: string) => {
    console.log(email, password)
  } // this function receives two parameters

  login('a@arselt.com', 'Scaparapapas')


  const login2 = (data: { email: string, password: string }) => {
    console.log(data.email, data.password);
  } // this function can receive an object

  login2({
    email: 'a@platzi.com',
    password: 'sapaparapacS'
  })


  type Sizes = 'S' | 'M' | 'L' | 'XL';

  const products: any[] = [];

  const addProduct = (data: {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  }) => {
    products.push(data);
  }

  console.log(products)

  addProduct({
    title: 'pro1',
    createdAt: new Date(1993, 2, 1),
    stock: 85
  })

  console.log(products)

  addProduct({
    title: 'pro2',
    createdAt: new Date(2019, 2, 20),
    stock: 8542,
    size: "XL"
  })

  console.log(products)
})();
