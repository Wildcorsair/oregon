import React, { Component } from 'react';
import Menu from './Menu';
import Dropdown from './Dropdown';

let items = [
    {
        "id": 1,
        "url": "/",
        "caption": "Home"
    }, {
        "id": 2,
        "url": "/posts",
        "caption": "Posts"
    }, {
        "id": 3,
        "url": "/articles",
        "caption": "Articles"
    }
];

class Welcome extends Component {
    render() {
        return (
            <div>
                <Menu menu={items} title="React Sandbox"/>
                <Dropdown />
            </div>
        );
    }
}

export default Welcome;
