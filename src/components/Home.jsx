import React from 'react'
import slider2 from '../assets/img/slider/slider-02.webp'
import slider4 from '../assets/img/slider/slider-04.webp'
import productThumb from "../assets/img/shop/category/1.webp"
const Home = () => {
    return (
        <>
            <main className="main-content">
                {/*== Start Hero Area Wrapper ==*/}
                <section className="home-slider-area">
                    <div className="swiper-container home-slider-container default-slider-container">
                        <div className="swiper-wrapper home-slider-wrapper slider-default">
                            <div className="swiper-slide">
                                <div className="slider-content-area slider-content-area-two" data-bg-img={slider2}>
                                    <div className="container">
                                        <div className="slider-container">
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col-lg-5">
                                                    <div className="slider-content">
                                                        <div className="content">
                                                            <div className="desc-box">
                                                                <p className="desc">Up To 30% Off</p>
                                                            </div>
                                                            <div className="title-box">
                                                                <h2 className="title"><span className="font-weight-400">Exclusive<br /> </span>New Shoes</h2>
                                                            </div>
                                                            <div className="btn-box">
                                                                <a className="btn-slider" href="shop.html">Shop Now</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-slide">
                                <div className="slider-content-area slider-content-area-two" data-bg-img={slider4}>
                                    <div className="container">
                                        <div className="slider-container">
                                            <div className="row justify-content-between align-items-center">
                                                <div className="col-lg-5">
                                                    <div className="slider-content">
                                                        <div className="content">
                                                            <div className="desc-box">
                                                                <p className="desc">Up To 30% Off</p>
                                                            </div>
                                                            <div className="title-box">
                                                                <h2 className="title"><span className="font-weight-400">Exclusive<br /> </span>New Shoes</h2>
                                                            </div>
                                                            <div className="btn-box">
                                                                <a className="btn-slider" href="shop.html">Shop Now</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*== Add Swiper Arrows ==*/}
                        <div className="swiper-btn-wrap">
                            <div className="swiper-btn-prev">
                                <i className="pe-7s-angle-left" />
                            </div>
                            <div className="swiper-btn-next">
                                <i className="pe-7s-angle-right" />
                            </div>
                        </div>
                    </div>
                </section>
                {/*== End Hero Area Wrapper ==*/}
                {/*== Start Product Category Area Wrapper ==*/}
                <section className="product-area product-category-area">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6 col-lg-4">
                                {/*== Start Product Category Item ==*/}
                                <div className="product-category">
                                    <div className="inner-content">
                                        <div className="product-category-content">
                                            <div className="content">
                                                <h4 className="sub-title">Sale 50% Off</h4>
                                                <h3 className="title"><a href="shop.html">Sports Shoes</a></h3>
                                            </div>
                                        </div>
                                        <div className="product-category-thumb" data-bg-img={productThumb} />
                                        <a className="banner-link-overlay" href="shop.html" >s</a>
                                    </div>
                                </div>
                                {/*== End Product Category Item ==*/}
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                {/*== Start Product Category Item ==*/}
                                <div className="product-category mt-xs-30">
                                    <div className="inner-content">
                                        <div className="product-category-content">
                                            <div className="content">
                                                <h4 className="sub-title">Sale 50% Off</h4>
                                                <h3 className="title"><a href="shop.html">new arrival</a></h3>
                                            </div>
                                        </div>
                                        <div className="product-category-thumb" data-bg-img="assets/img/shop/category/2.webp" />
                                        <a className="banner-link-overlay" href="shop.html" />
                                    </div>
                                </div>
                                {/*== End Product Category Item ==*/}
                            </div>
                            <div className="col-sm-6 col-lg-4">
                                {/*== Start Product Category Item ==*/}
                                <div className="product-category mt-md-30">
                                    <div className="inner-content">
                                        <div className="product-category-content">
                                            <div className="content">
                                                <h4 className="sub-title">Sale 50% Off</h4>
                                                <h3 className="title"><a href="shop.html">New sneakers</a></h3>
                                            </div>
                                        </div>
                                        <div className="product-category-thumb" data-bg-img="assets/img/shop/category/3.webp" />
                                        <a className="banner-link-overlay" href="shop.html" />
                                    </div>
                                </div>
                                {/*== End Product Category Item ==*/}
                            </div>
                        </div>
                    </div>
                </section>
                {/*== End Product Category Area Wrapper ==*/}
                {/*== Start Product Area Wrapper ==*/}
                <section className="product-area product-default-area product-featured-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title text-center">
                                    <h3 className="title">Featured Items</h3>
                                    <div className="desc">
                                        <p>There are many variations of passages of Lorem Ipsum available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6 col-lg-3">
                                {/*== Start Product Item ==*/}
                                <div className="product-item">
                                    <div className="inner-content">
                                        <div className="product-thumb">
                                            <a href="single-product.html">
                                                <img src="assets/img/shop/1.webp" width={270} height={274} alt="Image-HasTech" />
                                            </a>
                                            <div className="product-flag">
                                                <ul>
                                                    <li className="discount">-10%</li>
                                                </ul>
                                            </div>
                                            <div className="product-action">
                                                <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart" /></a>
                                                <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart" /></a>
                                                <button type="button" className="btn-product-quick-view-open">
                                                    <i className="fa fa-arrows" />
                                                </button>
                                                <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random" /></a>
                                            </div>
                                            <a className="banner-link-overlay" href="shop.html" />
                                        </div>
                                        <div className="product-info">
                                            <div className="category">
                                                <ul>
                                                    <li><a href="shop.html">Men</a></li>
                                                    <li className="sep">/</li>
                                                    <li><a href="shop.html">Women</a></li>
                                                </ul>
                                            </div>
                                            <h4 className="title"><a href="single-product.html">Leather Mens Slipper</a></h4>
                                            <div className="prices">
                                                <span className="price-old">$100</span>
                                                <span className="sep">-</span>
                                                <span className="price">$240.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*== End prPduct Item ==*/}
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                {/*== Start Product Item ==*/}
                                <div className="product-item">
                                    <div className="inner-content">
                                        <div className="product-thumb">
                                            <a href="single-product.html">
                                                <img src="assets/img/shop/2.webp" width={270} height={274} alt="Image-HasTech" />
                                            </a>
                                            <div className="product-action">
                                                <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart" /></a>
                                                <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart" /></a>
                                                <button type="button" className="btn-product-quick-view-open">
                                                    <i className="fa fa-arrows" />
                                                </button>
                                                <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random" /></a>
                                            </div>
                                            <a className="banner-link-overlay" href="shop.html" />
                                        </div>
                                        <div className="product-info">
                                            <div className="category">
                                                <ul>
                                                    <li><a href="shop.html">Men</a></li>
                                                    <li className="sep">/</li>
                                                    <li><a href="shop.html">Women</a></li>
                                                </ul>
                                            </div>
                                            <h4 className="title"><a href="single-product.html">Quickiin Mens shoes</a></h4>
                                            <div className="prices">
                                                <span className="price">$140.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*== End prPduct Item ==*/}
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                {/*== Start Product Item ==*/}
                                <div className="product-item">
                                    <div className="inner-content">
                                        <div className="product-thumb">
                                            <a href="single-product.html">
                                                <img src="assets/img/shop/3.webp" width={270} height={274} alt="Image-HasTech" />
                                            </a>
                                            <div className="product-flag">
                                                <ul>
                                                    <li className="discount">-10%</li>
                                                </ul>
                                            </div>
                                            <div className="product-action">
                                                <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart" /></a>
                                                <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart" /></a>
                                                <button type="button" className="btn-product-quick-view-open">
                                                    <i className="fa fa-arrows" />
                                                </button>
                                                <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random" /></a>
                                            </div>
                                            <a className="banner-link-overlay" href="shop.html" />
                                        </div>
                                        <div className="product-info">
                                            <div className="category">
                                                <ul>
                                                    <li><a href="shop.html">Men</a></li>
                                                    <li className="sep">/</li>
                                                    <li><a href="shop.html">Women</a></li>
                                                </ul>
                                            </div>
                                            <h4 className="title"><a href="single-product.html">Rexpo Womens shoes</a></h4>
                                            <div className="prices">
                                                <span className="price-old">$60</span>
                                                <span className="sep">-</span>
                                                <span className="price">$260.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*== End prPduct Item ==*/}
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                {/*== Start Product Item ==*/}
                                <div className="product-item">
                                    <div className="inner-content">
                                        <div className="product-thumb">
                                            <a href="single-product.html">
                                                <img src="assets/img/shop/4.webp" width={270} height={274} alt="Image-HasTech" />
                                            </a>
                                            <div className="product-action">
                                                <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart" /></a>
                                                <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart" /></a>
                                                <button type="button" className="btn-product-quick-view-open">
                                                    <i className="fa fa-arrows" />
                                                </button>
                                                <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random" /></a>
                                            </div>
                                            <a className="banner-link-overlay" href="shop.html" />
                                        </div>
                                        <div className="product-info">
                                            <div className="category">
                                                <ul>
                                                    <li><a href="shop.html">Men</a></li>
                                                    <li className="sep">/</li>
                                                    <li><a href="shop.html">Women</a></li>
                                                </ul>
                                            </div>
                                            <h4 className="title"><a href="single-product.html">Hollister V-Neck Knit</a></h4>
                                            <div className="prices">
                                                <span className="price">$880.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*== End prPduct Item ==*/}
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                {/*== Start Product Item ==*/}
                                <div className="product-item">
                                    <div className="inner-content">
                                        <div className="product-thumb">
                                            <a href="single-product.html">
                                                <img src="assets/img/shop/5.webp" width={270} height={274} alt="Image-HasTech" />
                                            </a>
                                            <div className="product-action">
                                                <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart" /></a>
                                                <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart" /></a>
                                                <button type="button" className="btn-product-quick-view-open">
                                                    <i className="fa fa-arrows" />
                                                </button>
                                                <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random" /></a>
                                            </div>
                                            <a className="banner-link-overlay" href="shop.html" />
                                        </div>
                                        <div className="product-info">
                                            <div className="category">
                                                <ul>
                                                    <li><a href="shop.html">Men</a></li>
                                                    <li className="sep">/</li>
                                                    <li><a href="shop.html">Women</a></li>
                                                </ul>
                                            </div>
                                            <h4 className="title"><a href="single-product.html">Primitive Mens shoes</a></h4>
                                            <div className="prices">
                                                <span className="price">$500.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*== End prPduct Item ==*/}
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                {/*== Start Product Item ==*/}
                                <div className="product-item">
                                    <div className="inner-content">
                                        <div className="product-thumb">
                                            <a href="single-product.html">
                                                <img src="assets/img/shop/6.webp" width={270} height={274} alt="Image-HasTech" />
                                            </a>
                                            <div className="product-flag">
                                                <ul>
                                                    <li className="discount">-10%</li>
                                                </ul>
                                            </div>
                                            <div className="product-action">
                                                <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart" /></a>
                                                <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart" /></a>
                                                <button type="button" className="btn-product-quick-view-open">
                                                    <i className="fa fa-arrows" />
                                                </button>
                                                <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random" /></a>
                                            </div>
                                            <a className="banner-link-overlay" href="shop.html" />
                                        </div>
                                        <div className="product-info">
                                            <div className="category">
                                                <ul>
                                                    <li><a href="shop.html">Men</a></li>
                                                    <li className="sep">/</li>
                                                    <li><a href="shop.html">Women</a></li>
                                                </ul>
                                            </div>
                                            <h4 className="title"><a href="single-product.html">New Womens High Hills</a></h4>
                                            <div className="prices">
                                                <span className="price-old">$300</span>
                                                <span className="sep">-</span>
                                                <span className="price">$333.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*== End prPduct Item ==*/}
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                {/*== Start Product Item ==*/}
                                <div className="product-item">
                                    <div className="inner-content">
                                        <div className="product-thumb">
                                            <a href="single-product.html">
                                                <img src="assets/img/shop/7.webp" width={270} height={274} alt="Image-HasTech" />
                                            </a>
                                            <div className="product-action">
                                                <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart" /></a>
                                                <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart" /></a>
                                                <button type="button" className="btn-product-quick-view-open">
                                                    <i className="fa fa-arrows" />
                                                </button>
                                                <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random" /></a>
                                            </div>
                                            <a className="banner-link-overlay" href="shop.html" />
                                        </div>
                                        <div className="product-info">
                                            <div className="category">
                                                <ul>
                                                    <li><a href="shop.html">Men</a></li>
                                                    <li className="sep">/</li>
                                                    <li><a href="shop.html">Women</a></li>
                                                </ul>
                                            </div>
                                            <h4 className="title"><a href="single-product.html">Simple Fabric Shoe</a></h4>
                                            <div className="prices">
                                                <span className="price">$133.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*== End prPduct Item ==*/}
                            </div>
                            <div className="col-sm-6 col-lg-3">
                                {/*== Start Product Item ==*/}
                                <div className="product-item">
                                    <div className="inner-content">
                                        <div className="product-thumb">
                                            <a href="single-product.html">
                                                <img src="assets/img/shop/8.webp" width={270} height={274} alt="Image-HasTech" />
                                            </a>
                                            <div className="product-flag">
                                                <ul>
                                                    <li className="discount">-10%</li>
                                                </ul>
                                            </div>
                                            <div className="product-action">
                                                <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart" /></a>
                                                <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart" /></a>
                                                <button type="button" className="btn-product-quick-view-open">
                                                    <i className="fa fa-arrows" />
                                                </button>
                                                <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random" /></a>
                                            </div>
                                            <a className="banner-link-overlay" href="shop.html" />
                                        </div>
                                        <div className="product-info">
                                            <div className="category">
                                                <ul>
                                                    <li><a href="shop.html">Men</a></li>
                                                    <li className="sep">/</li>
                                                    <li><a href="shop.html">Women</a></li>
                                                </ul>
                                            </div>
                                            <h4 className="title"><a href="single-product.html">exclusive mens shoe</a></h4>
                                            <div className="prices">
                                                <span className="price-old">$300</span>
                                                <span className="sep">-</span>
                                                <span className="price">$420.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*== End prPduct Item ==*/}
                            </div>
                        </div>
                    </div>
                </section>
                {/*== End Product Area Wrapper ==*/}
                {/*== Start Divider Area Wrapper ==*/}
                <section className="parallax" data-speed="1.08" data-bg-img="assets/img/photos/bg2.webp">
                    <div className="container pt--0 pb--0">
                        <div className="row divider-wrap divider-style3">
                            <div className="col-lg-6">
                                <div className="divider-thumb mousemove">
                                    <div className="shape-one scene">
                                        <span className="scene-layer" data-depth=".5">
                                            <img src="assets/img/photos/divider1.webp" width={377} height={243} alt="Image-HasTech" />
                                        </span>
                                    </div>
                                    <div className="shape-two mousemove-layer" data-speed={1}><img src="assets/img/shape/4.webp" width={532} height={326} alt="Image-HasTech" /></div>
                                    <div className="shape-three"><img src="assets/img/shape/5.webp" width={280} height={339} alt="Image-HasTech" /></div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="divider-content">
                                    <h4 className="sub-title">Saving 50%</h4>
                                    <h2 className="title">All Online Store</h2>
                                    <p className="desc">Offer Available All Shoes &amp; Products</p>
                                    <a className="btn-theme" href="shop.html">Shop Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*== End Divider Area Wrapper ==*/}
                {/*== Start Feature Area Wrapper ==*/}
                <div className="feature-area">
                    <div className="container pb--0">
                        <div className="row">
                            <div className="col-12">
                                <div className="feature-content-box">
                                    <div className="feature-box-wrap">
                                        <div className="col-item">
                                            <div className="feature-icon-box">
                                                <div className="inner-content">
                                                    <div className="icon-box">
                                                        <img className="icon-img" src="assets/img/icons/1.webp" width={55} height={41} alt="Icon-HasTech" />
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="title">Free Home Delivary</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-item">
                                            <div className="feature-icon-box">
                                                <div className="inner-content">
                                                    <div className="icon-box">
                                                        <img className="icon-img" src="assets/img/icons/2.webp" width={35} height={41} alt="Icon-HasTech" />
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="title">Secure Payment</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-item">
                                            <div className="feature-icon-box">
                                                <div className="inner-content">
                                                    <div className="icon-box">
                                                        <img className="icon-img" src="assets/img/icons/3.webp" width={33} height={41} alt="Icon-HasTech" />
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="title">Order Discount</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-item">
                                            <div className="feature-icon-box">
                                                <div className="inner-content">
                                                    <div className="icon-box">
                                                        <img className="icon-img" src="assets/img/icons/4.webp" width={43} height={41} alt="Icon-HasTech" />
                                                    </div>
                                                    <div className="content">
                                                        <h5 className="title">24 x 7 Online Support</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="shape-group-style1">
                                        <div className="shape-group-one"><img src="assets/img/shape/6.webp" width={214} height={58} alt="Image-HasTech" /></div>
                                        <div className="shape-group-two"><img src="assets/img/shape/7.webp" width={136} height={88} alt="Image-HasTech" /></div>
                                        <div className="shape-group-three"><img src="assets/img/shape/8.webp" width={108} height={74} alt="Image-HasTech" /></div>
                                        <div className="shape-group-four"><img src="assets/img/shape/9.webp" width={239} height={69} alt="Image-HasTech" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*== End Feature Area Wrapper ==*/}
                {/*== Start Product Area Wrapper ==*/}
                <section className="product-area product-best-seller-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title text-center">
                                    <h3 className="title">Best Seller</h3>
                                    <div className="desc">
                                        <p>There are many variations of passages of Lorem Ipsum available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="product-slider-wrap">
                                    <div className="swiper-container product-slider-col4-container">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                {/*== Start Product Item ==*/}
                                                <div className="product-item">
                                                    <div className="inner-content">
                                                        <div className="product-thumb">
                                                            <a href="single-product.html">
                                                                <img src="assets/img/shop/1.webp" width={270} height={274} alt="Image-HasTech" />
                                                            </a>
                                                            <div className="product-flag">
                                                                <ul>
                                                                    <li className="discount">-10%</li>
                                                                </ul>
                                                            </div>
                                                            <div className="product-action">
                                                                <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart" /></a>
                                                                <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart" /></a>
                                                                <button type="button" className="btn-product-quick-view-open">
                                                                    <i className="fa fa-arrows" />
                                                                </button>
                                                                <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random" /></a>
                                                            </div>
                                                            <a className="banner-link-overlay" href="shop.html" />
                                                        </div>
                                                        <div className="product-info">
                                                            <div className="category">
                                                                <ul>
                                                                    <li><a href="shop.html">Men</a></li>
                                                                    <li className="sep">/</li>
                                                                    <li><a href="shop.html">Women</a></li>
                                                                </ul>
                                                            </div>
                                                            <h4 className="title"><a href="single-product.html">Modern Smart Shoes</a></h4>
                                                            <div className="prices">
                                                                <span className="price-old">$200</span>
                                                                <span className="sep">-</span>
                                                                <span className="price">$240.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*== End prPduct Item ==*/}
                                            </div>
                                            <div className="swiper-slide">
                                                {/*== Start Product Item ==*/}
                                                <div className="product-item">
                                                    <div className="inner-content">
                                                        <div className="product-thumb">
                                                            <a href="single-product.html">
                                                                <img src="assets/img/shop/7.webp" width={270} height={274} alt="Image-HasTech" />
                                                            </a>
                                                            <div className="product-action">
                                                                <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart" /></a>
                                                                <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart" /></a>
                                                                <button type="button" className="btn-product-quick-view-open">
                                                                    <i className="fa fa-arrows" />
                                                                </button>
                                                                <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random" /></a>
                                                            </div>
                                                            <a className="banner-link-overlay" href="shop.html" />
                                                        </div>
                                                        <div className="product-info">
                                                            <div className="category">
                                                                <ul>
                                                                    <li><a href="shop.html">Men</a></li>
                                                                    <li className="sep">/</li>
                                                                    <li><a href="shop.html">Women</a></li>
                                                                </ul>
                                                            </div>
                                                            <h4 className="title"><a href="single-product.html">Quickiin Mens shoes</a></h4>
                                                            <div className="prices">
                                                                <span className="price">$440.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*== End prPduct Item ==*/}
                                            </div>
                                            <div className="swiper-slide">
                                                {/*== Start Product Item ==*/}
                                                <div className="product-item">
                                                    <div className="inner-content">
                                                        <div className="product-thumb">
                                                            <a href="single-product.html">
                                                                <img src="assets/img/shop/3.webp" width={270} height={274} alt="Image-HasTech" />
                                                            </a>
                                                            <div className="product-flag">
                                                                <ul>
                                                                    <li className="discount">-10%</li>
                                                                </ul>
                                                            </div>
                                                            <div className="product-action">
                                                                <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart" /></a>
                                                                <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart" /></a>
                                                                <button type="button" className="btn-product-quick-view-open">
                                                                    <i className="fa fa-arrows" />
                                                                </button>
                                                                <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random" /></a>
                                                            </div>
                                                            <a className="banner-link-overlay" href="shop.html" />
                                                        </div>
                                                        <div className="product-info">
                                                            <div className="category">
                                                                <ul>
                                                                    <li><a href="shop.html">Men</a></li>
                                                                    <li className="sep">/</li>
                                                                    <li><a href="shop.html">Women</a></li>
                                                                </ul>
                                                            </div>
                                                            <h4 className="title"><a href="single-product.html">Rexpo Womens shoes</a></h4>
                                                            <div className="prices">
                                                                <span className="price-old">$130</span>
                                                                <span className="sep">-</span>
                                                                <span className="price">$333.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*== End prPduct Item ==*/}
                                            </div>
                                            <div className="swiper-slide">
                                                {/*== Start Product Item ==*/}
                                                <div className="product-item">
                                                    <div className="inner-content">
                                                        <div className="product-thumb">
                                                            <a href="single-product.html">
                                                                <img src="assets/img/shop/4.webp" width={270} height={274} alt="Image-HasTech" />
                                                            </a>
                                                            <div className="product-action">
                                                                <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart" /></a>
                                                                <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart" /></a>
                                                                <button type="button" className="btn-product-quick-view-open">
                                                                    <i className="fa fa-arrows" />
                                                                </button>
                                                                <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random" /></a>
                                                            </div>
                                                            <a className="banner-link-overlay" href="shop.html" />
                                                        </div>
                                                        <div className="product-info">
                                                            <div className="category">
                                                                <ul>
                                                                    <li><a href="shop.html">Men</a></li>
                                                                    <li className="sep">/</li>
                                                                    <li><a href="shop.html">Women</a></li>
                                                                </ul>
                                                            </div>
                                                            <h4 className="title"><a href="single-product.html">Leather Mens Slipper</a></h4>
                                                            <div className="prices">
                                                                <span className="price">$540.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*== End prPduct Item ==*/}
                                            </div>
                                            <div className="swiper-slide">
                                                {/*== Start Product Item ==*/}
                                                <div className="product-item">
                                                    <div className="inner-content">
                                                        <div className="product-thumb">
                                                            <a href="single-product.html">
                                                                <img src="assets/img/shop/5.webp" width={270} height={274} alt="Image-HasTech" />
                                                            </a>
                                                            <div className="product-action">
                                                                <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart" /></a>
                                                                <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart" /></a>
                                                                <button type="button" className="btn-product-quick-view-open">
                                                                    <i className="fa fa-arrows" />
                                                                </button>
                                                                <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random" /></a>
                                                            </div>
                                                            <a className="banner-link-overlay" href="shop.html" />
                                                        </div>
                                                        <div className="product-info">
                                                            <div className="category">
                                                                <ul>
                                                                    <li><a href="shop.html">Men</a></li>
                                                                    <li className="sep">/</li>
                                                                    <li><a href="shop.html">Women</a></li>
                                                                </ul>
                                                            </div>
                                                            <h4 className="title"><a href="single-product.html">Primitive Mens shoes</a></h4>
                                                            <div className="prices">
                                                                <span className="price-old">$40</span>
                                                                <span className="sep">-</span>
                                                                <span className="price">$280.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*== End prPduct Item ==*/}
                                            </div>
                                            <div className="swiper-slide">
                                                {/*== Start Product Item ==*/}
                                                <div className="product-item">
                                                    <div className="inner-content">
                                                        <div className="product-thumb">
                                                            <a href="single-product.html">
                                                                <img src="assets/img/shop/6.webp" width={270} height={274} alt="Image-HasTech" />
                                                            </a>
                                                            <div className="product-flag">
                                                                <ul>
                                                                    <li className="discount">-10%</li>
                                                                </ul>
                                                            </div>
                                                            <div className="product-action">
                                                                <a className="btn-product-wishlist" href="shop-wishlist.html"><i className="fa fa-heart" /></a>
                                                                <a className="btn-product-cart" href="shop-cart.html"><i className="fa fa-shopping-cart" /></a>
                                                                <button type="button" className="btn-product-quick-view-open">
                                                                    <i className="fa fa-arrows" />
                                                                </button>
                                                                <a className="btn-product-compare" href="shop-compare.html"><i className="fa fa-random" /></a>
                                                            </div>
                                                            <a className="banner-link-overlay" href="shop.html" />
                                                        </div>
                                                        <div className="product-info">
                                                            <div className="category">
                                                                <ul>
                                                                    <li><a href="shop.html">Men</a></li>
                                                                    <li className="sep">/</li>
                                                                    <li><a href="shop.html">Women</a></li>
                                                                </ul>
                                                            </div>
                                                            <h4 className="title"><a href="single-product.html">Simple Fabric Shoe</a></h4>
                                                            <div className="prices">
                                                                <span className="price-old">$400</span>
                                                                <span className="sep">-</span>
                                                                <span className="price">$580.00</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/*== End prPduct Item ==*/}
                                            </div>
                                        </div>
                                    </div>
                                    {/*== Add Swiper Arrows ==*/}
                                    <div className="product-swiper-btn-wrap">
                                        <div className="product-swiper-btn-prev">
                                            <i className="fa fa-arrow-left" />
                                        </div>
                                        <div className="product-swiper-btn-next">
                                            <i className="fa fa-arrow-right" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*== End Product Area Wrapper ==*/}
                {/*== Start Product Collection Area Wrapper ==*/}
                <section className="product-area product-collection-area">
                    <div className="container pt--0">
                        <div className="row">
                            <div className="col-lg-4 col-md-6">
                                {/*== Start Product Collection Item ==*/}
                                <div className="product-collection">
                                    <div className="inner-content">
                                        <div className="product-collection-content">
                                            <div className="content">
                                                <h3 className="title"><a href="shop.html">Sports Shoes</a></h3>
                                                <h4 className="price">From $95.00</h4>
                                            </div>
                                        </div>
                                        <div className="product-collection-thumb" data-bg-img="assets/img/shop/collection/1.webp" />
                                        <a className="banner-link-overlay" href="shop.html" />
                                    </div>
                                </div>
                                {/*== End Product Collection Item ==*/}
                            </div>
                            <div className="col-lg-4 col-md-6">
                                {/*== Start Product Collection Item ==*/}
                                <div className="product-collection">
                                    <div className="inner-content">
                                        <div className="product-collection-content">
                                            <div className="content">
                                                <h3 className="title"><a href="shop.html">Latest Shoes</a></h3>
                                                <h4 className="price">From $90.00</h4>
                                            </div>
                                        </div>
                                        <div className="product-collection-thumb" data-bg-img="assets/img/shop/collection/2.webp" />
                                        <a className="banner-link-overlay" href="shop.html" />
                                    </div>
                                </div>
                                {/*== End Product Collection Item ==*/}
                            </div>
                            <div className="col-lg-4 col-md-6">
                                {/*== Start Product Collection Item ==*/}
                                <div className="product-collection">
                                    <div className="inner-content">
                                        <div className="product-collection-content">
                                            <div className="content">
                                                <h3 className="title"><a href="shop.html">Office Shoes</a></h3>
                                                <h4 className="price">From $82.00</h4>
                                            </div>
                                        </div>
                                        <div className="product-collection-thumb" data-bg-img="assets/img/shop/collection/3.webp" />
                                        <a className="banner-link-overlay" href="shop.html" />
                                    </div>
                                </div>
                                {/*== End Product Collection Item ==*/}
                            </div>
                        </div>
                    </div>
                </section>
                {/*== End Product Collection Area Wrapper ==*/}
                {/*== Start Testimonial Area Wrapper ==*/}
                <section className="testimonial-area">
                    <div className="container pt--0">
                        <div className="row">
                            <div className="col-12">
                                <div className="section-title text-center">
                                    <h3 className="title">Client Feedback</h3>
                                    <div className="desc">
                                        <p>There are many variations of passages of Lorem Ipsum available</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="swiper-container testimonial-slider-container">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            {/*== Start Testimonial Item ==*/}
                                            <div className="testimonial-item">
                                                <div className="testi-inner-content">
                                                    <div className="testi-thumb">
                                                        <img src="assets/img/testimonial/1.webp" width={90} height={90} alt="Image-HasTech" />
                                                    </div>
                                                    <div className="testi-content">
                                                        <p>Lorem ipsum dolor sit amel adipiscing elit, sed do eiusll tempor incididunt ut laborj et dolore magna.</p>
                                                        <div className="testi-author">
                                                            <div className="testi-info">
                                                                <span className="name"><a href="about-us.html">Jaren Hammer</a></span>
                                                            </div>
                                                        </div>
                                                        <div className="testi-quote"><img src="assets/img/icons/quote1.webp" width={62} height={44} alt="Image-HasTech" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*== End Testimonial Item ==*/}
                                        </div>
                                        <div className="swiper-slide">
                                            {/*== Start Testimonial Item ==*/}
                                            <div className="testimonial-item">
                                                <div className="testi-inner-content">
                                                    <div className="testi-thumb">
                                                        <img src="assets/img/testimonial/2.webp" width={90} height={90} alt="Image-HasTech" />
                                                    </div>
                                                    <div className="testi-content">
                                                        <p>Lorem ipsum dolor sit amel adipiscing elit, sed do eiusll tempor incididunt ut laborj et dolore magna.</p>
                                                        <div className="testi-author">
                                                            <div className="testi-info">
                                                                <span className="name"><a href="about-us.html">Dorian Cordova</a></span>
                                                            </div>
                                                        </div>
                                                        <div className="testi-quote"><img src="assets/img/icons/quote1.webp" width={62} height={44} alt="Image-HasTech" /></div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/*== End Testimonial Item ==*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*== End Testimonial Area Wrapper ==*/}
            </main>

        </>
    )
}

export default Home