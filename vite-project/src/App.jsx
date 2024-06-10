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
      {products.map(product => {
        return <Row product={product} />
      })}
    </table>)
  )
}

export default App
