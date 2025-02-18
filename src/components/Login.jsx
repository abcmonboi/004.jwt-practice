import React from 'react'

const Login = () => {
  return (
    <>
<main className="main-content">
  {/*== Start Page Header Area Wrapper ==*/}
  <div className="page-header-area" data-bg-img="assets/img/photos/bg3.webp">
    <div className="container pt--0 pb--0">
      <div className="row">
        <div className="col-12">
          <div className="page-header-content">
            <h2 className="title" data-aos="fade-down" data-aos-duration={1000}>Login</h2>
            <nav className="breadcrumb-area" data-aos="fade-down" data-aos-duration={1200}>
              <ul className="breadcrumb">
                <li><a href="index.html">Home</a></li>
                <li className="breadcrumb-sep"></li>
                <li>Login</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*== End Page Header Area Wrapper ==*/}
  {/*== Start My Account Area Wrapper ==*/}
  <section className="account-area">
    <div className="container">
      <div className="row">
        <div className="col-sm-8 m-auto">
          <div className="section-title text-center">
            <h2 className="title">Login</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="login-form-content">
            <form action="#">
              <div className="row">
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="username">Username or email address <span className="required">*</span></label>
                    <input id="username" className="form-control" type="email" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="password">Password <span className="required">*</span></label>
                    <input id="password" className="form-control" type="password" />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <a className="btn-login" href="account.html">Login</a>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group account-info-group mb--0">
                    <div className="rememberme-account">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" defaultValue id="defaultCheck1" />
                        <label className="form-check-label" htmlFor="defaultCheck1">Remember me</label>
                      </div>
                    </div>
                    <a className="lost-password" href="#/">Lost your password?</a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*== End My Account Area Wrapper ==*/}
</main>

    </>
  )
}

export default Login