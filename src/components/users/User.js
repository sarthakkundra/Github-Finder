import React, { Fragment, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layouts/Spinner.js";
import Repos from "../repos/Repos";
import SearchLabel from "../repos/SearchLabel";
import GithubContext from "../../context/github/githubContext";

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { loading, getUser, user, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    company,
  } = user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back to Search
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i className='fas fa-check text-success' />
      ) : (
        <i className='fas fa-times-circle text-danger' />
      )}
      <div className='card grid-2'>
        <div className='all-center'>
          <img
            src={avatar_url}
            alt=''
            className='round-image'
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <p>Bio: {bio}</p>
            </Fragment>
          )}
          <a href={html_url} className='btn btn-dark my-1'>
            View Github Profile
          </a>
          <ul>
            <li>{login && <Fragment>Username: {login}</Fragment>}</li>
            <li>{company && <Fragment>Company: {company}</Fragment>}</li>
            <li>{blog && <Fragment>Website: {blog}</Fragment>}</li>
          </ul>
        </div>
      </div>
      <div className='card text-center'>
        <div className='badge badge-primary'>Followers: {followers}</div>
        <div className='badge badge-success'>Following: {following}</div>
        <div className='badge badge-light'>
          Public Repositories: {public_repos}
        </div>
        <div className='badge badge-dark'>Public Gists: {public_gists}</div>
      </div>
      <SearchLabel />
      <Repos repos={repos} />
    </Fragment>
  );
};

export default User;
