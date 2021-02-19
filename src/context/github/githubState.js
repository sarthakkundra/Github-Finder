// Dependencies
import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";


// Types for dispatch
import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  GET_LABELS,
  SET_TEXT,
  SET_HASMORE
} from "../types";

// const githubContext = useContext(GithubContext);

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    labels: [],
    loading: false,
    hasMore: true,
    text: ""
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);
  
  // Search multiple users
  const searchUsers = async (user, page_no, prevUsers) => {
    if (page_no === 1){
      setLoading();
    }
    try{
      const res = await axios({
        method: 'GET',
        url: 'https://api.github.com/search/users',
        params: {
                  q: user,
                  client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
                  client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
                  per_page: 12,
                  page: page_no,
                }
      })
      const data = [...new Set([...prevUsers, ...res.data.items])]
      dispatch({
        type: SEARCH_USERS,
        payload: data,
      });
    } catch(e){
      setHasMore()
    }
  };

  // Set search text
  const setText = (text) => {
    dispatch({
      type: SET_TEXT,
      payload: text
    })
  }

  // Get data of single user
  const getUser = async (username) => {
    setLoading();
    const res = await axios({
      method: 'GET',
      url: `https://api.github.com/users/${username}`,
      params: {
                client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
                client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
              }
    })
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  // Get repos of single user
  const getUserRepos = async (username) => {
    setLoading();
    const res = await axios({
      method: 'GET',
      url: `https://api.github.com/users/${username}/repos`,
      params: {
                client_id: process.env.REACT_APP_GITHUB_CLIENT_ID,
                client_secret: process.env.REACT_APP_GITHUB_CLIENT_SECRET,
                per_page: 10,
                page: 1,
              }
    })
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  // Search Labels
  const searchLabels = async(label) => {
    
    const res = await axios.get(
      `https://api.github.com/search/labels?repository_id=64778136&q=${label}`
    );

    dispatch({
      type: GET_LABELS,
      payload: res.data.items
    })
    console.log(res.data);
  };

  //   Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  const setLoading = () => dispatch({ type: SET_LOADING });

  const setHasMore = () => dispatch({type: SET_HASMORE });
  return (
    <GithubContext.Provider
      value={{
        user: state.user,
        users: state.users,
        loading: state.loading,
        repos: state.repos,
        text: state.text,
        hasMore: state.hasMore,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
        searchLabels,
        setText,
        setHasMore
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
