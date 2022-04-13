import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { useNavigate } from "react-router"
import axios from "axios"
import styled from "styled-components"
import { Add, Remove } from "@material-ui/icons"
import { mobile } from "./responsive.js"

import React from "react"

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`

const Image = styled.img`
  width: 200px;
`

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const ProductName = styled.span``

const ProductId = styled.span``

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`

const ProductSize = styled.span``

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`

const SummaryTitle = styled.h1`
  font-weight: 200;
`

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`

const CartProduct = (props) => {
  const { product } = props
  const [counter, setCounter] = useState(product.unitQuantity)

  let productId = product.productId
  let unitQuantity = product.unitQuantity
  let customerId = product.customerId
  let unitPrice = product.totalPrice / product.unitQuantity
  let subTotal = 0
  subTotal = subTotal + product.totalPrice

  const incrementCounter = () => {
    setCounter(counter + 1)
    unitQuantity = counter + 1
    const body = { productId, unitQuantity, customerId }
    const url = `http://localhost:8080/updateProductCounter`

    axios.patch(url, body).then((response) => {
      toast.success("updated details succesfully")
      const result = response.data
      // setProducts(result.data)
    })

    window.location.reload(false)
  }

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1)
      unitQuantity = counter - 1

      const body = { productId, unitQuantity, customerId }
      const url = `http://localhost:8080/updateProductCounter`

      axios.patch(url, body).then((response) => {
        toast.success("updated details succesfully")
        const result = response.data
        // setProducts(result.data)
      })
    }
    window.location.reload(false)
  }

  // const updateProduct = () => {}

  useEffect(() => {
    //updateProduct()
  }, [])

  return (
    <div>
      <Product>
        <ProductDetail>
          <Image src="https://media.istockphoto.com/photos/stack-of-books-picture-id157482029?k=20&m=157482029&s=612x612&w=0&h=b_0K-1Ut9alhKYu9zlgevSAHDkqSxLF634VDwPw8CHU=" />
          <Details>
            <ProductName>
              <b>Product:</b> {product.productName}
            </ProductName>
            <ProductId>
              <b>ID:</b> {product.productId}
            </ProductId>
            <ProductColor color="black" />
            <ProductSize>
              <b>Quantity:</b> {product.unitQuantity}
            </ProductSize>
          </Details>
        </ProductDetail>
        <PriceDetail>
          <ProductAmountContainer>
            <Add onClick={incrementCounter}> </Add>
            <ProductAmount>{counter}</ProductAmount>
            <Remove onClick={decrementCounter} />
          </ProductAmountContainer>
          <ProductPrice>Rs. {product.totalPrice}</ProductPrice>
        </PriceDetail>
      </Product>
      <hr />
    </div>
  )
}

export default CartProduct
