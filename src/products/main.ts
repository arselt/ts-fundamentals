import { addProduct, calcStock, products } from "./product.service";

addProduct({
  title: 'pro1',
  createdAt: new Date(1993, 2, 1),
  stock: 85
})

addProduct({
  title: 'pro2',
  createdAt: new Date(2019, 2, 20),
  stock: 8542,
  size: "XL"
})

console.log(products)

const total = calcStock()
console.log(total)
