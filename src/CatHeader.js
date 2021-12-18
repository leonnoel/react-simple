import React, { Component } from 'react';
import './CatHeader.css';

class CatHeader extends Component {
    render() {
        const style= {
            height:'50%',
            width:'50%'
        }
        return(
            <section className="topcat">
                <h1>Animal blog</h1>
                <h3>Hello this is my cat Smokey</h3>
                <img src="img/smokey.jpg" alt="Animalpic" style={style}></img>
            </section>
        );
    }
}

export default CatHeader;