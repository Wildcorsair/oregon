import React, { Component } from 'react';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = { isOpened: false };
    }

    toggleState() {
        this.setState({ isOpened: !this.state.isOpened });
    }

    render() {
        let dropDownText;
        if (this.state.isOpened) {
            dropDownText = <div>
                <ul className="drop-down-list">
                    <li className="drop-down-item">Bear</li>
                    <li className="drop-down-item">Panther</li>
                    <li className="drop-down-item">Monkey</li>
                </ul>
            </div>;
        }

        return (
            <div onClick={this.toggleState.bind(this)}>
                Its dropdown baby
                {dropDownText}
            </div>
        );
    }
}

export default Dropdown;
