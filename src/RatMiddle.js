import React, { Component } from 'react';
import './RatMiddle.css';

class RatMiddle extends Component {
    render() {
        const title= {
            width:'100%'
        }
        const style= {
            height:'50%',
            width:'50%'
        }
        return(
            <section className="hungryrat">
                <h3 style={title}>Cute rat eating.</h3>
                <img src="img/rateat.jpg" alt="Animalpic" style={style}></img>
            </section>
        );
    }
}

export default RatMiddle;