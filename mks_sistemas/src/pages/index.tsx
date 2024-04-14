import React, { useState, useEffect } from 'react';

async function getData() {
  const response = await fetch(
    "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=5&sortBy=id&orderBy=ASC"
  );

  if(!response.ok) {
    throw new Error('Erro ao obter os dados')
  }

  const data = await response.json();
  console.log(data);
  return data;
}

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getData().then(data => setData(data)).catch(error => console.error(error));
  }, []);

  return (
    <>
      <h1>Home</h1>
      {data ? <p>{JSON.stringify(data)}</p> : <p>Loading...</p>}
    </>
  );
}