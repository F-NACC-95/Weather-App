import React from "react";
import Form from "./Components/Form";
import Weather from "./Components/Weather";
import styles from "./styles.css";

class App extends React.Component {
      state = {
        country: undefined,
        city: undefined,
        temperature: undefined,
        description: undefined,
        error: undefined,
      };
  
  getWeather = async (e) => {
      e.preventDefault();
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      const api_key = '161d84ef383d1193e9edc6ea5f4b9d39'
      const api_call = await fetch(
          `https://api.openweathermap.org/data/2.5/find?q=${city},${country}&units=metric&type=accurate&mode=json&APPID=${api_key}`
      );
      const weatherData = await api_call.json();

      if (city && country && weatherData.list[0]) {
      this.setState({
        temperature: Math.round(weatherData.list[0].main.temp),
        city: weatherData.list[0].name,
        country: weatherData.list[0].sys.country,
        description: weatherData.list[0].weather[0].main,
        error: undefined,
      })

      document.body.style.backgroundSize = "cover";

      switch (this.state.description) {
        
        case "Clear": 
          document.body.style.backgroundImage = "url(https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"
          break;

        case "Clouds": 
          document.body.style.backgroundImage = "url(https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"
          break;

        case "Rain": 
          document.body.style.backgroundImage = "url(https://images.pexels.com/photos/166360/pexels-photo-166360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"
          break;

        case "Snow": 
          document.body.style.backgroundImage = "url(https://images.pexels.com/photos/773594/pexels-photo-773594.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"
          break;

        case "Drizzle": 
          document.body.style.backgroundImage = "url(https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"
          break;

        case "Thunderstorm": 
          document.body.style.backgroundImage = "url(https://images.pexels.com/photos/1162251/pexels-photo-1162251.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"
          break;

        default: 
          document.body.style.backgroundImage = "url(https://images.pexels.com/photos/258112/pexels-photo-258112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)"
          break;
      }
  
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        description: undefined,
        error: 'Error',
      })
    }
  };

  render() {
    return (
      <div className="app__container">
          <p className="app__p">Live weather data provided by OpenWeatherMap. Just enter a city and a country...</p>
          <Form
            getWeather={this.getWeather}
          />
          <Weather
            country = {this.state.country}
            city={this.state.city}
            temperature={this.state.temperature}
            description={this.state.description}
          />
      </div>
    );
  }
}

export default App;