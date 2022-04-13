import Footer from "./Footer"
import Header from "./Header"
import "./Aboutus.css"
import styled from "styled-components"

const Container = styled.div`
  margin-top: 9vw;
  margin-bottom: 10vw;
`
const Aboutus = () => {
  return (
    <div>
      <Header />

      <Container>
        <div className="container">
          <h3>About Us</h3>
          <p style={{ fontSize: 15 }}>

          Bookflix is an online bookstore with a mission to financially support local, independent bookstores.
          </p>
          <p style={{ fontSize: 15 }}>
          We believe that bookstores are essential to a healthy culture.
          They’re where authors can connect with readers, where we discover new writers, where children get hooked on the thrill of reading that can last a lifetime. 
          They’re also anchors for our downtowns and communities.
          </p>
          <p style={{ fontSize: 15 }}>
          As more and more people buy their books online, we wanted to create an easy, 
          convenient way for you to get your books and support bookstores at the same time.
          </p>
          <p style={{ fontSize: 15 }}>
          We hope that Bookshop can help strengthen the fragile ecosystem and margins around 
          bookselling and keep local bookstores an integral part of our culture and communities.
          </p>
        </div>
      </Container>
      <Footer />
    </div>
  )
}

export default Aboutus
