// Cannot redeclare block-scoped variable .ts(2451)
// We lock the scope to an arrow function
(() => {
  const age: number = 20;
  // declaration -> const age
  //type annotation -> : number

  let myProductName: string = 'Product 1';
  let myProductPrice = 123;

  myProductName.toLowerCase();

  myProductPrice.toFixed();

  const myProductStock = 100;
})();
