(() => {
  let productTitle: string = 'The Amazing Product';
  // productTitle = null;
  // productTitle = () => { };
  productTitle = 'Slap Chop'
  console.log('productTitle ', productTitle)

  const productDescription = "blablalbalabaaa 'bla";
  console.log('productDescription ', productDescription)

  let productPrice: number = 120;
  let isNew: boolean = false;

  const summary = `
    Product: ${productTitle}
    Description: ${productDescription}
    Price: ${productPrice}$
    Condition: ${isNew ? 'New' : 'Used'}
  `

  console.log(summary)
})();
