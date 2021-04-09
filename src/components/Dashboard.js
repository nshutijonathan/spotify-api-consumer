import React, { useState } from "react";

import {
  initiateGetResult,
  initiateLoadMoreAlbums,
  initiateLoadMorePlaylist,
  initiateLoadMoreArtists,
} from "../redux/actions/result";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import SearchResult from "./SearchResult";
import SearchForm from "./SearchForm";
import Header from "./Header";
import Loader from "./Loader";

const Dashboard = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("albums");
  const { isValidSession, history } = props;

  const handleSearch = (searchTerm) => {
    if (isValidSession()) {
      setIsLoading(true);
      props.dispatch(initiateGetResult(searchTerm)).then(() => {
        setIsLoading(false);
        setSelectedCategory("albums");
      });
    } else {
      history.push({
        pathname: "/",
        state: {
          session_expired: true,
        },
      });
    }
  };
  return (
    <div>
      <Header />
      <SearchForm handleSearch={handleSearch} />
      {/* <Loader show={isLoading}>Loading...</Loader> */}
    </div>
  );
};

export default Dashboard;
