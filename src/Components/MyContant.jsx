import React from "react";
import { Link } from "react-router-dom";

const MyContant = () => {
  return (
    <>
      <footer className="bg-dark link-light my-3">
        <div className="container d-md-flex py-5 justify-content-evenly">
          <div>
            <h6 className="text-center">Cetegory</h6>
            <ul className="nav-item">
              <li className="nav-link">
                <Link to="/" className="nav-link">
                  Business
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/" className="nav-link">
                  Entertainment
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/" className="nav-link">
                  Helath
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/" className="nav-link">
                  Science
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/" className="nav-link">
                  Sport
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/" className="nav-link">
                  Techology
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="text-center">Support</h6>
            <ul className="nav-item">
              <li className="nav-link">
                <Link to="/" className="nav-link">
                  Content us
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/" className="nav-link">
                  About{" "}
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/" className="nav-link">
                  Prvaicy & Security
                </Link>
              </li>
              <li className="nav-link">
                <Link to="/" className="nav-link">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contant us</h4>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Ask Me Somone"
                aria-label="Input group example"
                aria-describedby="btnGroupAddon"
              />
              <div className="input-group-text bg-dark" id="btnGroupAddon">
                <img
                  src="https://img.icons8.com/?size=50&id=2837&format=png&color=FFFFFF"
                  alt=""
                />
              </div>
            </div>
            <div className="d-flex icon">
              <ul className="d-flex nav">
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    <img
                      src="https://img.icons8.com/?size=30&id=jlpBF1fJe9fs&format=png&color=FFFFFF"
                      alt=""
                    />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    <img
                      src="https://img.icons8.com/?size=30&id=62225&format=png&color=FFFFFF"
                      alt=""
                    />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    <img
                      src="https://img.icons8.com/?size=30&id=32292&format=png&color=FFFFFF"
                      alt=""
                    />
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    <img
                      src="https://img.icons8.com/?size=30&id=62856&format=png&color=FFFFFF"
                      alt=""
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center py-3 bg-dark">
          <span className="py-1">&copy; copyright 2024-25 in My news.com</span>
        </div>
      </footer>
    </>
  );
};
export default MyContant