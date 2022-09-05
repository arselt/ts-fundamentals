(() => {
  let myDynamicVar: any;
  myDynamicVar = 100;
  console.log(myDynamicVar)
  myDynamicVar = '13sanzs';
  console.log(myDynamicVar)
  myDynamicVar = true;
  console.log(myDynamicVar)

  myDynamicVar = 'hola';
  const DynamicString = (myDynamicVar as string);

  console.log(DynamicString.toUpperCase())
})();
