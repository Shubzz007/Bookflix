import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import path from "../assets/faq.svg"

const Faq = () => {
  return (
    <div>
      <div className="row">
        <div style={{ marginBottom: "20px" }}>
          <Header></Header>
        </div>
      </div>
      <div>
        <img
          src={path}
          alt="faq"
          style={{ width: "99vw", height: "388px", marginBottom: "26px" }}
        />
      </div>

      <div className="row">
        <div id="about-us">
          <div class="accordion" id="accordionPanelsStayOpenExample">
            <div class="accordion-item">
              <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#panelsStayOpen-collapseOne"
                  aria-expanded="true"
                  aria-controls="panelsStayOpen-collapseOne"
                >
                  <div className="divheader">
                    <h4>Registration</h4>
                  </div>
                </button>
              </h2>
              <div
                id="panelsStayOpen-collapseOne"
                class="accordion-collapse collapse show"
                aria-labelledby="panelsStayOpen-headingOne"
              >
                <div class="accordion-body">
                  <h5>How do I register?</h5>
                  <p>
                    You can register by clicking on the "Register" link at the
                    top right corner of the homepage. Please provide the
                    information in the form that appears. You can review the
                    terms and conditions and submit the registration
                    information.
                  </p>

                  <hr />

                  <h5>Are there any charges for registration?</h5>
                  <p>No. Registration on Bookflix.com is absolutely free.</p>
                  <hr />

                  <h5>
                    Do I have to necessarily register to shop on bookflix?
                  </h5>
                  <p>
                    You can surf and add products to the cart without
                    registration but only registered shoppers will be able to
                    checkout and place orders.
                  </p>
                  <hr />

                  <h5>Can I have multiple registrations?</h5>
                  <p>
                    Each email address and contact phone number can only be
                    associated with one Bookflix account.
                  </p>
                  <hr />

                  <h5>
                    Can I have multiple accounts with same mobile number and
                    email id?
                  </h5>
                  <p>
                    Each email address and phone number can be associated with
                    one Bookflix account only.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingTwo">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  <div className="divheader">
                    <h4>Delivery Realated</h4>
                  </div>
                </button>
              </h2>
              <div
                id="collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <h5>When will I receive my order?</h5>
                  <p>
                    Once you are done selecting your products and click on
                    checkout. Your order will be delivered to you on the same
                    day or depending upon your location it may take 2 to 7 days.
                  </p>
                 
                  <h5>How will the delivery be done?</h5>
                  <p>
                    We have a dedicated team of delivery personnel and a fleet
                    of vehicles operating across the city which ensures timely
                    and accurate delivery to our customers.
                  </p>
                  <hr />

                  <h5>
                    How do I change the delivery info (address to which I want
                    products delivered)?
                  </h5>
                  <p>
                    You can change your delivery address on our website once you
                    log into your account. Click at the top left hand corner and
                    go to the "Profile" section to change your delivery address.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <div className="divheader">
                    <h4>Order Related</h4>
                  </div>
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <h5>
                    Is it possible to order an item which is out of stock?
                  </h5>
                  <p>
                    No you can only order products which are in stock. We try to
                    ensure availability of all products on our website however
                    due to supply chain issues sometimes this is not possible.
                  </p>
                  <hr />

                  <h5>How do I check the current status of my order?</h5>
                  <p>
                    The only way you can check the status of your order is by
                    contacting our customer support team.
                  </p>
                  <hr />

                  <h5>What You Receive Is What You Pay For</h5>
                  <p>
                    At the time of delivery, we advise you to kindly check every
                    item as in the invoice. Please report any missing item that
                    is invoiced. As a benefit to our customers, if you are not
                    available at the time of order delivery or you haven’t
                    checked the list at the time of delivery we provide a window
                    of 48hrs to report missing items. This is applicable only
                    for items that are invoiced.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header" id="headingThree">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  <div className="divheader">
                    <h4>Others</h4>
                  </div>
                </button>
              </h2>
              <div
                id="collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <h5>Do you have offline stores?</h5>
                  <p>
                    No we are a purely internet based company and do not have
                    any brick and mortar stores.
                  </p>
                  <hr />

                  <h5>
                    What do I do if an item is defective (broken, leaking,
                    expired)?
                  </h5>
                  <p>
                    We have a no questions asked return policy. In case you are
                    not satisfied with a product received you can return it to
                    the delivery personnel at time of delivery or you can
                    contact our customer support team and we will do the
                    needful.
                  </p>
                  <hr />

                  <h5>
                    How will I get my money back in case of a cancellation or
                    return?
                  </h5>
                  <p>
                    What are the modes of refund, the amount will be refunded to
                    your account in 7-10 working days. Please contact customer
                    support for any further assistance regarding this issue.
                  </p>
                  <hr />

                  <h5>
                    I am a corporate/ business. Can I place orders with
                    Bookflix.com?
                  </h5>
                  <p>
                    Yes, we do bulk supply of products at special prices to
                    institutions such as schools, restaurants and corporates.
                    Please contact as at customerservice@bookflix.com to know
                    more.
                  </p>
                  <hr />

                  <h5>I'd like to suggest some products. Who do I contact?</h5>
                  <p>
                    If you are unable to find a product or brand that you would
                    like to shop for, please write to us at
                    customerservice@bookflix.com and we will try our best to
                    make the product available to you.
                  </p>
                  <hr />

                  <h5>How & where I can give my feedback?</h5>
                  <p>
                    We always welcome feedback, both positive and negative from
                    all our customers. Please feel free to write to us at
                    customerservice@bookflix.com, or call us on 1800920920 and
                    we will do our best to incorporate your suggestions into our
                    system.
                  </p>
                  <hr />

                  <h5>
                    There is a difference in the amount mentioned in the invoice
                    sent by the store and the order value shown by Bookflix
                    when placing the order. Why should I pay the extra amount?
                  </h5>
                  <p>
                    Fruits and Vegetables are natural products that come in
                    different shapes and sizes. While we have a strict control
                    on the average sizes and weights, there is always scope for
                    weight to vary from your ordered quantity. As a process we
                    make sure that in all conditions only a maximum of one unit
                    can go extra and hence you will be changed for the extra
                    unit quantity.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <Footer></Footer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Faq
