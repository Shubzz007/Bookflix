import { Add, Remove } from "@material-ui/icons"
import styled from "styled-components"
import { useEffect, useState } from "react"

import Footer from "../components/Footer"

import { mobile } from "./responsive.js"
import Header from "./Header"
import { useNavigate } from "react-router"
import axios from "axios"
import { toast } from "react-toastify"
import ShowProduct from "./ShowProduct"
import CartProduct from "./CartProduct"

const Container = styled.div``

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`

const Info = styled.div`
  flex: 3;
`

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

const CartNew = () => {
  const [cartProducts, setCartProducts] = useState([])

  const navigate = useNavigate()
  let subTotal = 0

  // taking is from session storage to fetach cart details
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
      console.log(result)

      console.log("result cart.........." + result.data)
    })
  }

  // calling UserCart function

  useEffect(() => {
    UserCart()
  }, [])

  const [totalProductsPrice, setTotalProductsPrice] = useState(0)

  let totalProductsPriceAll = 0

  const [counter, setCounter] = useState(0)
  // incrementer to increase or decrease the product quantity
  const incrementCounter = () => {
    setCounter(counter + 1)
  }

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }
  return (
    <Container>
      <Header></Header>
      <Wrapper>
        <Title>MY CART</Title>
        <Top>
          <TopButton
            onClick={() => {
              navigate("/home")
            }}
          >
            CONTINUE SHOPPING
          </TopButton>

          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            {cartProducts.map((product) => {
              subTotal = subTotal + product.totalPrice

              return <CartProduct product={product} />
            })}

            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>{subTotal}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>rs. 100</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>rs. -100</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>rs. {subTotal}</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default CartNew
