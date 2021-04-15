import React, { Component } from 'react';
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';


class User extends Component {

    static protoTypes = {
        loading: PropTypes.bool.isRequired,
        user: PropTypes.object.isRequired,
    };
    
  

    render() {

        if(this.props.loading){
            return <Spinner />
        }
        else {
        return (
            <div style={userStyle}>
            {this.props.users.map(user => (
                <UserItem key={user.id} user={user} />
            ))}
            </div>
        )}
    }
}




const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default User
