/** @jsx jsx */
import React, { useContext } from "react";
import { SearchContext } from "@/context/search-context";
import { jsx } from '@emotion/react'

import { 
  searchFixed,
  popUpBg,
  searchForms,
  sfCloser
}  from '../assets/styles/SearchPopUp.styles'

const SearchPopup = () => {
  const { searchStatus, updateSearchStatus } = useContext(SearchContext);
  const handleSearchClick = e => {
    e.preventDefault();
    updateSearchStatus(!searchStatus);
  };
  return (
    <div css={[searchFixed, popUpBg]} className="animated fadeIn d-block">
      <div className="container-fluid">
        <a
          href=""
          id="sfCloser"
          onClick={handleSearchClick}
          css={sfCloser}
        ></a>
        <div css={searchForms}>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <form method="post" action="#">
                  <input
                    type="text"
                    name="s"
                    className="searchField"
                    placeholder="Search here..."
                  />
                  <button type="submit">
                    <i className="fa fa-search"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPopup;
