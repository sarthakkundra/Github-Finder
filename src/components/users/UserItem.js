import React from "react";
import { Link } from 'react-router-dom';

const UserItem = ({ user: { avatar_url, html_url, login } }) => {
  function getColor() {
      let colors = ['#EFF9DA', '#e9f4fd', '#eafbfb', '#F9EBDF', '#eae5f4', "#ffe4d2"];
      return (colors[Math.floor(Math.random() * colors.length)]);
  }

  return (
    <div className='card text-center' style={{backgroundColor: getColor()}}>
      <div
        className="img-wrapper"
        style={imgStyle}
      >
        <img
          src={avatar_url}
          alt=''
          className='round-img'
          style={{ width: "80px", transition: "all 0.4s ease" }}
        />
      </div>
      <h3>{login}</h3>

      <div>
        <Link className='btn btn-light btn-sm my-1 profile-btn' to={`/user/${login}`}>
          View More
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
  border: "5px solid #FFFFFF5B"
};

export default UserItem;
