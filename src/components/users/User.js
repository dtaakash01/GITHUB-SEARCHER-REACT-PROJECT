import React, { Component } from 'react';
import UserItem from './UserItem';

class User extends Component {
    constructor() {
        super();
        this.state = {
        users: [{
            id: '1',
            login: 'defunkt',
            avatar: 'https://avatars.githubusercontent.com/u/2?v=4',
            html_url: 'https://api.github.com/users/defunkt'
        },
        {
            id: '2',
            login: 'someone',
            avatar: 'https://avatars.githubusercontent.com/u/3?v=4',
            html_url: 'https://github.com/pjhyett'
        },
        {
            id: '3',
            login: 'defunkt',
            avatar: 'https://avatars.githubusercontent.com/u/4?v=4',
            html_url: 'https://github.com/wycats'
        }
    ]
}
}
    render() {

 
       
        return (
            <div style={userStyle}>
            {this.state.users.map(user => (
                <UserItem key={user.id} user={user} />
            ))}
            </div>
        )
    }
}


const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default User
