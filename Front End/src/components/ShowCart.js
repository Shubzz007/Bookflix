import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router"
import axios from "axios"
import styled from "styled-components"
import "./ShowCart.css"
const CartBtn = styled.button`
  background-color: #5be98f;
  border-radius: 25px;

  color: green;
  cursor: pointer;
  display: inline-block;

  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;

  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  color: black;
  width: 5px;
  height: 20px;
`

const styles = {
  pageContainer: {
    padding: "20px",
    fontSize: "20px"
  }
}

const ShowCart = (props) => {
  const { product } = props
  const [counter, setCounter] = useState(product.unitQuantity)

  const navigate = useNavigate()

  const buttonStyle = {
    backgroundColor: "green",
    border: "solid",
    width: "40px",
    height: "40px",
    fontWeight: "bold"
  }

  const getFinalPrice = () => {
    if (product.discount == 0) {
      return product.price
    } else {
      const discountedPrice =
        product.price - (product.price * product.discount) / 100
      return discountedPrice
    }
  }

  const { id, name } = sessionStorage
  const customerId = id
  const productId = product.id
  let unitQuantity
  const price = getFinalPrice()
  const totalPrice = unitQuantity * price
  const discount = price
  const productName = product.name

  const incrementCounter = () => {
    console.log(productName)
    setCounter(counter + 1)
    unitQuantity = counter
    const body = {
      customerId,
      productId,
      unitQuantity,
      totalPrice,
      productName
    }

    const url = `http://localhost:8080/addToCart`

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

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1)
      unitQuantity = counter
    }
  }

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
        <h5>
          <strike>{product.price}</strike>
          <b> {discountedPrice} </b>
          rs
        </h5>
      )
    }
  }

  useEffect(() => {
    getFinalPrice()
    addToBasket()
  }, [])

  const addToBasket = () => {}

  return (
    <div className="text-decoration">
      {product.productName}
      <br />
      Rs.{product.totalPrice}
      <br />
      <div className="float-end">
        <button
          type="button"
          className="btn btn-primary btn-circle btn-sm"
          onClick={decrementCounter}
        >
          -
        </button>
        <span style={{ margin: "10px" }}>{counter}</span>
        <button
          type="button"
          className="btn btn-primary btn-circle btn-sm"
          onClick={incrementCounter}
        >
          +
        </button>
      </div>
      <br />
      <hr />
    </div>
  )
}

export default ShowCart
