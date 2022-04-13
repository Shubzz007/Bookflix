import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router"
import axios from "axios"
import styled from "styled-components"

const styles = {
  pageContainer: {
    padding: "20px",
    fontSize: "20px"
  }
}

// taking all products from product.js and keeping it into props
const ShowProduct = (props) => {
  let discountedPrice
  // fetching products from props
  const { product } = props

  // counter variable to check the quantity inserted
  const [counter, setCounter] = useState(0)

  const navigate = useNavigate()

  const buttonStyle = {
    backgroundColor: "green",
    border: "solid",
    width: "40px",
    height: "40px",
    fontWeight: "bold"
  }

  // incrementer to increase or decrease the product quantity
  const incrementCounter = () => {
    setCounter(counter + 1)
  }

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  // function to get price : if the dicount is zero then default price will be displayed
  // if doscount is present then it will strike the dfault price and it will show discounted price
  const getPrice = () => {
    if (product.discount == 0) {
      return (
        <h5>
          <b>{product.price}</b> rs
        </h5>
      )
    } else {
      const discountedPrice =
        product.price - (product.price * product.discount) / 100
      return (
        <div>
          <h5>
            <strike>{product.price}</strike>
            <b style={{ marginLeft: "3px" }}>{discountedPrice} rs</b>
          </h5>
        </div>
      )
    }
  }

  // This is price used basically to send final price of product(it may be discounted aur default price depending upon the discoint) to database of cart table
  const getFinalPrice = () => {
    if (product.discount == 0) {
      return product.price
    } else {
      discountedPrice = product.price - (product.price * product.discount) / 100
      return discountedPrice
    }
  }

  // useEffect is used to call getFinalPrice()
  useEffect(() => {
    getFinalPrice()
  }, [])

  // variable are assignment values here in order to send it to body ... finally to save the cart
  const CartBtn = styled.button`
    background-color: #5be98f;
    border-radius: 10px;

    color: green;
    cursor: pointer;
    display: inline-block;

    padding: 7px 20px;
    text-align: center;
    text-decoration: none;
    transition: all 250ms;
    border: 0;
    font-size: 24px;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    color: black;
  `
  const { id, name } = sessionStorage
  const customerId = id
  const productId = product.id
  const unitQuantity = counter
  const price = getFinalPrice()
  const totalPrice = unitQuantity * price
  const discount = price
  const productName = product.name

  // This is method where we are adding products to basket
  const addToBasket = () => {
    // if user is not logged in then he should be redirected to login page and should allow to add products to basket/cart
    if (customerId === undefined) {
      toast.warning("Please login to add product in basket")
      navigate("/login")
    } else {
      // all the product details which are to be added in the cart of customer
      const body = {
        customerId,
        productId,
        unitQuantity,
        totalPrice,
        productName
      }

      // to save details within cart
      const url = `http://localhost:8080/addToCart`

      //if product quantity is not equal to zero then only products should be inserted
      if (unitQuantity != 0) {
        axios.post(url, body).then((response) => {
          toast.success("product added in cart successfully")
          const result = response.data
          console.log(response)

          sessionStorage["loginStatus"] = 1
          //navigate("/cart")
        })
      } else {
        toast.warning("Quantity is empty cannot be added")
      }
    }
  }

  return (
    <div class="column">
      <div class="card">
        {/* <img src={path} /> */}
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>{getPrice()}</p>
        <div style={styles.pageContainer}>
          <CartBtn className="btn btn-dark" onClick={decrementCounter}>
            -
          </CartBtn>
          <span style={{ margin: "10px" }}>{counter}</span>
          <CartBtn className="btn btn-dark" onClick={incrementCounter}>
            +
          </CartBtn>
          <br />
          <br />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "5px"
            }}
          >
            {unitQuantity > 0 && (
              <div>{(discountedPrice * unitQuantity).toFixed(1)} rs</div>
            )}
          </div>
          <CartBtn className="btn btn-dark" onClick={addToBasket}>
            Add To cart
          </CartBtn>
        </div>
      </div>
    </div>
  )
}

export default ShowProduct
