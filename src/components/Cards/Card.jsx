import React from "react";

function Card(props) {
    return (
        <>
            <h1 className="h1">{props.nama}</h1>
            <img className="img" src={props.avatar} alt="avatar" />
            <p className="p">{props.alamat}</p>
            <hr></hr>
        </>
    );
}

export default Card;
