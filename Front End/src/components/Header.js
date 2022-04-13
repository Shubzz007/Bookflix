import "./Header.css"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"
import styled from "styled-components"
import { mobile } from "./responsive"
import {
  LocationCity,
  LocationOn,
  MenuOutlined,
  PeopleAlt,
  Search,
  ShoppingCartOutlined
} from "@material-ui/icons"
import { Badge, Button } from "@material-ui/core"

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
  border: none;
  ${mobile({ width: "100px" })}
`

const Header = () => {
  const navigate = useNavigate()

  let loginRegister

  const { firstName, loginStatus } = sessionStorage

  if (firstName != undefined) {
    loginRegister = `Hello, ${firstName}`
  } else {
    loginRegister = "Login/Register"
  }

  const logoutUser = () => {
    // remove the logged users details from session storage

    if (firstName == undefined) {
      toast.warning("please login first")
    }

    sessionStorage.removeItem("id")
    sessionStorage.removeItem("firstName")
    sessionStorage.removeItem("lastName")
    sessionStorage.removeItem("loginStatus")

    // navigate to sign in component
    navigate("/home")
  }
  return (
    <div>
      <nav class="navbar navbar-dark navbar-custom box-blue">
        <div className="container brand-text">
          <span className="btn-group " role="group">
            <button
              id="menu-button"
              type="button"
              className="menu-button-home"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <MenuOutlined style={{ width: "40", height: "40" }} />
            </button>
            <ul className="dropdown-menu" aria-labelledby="menu-button">
              <li>
                <a className="dropdown-item">Profile</a>
              </li>
              <li>
                <button onClick={logoutUser} className="dropdown-item">
                  Logout
                </button>
              </li>
            </ul>
          </span>

          <button
            className="btn"
            onClick={() => {
              navigate("/home")
            }}
          >
            <h2 className="home-button">Bookflix</h2>
          </button>

          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>

          <Button
            variant="outlined"
            type="button"
            class="btn btn-dark"
            onClick={() => {
              if (loginStatus != 1) {
                navigate("/login")
              }
            }}
          >
            <PeopleAlt />
            {loginRegister}
          </Button>

          <Badge
            onClick={() => {
              navigate("/cartNew")
            }}
            badgeContent={4}
            color="primary"
          >
            <ShoppingCartOutlined />
          </Badge>
        </div>
      </nav>

      <div className="container-fluid box-light">
        <div className="container">
          <LocationOn />
          Delivery Address
          <span className="span-category-dropdown btn-group " role="group">
            <button
              id="Fruits&Vegetables"
              type="button"
              className="category-button-dropdown dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Novels
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <ul className="dropdown-menu" aria-labelledby="Fruits&Vegetables">
              <li>
                <a className="dropdown-item">Harry Potter</a>
              </li>
              <li>
                <button className="dropdown-item">Lord Of The Rings</button>
              </li>
              <li>
                <button className="dropdown-item">A Game Of Thrones</button>
              </li>
              <li>
                <button className="dropdown-item">The Lion, the Witch and the Wardrobe</button>
              </li>
              
            </ul>
          </span>
          <span className="btn-group " role="group">
            <button
              id="Dairy&Bakery"
              type="button"
              className="category-button-dropdown dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Poetry
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <ul className="dropdown-menu" aria-labelledby="Dairy&Bakery">
              <li>
                <a className="dropdown-item">Leaves of Grass</a>
              </li>
              <li>
                <button className="dropdown-item">The Sun and her Flowers </button>
              </li>
              <li>
                <button className="dropdown-item">Milk and Honey </button>
              </li>
              <li>
                <button className="dropdown-item">Time is a Mother </button>
              </li>
            </ul>
          </span>
          <span className="btn-group " role="group">
            <button
              id="novels"
              type="button"
              className="category-button-dropdown dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Science Friction
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <ul className="dropdown-menu" aria-labelledby="novels">
              <li>
                <a className="dropdown-item">The Time Machine</a>
              </li>
              <li>
                <button className="dropdown-item">Dune</button>
              </li>
              <li>
                <button className="dropdown-item">Star Wars</button>
              </li>
              <li>
                <button className="dropdown-item">Nineteen Eighty-Four</button>
              </li>
            </ul>
          </span>
          <span className="btn-group " role="group">
            <button
              id="Eggs&Meat"
              type="button"
              className="category-button-dropdown dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              History
            </button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <ul className="dropdown-menu" aria-labelledby="History">
              <li>
                <a className="dropdown-item">The Discovery of India</a>
              </li>
              <li>
                <button className="dropdown-item">Precolonial Black Africa</button>
              </li>
              <li>
                <button className="dropdown-item">Prehistory and Protohistory of India</button>
              </li>
              <li>
                <button className="dropdown-item">The History of the Ancient World</button>
              </li>
             </ul>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Header
