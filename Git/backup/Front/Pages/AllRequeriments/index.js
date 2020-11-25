function ProductTable(props) {
  const { products } = props;
  return (
    <table>
      {" "}
      <caption>Our products</caption>{" "}
      <thead>
        {" "}
        <tr>
          {" "}
          <th>Name</th> <th>Price</th> <th>In Stock</th>{" "}
        </tr>{" "}
      </thead>{" "}
      <tbody>
        {" "}
        {products.map((product) => (
          <tr key={product.id}>
            {" "}
            <td>{product.name}</td> <td>{product.price}</td>{" "}
            <td>{product.stock}</td>{" "}
          </tr>
        ))}{" "}
      </tbody>{" "}
    </table>
  );
}

function ProductTable(props) {
  const { products } = props;
  let sortedProducts = [...products];
  sortedProducts.sort((a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
  return <Table> {/* as before */} </Table>;
}
