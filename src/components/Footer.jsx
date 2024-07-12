import React from 'react'
import logoMain from '../assets/img/logo.webp'

const Footer = () => {
  return (
  <>
{/*== Start Footer Area Wrapper ==*/}
<footer className="footer-area">
  {/*== Start Footer Main ==*/}
  <div className="footer-main">
    <div className="container pt--0 pb--0">
      <div className="row">
        <div className="col-md-6 col-lg-3">
          {/*== Start widget Item ==*/}
          <div className="widget-item">
            <div className="about-widget-wrap">
              <div className="widget-logo-area">
                <a href="index.html">
                  <img className="logo-main" src={logoMain} width={131} height={34} alt="Logo" />
                </a>
              </div>
              <p className="desc">Lorem ipsum dolor sit amet consl adipisi elit, sed do eiusmod templ incididunt ut labore</p>
              <div className="social-icons">
                <a href="https://www.facebook.com/"  rel="noopener"><i className="fa fa-facebook" /></a>
                <a href="https://dribbble.com/"  rel="noopener"><i className="fa fa-dribbble" /></a>
                <a href="https://www.pinterest.com/"  rel="noopener"><i className="fa fa-pinterest-p" /></a>
                <a href="https://twitter.com/"  rel="noopener"><i className="fa fa-twitter" /></a>
              </div>
            </div>
          </div>
          {/*== End widget Item ==*/}
        </div>
        <div className="col-md-6 col-lg-3">
          {/*== Start widget Item ==*/}
          <div className="widget-item widget-services-item">
            <h4 className="widget-title">Services</h4>
            <h4 className="widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#widgetId-1">Services</h4>
            <div id="widgetId-1" className="collapse widget-collapse-body">
              <div className="collapse-body">
                <div className="widget-menu-wrap">
                  <ul className="nav-menu">
                    <li><a href="contact.html">Home monitoring</a></li>
                    <li><a href="contact.html">Air Filters</a></li>
                    <li><a href="contact.html">Professional installation</a></li>
                    <li><a href="contact.html">Smart Buildings</a></li>
                    <li><a href="contact.html">For contractors</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/*== End widget Item ==*/}
        </div>
        <div className="col-md-6 col-lg-3">
          {/*== Start widget Item ==*/}
          <div className="widget-item widget-account-item">
            <h4 className="widget-title">My Account</h4>
            <h4 className="widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#widgetId-2">My Account</h4>
            <div id="widgetId-2" className="collapse widget-collapse-body">
              <div className="collapse-body">
                <div className="widget-menu-wrap">
                  <ul className="nav-menu">
                    <li><a href="account-login.html">My Account</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="shop-cart.html">Shopping cart</a></li>
                    <li><a href="shop.html">Shop</a></li>
                    <li><a href="account-login.html">Services Login</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/*== End widget Item ==*/}
        </div>
        <div className="col-md-6 col-lg-3">
          {/*== Start widget Item ==*/}
          <div className="widget-item">
            <h4 className="widget-title">Contact Info</h4>
            <h4 className="widget-collapsed-title collapsed" data-bs-toggle="collapse" data-bs-target="#widgetId-3">Contact Info</h4>
            <div id="widgetId-3" className="collapse widget-collapse-body">
              <div className="collapse-body">
                <div className="widget-contact-wrap">
                  <ul>
                    <li><span>Address:</span> Your address goes here.</li>
                    <li><span>Phone//fax:</span> <a href="tel://0123456789">0123456789</a></li>
                    <li><span>Email:</span> <a href="mailto://demo@example.com">demo@example.com</a></li>
                    <li><a  href="https://www.hasthemes.com">www.example.com</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/*== End widget Item ==*/}
        </div>
      </div>
    </div>
  </div>
  {/*== End Footer Main ==*/}
  {/*== Start Footer Bottom ==*/}
  <div className="footer-bottom">
    <div className="container pt--0 pb--0">
      <div className="row">
        <div className="col-md-7 col-lg-6">
          <p className="copyright">© 2021 Shome. Made with <i className="fa fa-heart" /> by <a  href="https://themeforest.net/user/codecarnival/portfolio">Codecarnival.</a></p>
        </div>
        <div className="col-md-5 col-lg-6">
          <div className="payment">
            <a href="account-login.html"><img src="assets/img/photos/payment-card.webp" width={192} height={21} alt="Payment Logo" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*== End Footer Bottom ==*/}
</footer>

  </>
  )
}

export default Footer