(() => {
  let prices = [1, 2, 3, 5, 3, 2, 4];
  // prices.push(true);
  prices.push(prices.length)

  console.log('prices ', prices)

  let itemsDescription = [1, 2, 3, 4, 'Hola', 'Oi', true, 'hello']

  // those arrays are being auto inferred by ts,
  // but it can have assigned type(s) as any other primitive type
  let mixed: (number | string | boolean)[] = []
  mixed.push(12);

  console.log('prices xrandom', prices.map(item => item * Math.random() * 100000));
})();
