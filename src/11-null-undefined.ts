(() => {
  // let myNumber: number = null;       Not possible
  // let myString: string = undefined;  they're types
  let myNull: null = null;
  let myUndefined: undefined = undefined;

  let myNumber: number | null = null;
  myNumber;
  myNumber = 12;

})();
