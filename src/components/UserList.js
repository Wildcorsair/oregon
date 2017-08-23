import React, { Component } from 'react';
import data from '../data.json';
import pic from './img/man01.svg';

class UserList extends Component {
    render() {
        return (
            <div>
                <ul>
                {
                    data.map(function(elem) {
                        return (
                            <li key={elem.id}>
                                <div>
                                    <img className="user-pic" src={pic} alt="avatar" />
                                    <span className="user-name">{elem.name}</span>
                                    <span className="user-email">{elem.email}</span>
                                </div>
                            </li>
                        );
                    })
                }
                </ul>
            </div>
        );
    }
}

export default UserList;
