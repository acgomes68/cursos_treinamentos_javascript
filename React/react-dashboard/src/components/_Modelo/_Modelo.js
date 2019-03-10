import React, { Component } from 'react';

class _Modelo extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        fetch('endpoint')
        .then(resultado => resultado.json().then(dados => this.setState(dados)));
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}

export default _Modelo;