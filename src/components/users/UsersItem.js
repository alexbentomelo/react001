import React from 'react';
import {Link} from 'react-router-dom';


const UsersItem = ({ user:{login,avatar_url,html_url}}) => {
//    const UsersItem = ({ user:{name,avatar_url,email}}) => {
        return (  
            <div className= 'card text-center'>
                <img 
                src={ avatar_url}
                alt=''
                className='round-img'
                style={{ width: '60px' }}
                />
                <h3>{login}</h3>
                <div>
                    <Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">Ver profile</Link>
                </div>
            </div>
        )
    }


export default UsersItem
