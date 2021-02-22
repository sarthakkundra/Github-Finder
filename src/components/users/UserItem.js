import React from "react";
import { Link } from 'react-router-dom';

const UserItem = ({ user: { avatar_url, html_url, login } }) => {
  return (
    <div className='card text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: "60px" }}
      />
      <h3>{login}</h3>

      <div>
        <Link className='btn btn-dark btn-sm my-1' to={`/user/${login}`}>
          More
        </Link>
      </div>
    </div>
  );
};

export default UserItem;
