import axios from "axios";
import React, { useEffect, useState } from "react";
// import SearchCard from "./SearchCard";
import "./css/SearchBar.css";
import Movieitem from "./Movieitem";

function SearchBar(props) {
  const [query, setQuery] = useState("");
  const [resultss, setResultss] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const searchBaseUrl = "https://api.themoviedb.org/3/search/multi?";
  const apiKey = props.apiKey;
  // const pageNo = props.pageNo;
  // const setPageNo = props.setPageNo;
  const totalPage = props.totalPage;
  const setTotalPage = props.setTotalPage;

  const onChange = async (e) => {
    e.preventDefault();
    setQuery(e.target.value);
  };

  const upDateSearch = async () => {
    await axios
      .get(
        `${searchBaseUrl}api_key=${apiKey}&language=en-US&query=${query}&page=${pageNo}&include_adult=true`
      )
      .then(({ data }) => {
        if (!data.errors) {
          setResultss(data.results);
          setTotalPage(data.total_pages);
          console.log(resultss + "total page");
        } else {
          setResultss([]);
        }
      });
  };

  useEffect(() => {
    upDateSearch();
  }, [apiKey, searchBaseUrl, query, pageNo]);

  // console.log(resultss + "search data");

  const handelNextClick = async () => {
    setPageNo(pageNo + 1);
  };
  const handelPrevClick = async () => {
    setPageNo(pageNo - 1);
  };

  return (
    <>
      {" "}
      <div className="pageLableBox">
        <p className="pageLable">Page No :{pageNo}</p>
      </div>
      <div className="container">
        <div className="searchContainer">
          <input
            type="text"
            name="search"
            placeholder="Search..."
            className="searchInput"
            onChange={onChange}
            value={query}
          />
          <a className="searchbtn">
            <i className="fas fa-search"></i>
          </a>
        </div>

        <div className="searchcard">
          {resultss.length > 0 &&
            resultss.map((movie) => (
              <div className="col-md-4 cardSty" key={movie.id}>
                <Movieitem
                  title={movie.title || movie.name}
                  language={movie.original_language}
                  vote_average={movie.vote_average}
                  original_title={movie.original_title || movie.original_name}
                  release_date={movie.release_date || movie.air_date}
                  genres={[movie.genre_ids]}
                  overview={movie.overview}
                  imageUrl={
                    movie.poster_path
                      ? movie.poster_path
                      : "kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
                  }
                  movie_id={movie.id}
                  elements={movie}
                  type={props.ctype}
                  backdrop_path={movie.backdrop_path}
                />
              </div>
            ))}
        </div>
        <div
          className="npBox d-flex justify-content-between"
          style={{ zIndex: "100" }}
        >
          <button
            disabled={pageNo <= 1}
            type="button"
            onClick={handelPrevClick}
            className="btn np"
            style={{ zIndex: "100" }}
          >
            &laquo; Previous{" "}
          </button>

          <button
            disabled={pageNo >= totalPage}
            type="button"
            onClick={handelNextClick}
            className="btn np"
            style={{ zIndex: "100" }}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchBar;
