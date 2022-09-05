(() => {
  let myDynamicVar: string | number;
  myDynamicVar = 'soy un string';
  console.log(myDynamicVar)

  myDynamicVar = 507.84;
  console.log(myDynamicVar)

  function greeting(myText: string | number) {
    console.log(myText)
    if (typeof myText === 'string') {
      console.log(myText.toUpperCase())
    } else {
      console.log(myText.toFixed())
    }
  }

  greeting('asa');
  greeting(453.99);
})();
