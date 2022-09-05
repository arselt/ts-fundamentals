(() => {
  let isEnable = true;
  // isEnable = 12121212;
  // isEnable = 'asd12123';
  isEnable = false;

  let isNew: boolean = false;
  console.log('isNew ', isNew);
  isNew = true;
  console.log('isNew ', isNew);

  const random = Math.random();
  console.log('random ', random)
  isNew = random >= 0.5 ? true : false;
  console.log('isNew ', isNew)

  const myBoolean: boolean = true;
  // Capitalize on type assignment is reserved for an interface (object)
  // primitive type assigns sholud be on lowercase
})();
