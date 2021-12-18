import React, { Component } from 'react';
import './DuckFooter.css';

class DuckFooter extends Component {
    render() {
        const title= {
            width:'100%'
        }
        const style= {
            height:'50%',
            width:'50%'
        }
        return(
            <section className="fireduck">
                <h3 style={title}>Gotta flex them react skills</h3>
                <img src="img/strong.jpg" alt="Animalpic" style={style}></img>
            </section>
        );
    }
}

export default DuckFooter;