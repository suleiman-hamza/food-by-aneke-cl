const products = [
  { title: "Cabbage", id: 1 },
  { title: "Garlic", id: 2 },
  { title: "Apple", id: 3 },
];

const listItems = products.map((product) => {
  <li key={product.id}>{product.title}</li>;
});

export default function About() {
  return (
    <>
      <p>Welcome to my About page</p>
      <ul>{listItems}</ul>
    </>
  );
}
