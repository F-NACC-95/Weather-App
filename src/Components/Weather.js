import React from "react";

const Weather = props => {
    return (
        <div className="weather__component">
            <div className="weather__location">{props.city && props.country && <h1>{props.city}, {props.country}</h1>}</div>
            <div className="weather__temperature">{props.temperature !== undefined && <h1>{props.temperature} °C</h1>}</div>
            <div className="weather__description">{props.description && <h1>{props.description}</h1>}</div>
            <div className="weather__error">{props.error && <h1>{props.error}</h1>}</div>
        </div>
    );
};

export default Weather;