/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Loading from "./Loading";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  // document.title = `My News - ${props.category} Daily news free`;

  const newsUpdate = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.page}`;
    setLoading(true);
    let data = await fetch(url);
    let pasedata = await data.json();
    console.log(pasedata);
    setArticles(pasedata.articles);
    setLoading(false);
    setTotalResults(pasedata.totalResults);
  };
  useEffect(() => {
    newsUpdate();
  },[]);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.page}`;
    setPage(page + 1);
    let data = await fetch(url);
    let pasedata = await data.json();
    console.log(pasedata);
    setArticles(articles.concat(pasedata.articles));
    setTotalResults(pasedata.totalResults);
  };

  return (
    <>
      <section>
        <h1 className="text-center my-5">
          My News - Top {props.category} Headlines
        </h1>
        {loading && <Loading />}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Loading />}
        >
          <div className="container my-4">
            {articles.map((e) => {
              return (
                <div className="row my-2" key={e.url}>
                  <NewsItem
                    Source={e.source.name}
                    Title={e.title}
                    Description={e.description}
                    NewsUrl={e.url}
                    ImageUrl={e.urlToImage}
                    Author={e.author}
                    date={e.publishedAt}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </section>
    </>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category:'general',
};
News.propTypes = {
  category: PropTypes.string,
  country: PropTypes.string,
  pageSize: PropTypes.number,
};
export default News;
