export const ProductList = () => {

  const products = [{
    id: 1,
    name: "Laptop",
    price: 999
  }, {
    id: 2,
    name: "Phone",
    price: 699
  }, {
    id: 3,
    name: "Tablet",
    price: 499
  },
    {
      id: 4,
      name: "Monitor",
      price: 199
    },
    {
      id: 5,
      name: "Keyboard",
      price: 49
    }];

  const productElements = products.filter((product) => product.price > 100)
                                  .map((product) => (<div key={product.id}>{product.name} - ${product.price}</div>));
  return (
    <>
      <h2>Product List</h2>
      <ul>
        {productElements.map((productElement) => (
          <li>
            {productElement}
          </li>
        ))}
      </ul>
    </>
  )
}
