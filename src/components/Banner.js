import { useEffect, useState } from "react";
import banner from "../banner.jpg";
import { Link } from "react-router-dom";
import algoliasearch from "algoliasearch/lite";

const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchInputChange = async (e) => {
    setSearchInput(e.target.value);

    if (e.target.value.trim() !== "") {
      const client = algoliasearch(
        "8KWTT8PFUR",
        "fe049f0882c8521b520cc1522037101a"
      );
      const index = client.initIndex("properties");

      try {
        const { hits } = await index.search(e.target.value.trim(), {
          attributesToHighlight: ["name"],
        });
        setSearchResults(hits);
      } catch (error) {
        console.error("Error performing search:", error);
      }
    } else {
      setSearchResults([]);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Implement your search submit logic if needed
  };

  return (
    <div
      className="banner d-flex align-items-center"
      style={{ backgroundImage: `url(${banner})` }}
    >
      <div className="bg-custom">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mx-auto">
              <div className="banner-area text-center pt-4 pb-4">
                <h2 className="mt-2 mb-4 banner-title">
                  <strong> Search Under Construction Projects</strong>{" "}
                </h2>
                <div className="search-area d-flex justify-content-center align-items-center">
                  <form onSubmit={handleSearchSubmit} className="d-flex">
                    <input
                      type="text"
                      value={searchInput}
                      onChange={handleSearchInputChange}
                      className="form-control inp-search mr-2 "
                      style={{ width: "490px" }}
                      placeholder="Search"
                    />
                    <button
                      type="submit"
                      className="btn btn-primary btn-search"
                    >
                      Search All
                    </button>
                  </form>
                </div>
                {searchResults.length > 0 && (
                  <div className="find-search mt-3">
                    <ul>
                      {searchResults.map((result) => (
                        <li key={result.objectID}>
                          <Link to={`/flat/${result.name}`}>{result.name}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
