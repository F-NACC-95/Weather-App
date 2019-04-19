import React from "react";

const Form = props => {
    return (
        <form onSubmit={props.getWeather} className="form__component">
            <input type="text" name="city" placeholder="Enter City..."/>
            <input type="text" name="country" placeholder="Enter Country..."/>
            <br />
            <button className="form__button">Get Weather</button>
        </form>
    );
};

export default Form;