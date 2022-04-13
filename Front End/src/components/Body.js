import "./Body.css"
import Products from "./Products"

const Body = () => {
  return (
    <div className="row">
      <div className="col">
        <div>
          {/* <hr /> */}
          <div class="row">
            <Products />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body
