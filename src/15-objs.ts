(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';
  type Product = {
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  };

  const products: Product[] = [];

  const addProduct = (data: Product) => {
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

  // products.push('asdasa2asd')
  // 'string' is not assignable to parameter of type 'Product'
})();
