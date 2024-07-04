import React from "react";
import { Link } from "react-router-dom";

const Navbar =()=> {

    return (
      <>
        <header>
          <nav className="navbar navbar-expand-lg bg-dark" id="liveAlertPlaceholder">
            <div className="container-fluid">
              <Link to="/home" className="navbar-brand link-light text-sm ">
                <img src={"favicon.ico"} alt="" style={{ width: "40px" }} />
                My News
              </Link>
              {/* <div>
                <form className="d-flex input-group w-auto" role="search">
                  <input
                    type="serach"
                    className="form-control"
                    placeholder="Search..."
                    aria-label="Input group example"
                    aria-describedby="btnGroupAddon"
                  />
                  <div className="input-group-text bg-dark" id="btnGroupAddon">
                    <img
                      src="https://img.icons8.com/?size=30&id=132&format=png&color=FFFFFF"
                      alt=""
                    />
                  </div>
                </form>
              </div> */}
              <div
                className="offcanvas offcanvas-end bg-dark"
                tabIndex="-1"
                id="offcanvasNavbar "
                aria-labelledby="offcanvasNavbarLabel"
              >
                <div className="offcanvas-header bg-dark">
                  <button
                    type="button"
                    className="btn-close bg-light"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                  ></button>
                </div>
                <div id="offcanvas-body">
                  <ul className="navbar-nav justify-content-center flex-grow-1 pe-3 mx-3">
                    <li className="nav-item">
                      <Link
                        className="nav-link link-light"
                        aria-current="page"
                        to="/home"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link link-light"
                        aria-current="page"
                        to="/business"
                      >
                        Business
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link link-light"
                        aria-current="page"
                        to="/entertainment"
                      >
                        Entertainment
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link link-light"
                        aria-current="page"
                        to="/health"
                      >
                        Health
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link link-light"
                        aria-current="page"
                        to="/science"
                      >
                        Science
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link link-light"
                        aria-current="page"
                        to="/sports"
                      >
                        Sports
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link link-light"
                        aria-current="page"
                        to="/technology"
                      >
                        Technology
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link link-light"
                        aria-current="page"
                        to="/about"
                      >
                        About
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link
                        className="nav-link link-light"
                        aria-current="page"
                        to="/contant"
                      >
                        Contant
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="dropdown d-flex ">
                <button
                  className="btn btn-dark dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  EN
                </button>
                <ul className="dropdown-menu dropdown-menu-dark">
                  <li>
                    <Link className="dropdown-item link-light" to="/">
                      in
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item link-light" to="/">
                      us
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item link-light" to="/">
                      jp
                    </Link>
                  </li>
                </ul>
                <button
                  className="btn bg-dark link-light border-light"
                  type="submit"
                >
                  <Link className="nav-link" to="/">
                    Login
                  </Link>
                </button>
              </div>
              <button
                className="navbar-toggler bg-light"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasNavbar"
                aria-controls="offcanvasNavbar"
                aria-label="Toggle navigation"
                id="iveAlertBtn"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </nav>
        </header>
      </>
    );
 
}

export default Navbar;
