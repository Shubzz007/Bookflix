import ShowProduct from "./ShowProduct"
import "./Slider.css"
import "./Products.css"
import { useNavigate } from "react-router"

const { default: axios } = require("axios")
const { useState, useEffect } = require("react")
const { toast } = require("react-toastify")

const Products = () => {
  // every category has seperate array so we can seperate all the products taken from database and put then thses array categories
  const [fruitVegProducts, setFruitVegProducts] = useState([])
  const [stapleProducts, setStapleProducts] = useState([])
  const [dairyBackeryProducts, setDairyBackeryProducts] = useState([])
  const [eggMeatProducts, setEggMeatProducts] = useState([])
  const [products, setProducts] = useState([])

  // These counter are to check only 4 products of each categories should be displayed on home page
  let fvCounter = 0
  let sCounter = 0
  let dbCounter = 0
  let emCounter = 0

  const navigate = useNavigate()

  const AllProducts = () => {
    // to fecth all products
    const url = `http://localhost:8080/products`

    axios.get(url).then((response) => {
      toast.success("fetch details succesfully")

      // fetched all products and stored within result
      const result = response.data
      // all the products are seperated accounding to thier categoery and push them within thier arraylist (eg. product_type staple into stapleProducts)
      result.data.map((element) => {
        // console.log("..................." + element.product_type)
        if (element.product_type === "science friction") {
          console.log(element + "added in science friction")
          stapleProducts.push(element)
          //setStapleProducts(element)
        } else if (element.product_type == "novels") {
          fruitVegProducts.push(element)
        } else if (element.product_type == "poetry") {
          dairyBackeryProducts.push(element)
        } else if (element.product_type == "history") {
          eggMeatProducts.push(element)
        }
      })

      // written just to debug
      setProducts(result.data)
      console.log("products")
      console.log(products)
      console.log("stapleProducts")
      console.log(stapleProducts)
    })
  }
  // called method here using useEffect
  useEffect(() => {
    AllProducts()
  }, [])

  return (
    <div className="row">
      <div className="col">
        <h1>NOVELS</h1>
        {/* here on click of show more button im sending all the fruits and vegetable products ProductCategeory Component to display only fruits and Vegetable . We have used state to send data withing navigate function*/}
        <button
          onClick={() => {
            navigate("/productCategory", {
              state: {
                productCategory: fruitVegProducts,
                title: "Fruits And Vegetables"
              }
            })
          }}
          className="btn btn-success btn-lg float-right"
        >
          show more
        </button>
        <hr />
        {/* here on home page we are displaying only 4 products of of particlar category*/}
        <div class="row">
          {fruitVegProducts.map((product) => {
            if (fvCounter < 4) {
              fvCounter = fvCounter + 1
              return <ShowProduct product={product} />
            }
          })}
        </div>
        <h1>POETRY</h1>
        <button
          onClick={() => {
            navigate("/productCategory", {
              state: {
                productCategory: dairyBackeryProducts,
                title: "Dairy and Backery"
              }
            })
          }}
          className="btn btn-success"
        >
          show more
        </button>
        <hr />
        <div class="row">
          {dairyBackeryProducts.map((product) => {
            if (dbCounter < 4) {
              dbCounter = dbCounter + 1
              return <ShowProduct product={product} />
            }
          })}
        </div>
        <h1>SCIENCE FICTION</h1>
        <button
          onClick={() => {
            navigate("/productCategory", {
              state: { productCategory: stapleProducts, title: "Staples" }
            })
          }}
          className="btn btn-success"
        >
          show more
        </button>
        <hr />
        <div class="row">
          {stapleProducts.map((product) => {
            if (sCounter < 4) {
              sCounter = sCounter + 1
              return <ShowProduct product={product} />
            }
          })}
        </div>
        <h1>HISTORY</h1>
        <button
          onClick={() => {
            navigate("/productCategory", {
              state: {
                productCategory: eggMeatProducts,
                title: "Eggs And Meat"
              }
            })
          }}
          className="btn btn-success"
        >
          show more
        </button>
        <hr />
        <div class="row">
          {eggMeatProducts.map((product) => {
            if (emCounter < 4) {
              emCounter = emCounter + 1
              return <ShowProduct product={product} />
            }
          })}
        </div>
      </div>
    </div>
  )
}

export default Products
