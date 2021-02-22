import React, { Fragment } from 'react';
import Search from '../users/Search';
import Users from '../users/Users';

const Home = ():JSX.Element => {
    return (
        <Fragment>
            <Search />
            <Users />
        </Fragment>
    )
}

export default Home
