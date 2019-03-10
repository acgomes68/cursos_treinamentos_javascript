import React, { Component } from 'react';

class MenuSuperior extends Component {
    render() {
        return (
            <nav className="navbar navbar-extend-lg navbar-dark bg-dark">
                <a href="/" className="navbar-brand">DevMedia</a>
                <button className="navbar-toggler" type="button" data-toglle="collapse" data-taret="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mr-auto"></ul>
                </div>
            </nav>
        );
    }
}

export default MenuSuperior;