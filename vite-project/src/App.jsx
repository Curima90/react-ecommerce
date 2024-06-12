import { useState, useEffect } from 'react'
import Row from './Row';
// import './App.css'

function App() {

  const [products, setProducts] = useState()
  const [search, setSearch] = useState("")


  useEffect(() => {

    async function getProducts() {
      const response = await fetch("https://raw.githubusercontent.com/Curima90/react-ecommerce/master/data.json");
      const products = await response.json();
      console.log(products);
      setProducts(products);
    }
    getProducts()
  }, [])

  function handleInput(event) {
    let text = event.target.value
    setSearch(text)
    console.log(search)
  }

  let filteredProducts = search.length === 0 ? products : products.filter((element) => {
    return element.name.includes(search)
  })

  return (
    <div>
      <input value={search} placeholder="text goes here" onChange={handleInput}></input>
    {products && (<table>
      <thead>
        <tr>
          {Object.keys(products[0]).map(title => {
            return <th>{title}</th>
          })}
        </tr>
      </thead>

      <tbody>
      {filteredProducts.map(product => {
        return <Row product={product} />
      })}
    </tbody>
    </table>)}
    </div>
  )
}

export default App
