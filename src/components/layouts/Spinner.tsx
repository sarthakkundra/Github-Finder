import React, {Fragment} from 'react';
import spinner from '../../images/loading.gif';

 const Spinner = () => {
    return (
        <div>
            <Fragment>
                <img src= {spinner} alt='Loading....' style= {{width: '200px', display: 'block', margin: 'auto'}}></img>
            </Fragment>
        </div>
    )
}

export default Spinner