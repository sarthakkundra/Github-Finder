import React from "react";
import { Link } from 'react-router-dom';

const UserItem = ({ user: { avatar_url, html_url, login } }) => {
  return (
    <div className='card text-center'>
      <div
        className="img-wrapper"
        style={imgStyle}
      >
        <img
          src={avatar_url}
          alt=''
          className='round-img'
          style={{ width: "120px", transition: "all 0.4s ease" }}
        />
      </div>
      <h3>{login}</h3>

      <div>
        <Link className='btn btn-dark btn-sm my-1' to={`/user/${login}`}>
          More
        </Link>
      </div>
    </div>
  );
};

const imgStyle = {
  height: "80px",
  width: "80px",
  borderRadius: "50%",
  overflow: "hidden",
  margin: "1rem auto",
  padding: "1rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "5px solid var(--light-color)"
};

export default UserItem;
