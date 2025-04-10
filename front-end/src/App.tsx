import React, { useEffect, useState } from 'react';
import './App.css';
import { ProductModel } from './types/Product';
import Product from './components/teste';



function App() {

  const [products, setProducts] = useState<ProductModel[]>([]);

  useEffect(() => {
    fetch('http://localhost:8181/products')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setProducts(data);
      })
      .catch(error => {
        console.error('Erro ao buscar produtos:', error);
      });
  }, []);

  function init(){
    fetch('http://localhost:8181/products')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setProducts(data);
      })
      .catch(error => {
        console.error('Erro ao buscar produtos:', error);
      });
  }
  init()
  return (
      <div>
        <ul>
          {products.map(product => (
            <Product
              product={product}
            />
          ))}
        </ul>
      </div>
  );
}

export default App;
