import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Menu extends Component {
    render() {
        return (
            <div>
                <ul id="main-menu">
                    {
                        this.props.menu.map((element) => (
                            <li key={element.id}><a href={element.url}>{element.caption}</a></li>
                        ))
                    }
                </ul>
                <div className="clearfix"></div>
            </div>
        );
    }
}

Menu.propTypes = {
    menu: PropTypes.array.isRequired,

    // Examples of different variable type validation
    isLoading: PropTypes.bool,
    submit: PropTypes.func,
    title: PropTypes.string.isRequired,
    types: PropTypes.oneOf(['one', 'two']),
    user: PropTypes.shape({
        name: PropTypes.string,
        age: PropTypes.number
    }),
    users: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            age: PropTypes.number
        })
    )
};

export default Menu;
