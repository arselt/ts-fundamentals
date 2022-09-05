(() => {
  let productPrice = 100;
  productPrice = 101;
  console.log('productPrice ', productPrice)

  let customerAge: number = 28
  // customerAge = customerAge + "1"; //281
  console.log('customerAge ', customerAge)

  let productStock: number;
  // ts needs to have an assignation to auto-infer a type
  // so we declare and assign a type ina case we dont have
  // a valute to initialize the variable
  console.log('productStock', productStock);
  if (productStock > 10) {
    console.log('is bigger than 10');
  }

  let discount = parseInt('100');
  console.log('discount', discount);
  if (discount <= 200) {
    console.log('apply discount')
  } else {
    console.log('dont apply discount')
  }

  let hex = 0xfff;
  console.log('hex ', hex)

  let bin = 0b1010;
  console.log('bin ', bin)
})();
