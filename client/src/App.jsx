import React, { useEffect, useState } from "react";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    const url = "http://localhost:3000/api/products";

    async function fetchPdt() {
      const res = await fetch(url);
      const data = await res.json();
      setProducts(data);
    }

    fetchPdt();
  }, []);
  return (
    <div>
      <h1>Yiliba</h1>
      <ul>
        {products.map((pdt) => (
          <li key={pdt._id}>{pdt.name}</li>
        ))}
      </ul>
    </div>
  );
}
