import React from "react";

const NewsItem = (props) =>{

    let { Title, Description, ImageUrl, NewsUrl, Author, date, Source } =
      props;
    return (
      <>
        <div className="container">
          <div className="card mb-3 ">
            <div className="row g-0 NewsItem ">
              <div className="position-relative">
                <span
                  className="badge rounded-pill bg-danger"
                  style={{ position: "absolute", top: "3px", right: "0" }}
                >
                  {Source}
                  <span className="visually-hidden">unread messages</span>
                </span>
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{Title}</h5>
                  <p className="card-text">{Description}</p>
                  <p className="card-text">
                    <small className="text-body-secondary">
                      {!Author ? "" : Author} on {new Date(date).toGMTString()}
                    </small>
                  </p>
                  <a
                    href={NewsUrl}
                    target="_blank"
                    className="btn btn-outline-dark btn-sm"
                    rel="noreferrer"
                  >
                    Read More
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <img src={ImageUrl} alt="" className="img-fluid rounded-end" />
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
export default NewsItem
