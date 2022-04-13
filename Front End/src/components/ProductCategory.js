import { useEffect } from "react"
import { useLocation } from "react-router"
import Footer from "./Footer"
import Header from "./Header"
import ShowProduct from "./ShowProduct"

const ProductCategory = () => {
  const { state } = useLocation()

  const { productCategory, title } = state

  return (
    <div>
      <Header />
      <h1>{title}</h1>
      <hr />
      <div class="row">
        {productCategory.map((product) => {
          return <ShowProduct product={product} />
        })}
      </div>
      <Footer />
    </div>
  )
}

export default ProductCategory
