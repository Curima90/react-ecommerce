import { useState, useEffect } from 'react'
import Row from './Row';
// import './App.css'

function App() {

  const [products, setProducts] = useState()


  useEffect(() => {

    async function getProducts() {
      const response = await fetch("https://raw.githubusercontent.com/Curima90/react-ecommerce/master/data.json");
      const products = await response.json();
      console.log(products);
      setProducts(products);
    }
    getProducts()
  }, [])


  return (
    products && (<table>
      <thead>
        <tr>
          {Object.keys(products[0]).map(title => {
            return <th>{title}</th>
          })}
        </tr>
      </thead>

      <tbody>
      {products.map(product => {
        return <Row product={product} />
      })}
    </tbody>
    </table>)
  )
}

export default App
