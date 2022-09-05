(() => {
  const calcTotal = (prices: number[]): number => {
    let total = 0;
    prices.forEach((item) => {
      total += item;
    })
    return total;
  }

  const rta: number = calcTotal([1, 3, 5, 23, 5, 2]);
  console.log(rta)

  const printTotal = (prices: number[]) => {
    const rta = calcTotal(prices);
    console.log(`el total es ${rta}`)
  }

  const rta2 = printTotal([1, 2, 4, 6, 2, 3])
})();
