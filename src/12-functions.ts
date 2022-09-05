(() => {
  type Sizes = 'S' | 'M' | 'L' | 'XL';

  function createProductToJson(
    title: string,
    createdAt: Date,
    stock: number,
    size: Sizes
  ) {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  // functions often have problems with the references on THIS,
  // so it's recommended to work with arrow functions (() => {})();

  const product1 = createProductToJson('P1', new Date(), 12, 'XL');
  console.log(product1);
  console.log(product1.title);

  const createProductToJsonArrow = (
    title: string,
    createdAt: Date,
    stock: number,
    size?: Sizes
  ) => {
    return {
      title,
      createdAt,
      stock,
      size
    }
  }

  const product2 = createProductToJsonArrow('P2', new Date(), 12);
  console.log(product2);
  console.log(product2.title);
  console.log(product2.size);
})();
