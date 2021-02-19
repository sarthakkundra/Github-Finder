import React, {useContext, useState} from "react";
import UserItem from "./UserItem";
import Spinner from "../layouts/Spinner";
import GithubContext from '../../context/github/githubContext';
import InfinteScroll from 'react-infinite-scroll-component'

const Users = () => {
  const githubContext = useContext(GithubContext);
  const [page, setPage] = useState(2)
  const { loading, users, text, hasMore} = githubContext;
  const fetchNext = () => {
    setPage(prev => prev + 1)
    githubContext.searchUsers(text, page, users)
  }

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <InfinteScroll 
          dataLength={users.length}
          next={fetchNext}
          hasMore={hasMore}
          loader={users.length === 0 ? '':(<Spinner />)}
          endMessage={
            <p>
              <b>Nothing to show.</b>
            </p>
          }
        >
        <div style={userStyle}>
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
        </InfinteScroll>
    );
  }
};


const userStyle = {
  display: "grid",
  padding: "2rem 0rem",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem",
};
export default Users;
