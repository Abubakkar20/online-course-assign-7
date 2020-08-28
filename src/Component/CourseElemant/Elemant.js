import React from 'react';
import './Elemant.css'
const Elemant = (props) => {
    console.log(props.cours)
    const { title, description, image, time, price } = props.cours
    return (
        <div className="elemant-container">
            <div className={"elemant-image"}>
                <img src={image} alt="" />
            </div>
            <div>
                <h4>{title}</h4>
                <p>{description}</p>
                <p> Time:{time}</p>
                <p><small>Fee: {price}</small></p>
                <button className= "elemant-btn" onClick = {() => props.handlClick(props.cours)}>Entry Now </button>
            </div>
        </div>
    );
};

export default Elemant;