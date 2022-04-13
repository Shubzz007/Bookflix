import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import ShowCart from "./ShowCart"
import ShowProduct from "./ShowProduct"
import "./Cart.css"
import Header from "./Header"
import Footer from "./Footer"
import { useNavigate } from "react-router"
import CartNew from "./CartNew"

const Cart = () => {
  // to store cart details
  const [cartProducts, setCartProducts] = useState([])

  const navigate = useNavigate()

  // taking id from session storage to fetach cart details
  const { id } = sessionStorage

  // This is method is written to fetch the logged in user details
  const UserCart = () => {
    const url = `http://localhost:8080/getCartByUserId/${id}`

    axios.get(url).then((response) => {
      toast.success("fetch details succesfully")

      const result = response.data

      //set cart details
      setCartProducts(result.data)
      console.log(cartProducts)

      console.log("result cart.........." + result.data)
    })
  }

  // calling UserCart function

  useEffect(() => {
    UserCart()
  }, [])

  return (
    <div>
      <Header />
      <div className="container">
        <h1>My Cart</h1>
        <div>
          <div class="row gx-5">
            <div class="col-sm-6 col-md-8">
              <div>
                <div className="box scroll">
                  {/* here we are mapping all cart details into ShowCart componet. Show cart component will display are cart details*/}
                  <div className="p-3">
                    {cartProducts.map((product) => {
                      return <ShowCart product={product} />
                    })}
                  </div>
                </div>
              </div>
            </div>

            <div className="col payment-box">
              <div className="row">
                <h2>Payments Details</h2>
                <div className="row payment-font">
                  <div className="col">MRP Total</div>
                  <div className="col text-end">Rs xx.xx</div>
                </div>
                <div className="row payment-font">
                  <div className="col">Total Discount</div>
                  <div className="col text-end">- Rs xx.xx</div>
                </div>
                <hr />
                <div className="row payment-font">
                  <div className="col">Total Amount</div>
                  <div className="col text-end">Rs xx.xx</div>
                </div>
              </div>
              <br />
              <br />
              <div className="row float-end">
                <button
                  className="btn btn-primary checkout-button"
                  type="button"
                >
                  Checkout
                </button>
              </div>
              <br />
              <br />
              <div className="row float-end">
                <button
                  className="btn btn-primary checkout-button"
                  type="button"
                  onClick={() => {
                    navigate("/cartNew")
                  }}
                >
                  NewCart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Cart
