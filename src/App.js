import React from 'react';
import './App.css';
import Weather from './app_component/weather.component';
import Form from './app_component/form.component';
import Titles from './app_component/titles.component';

const API_KEY = "b6a450511519b44fad939cda234b8614";
//b1b15e88fa797225412429c1c50c122a1

class App extends React.Component{
  state ={
    temprature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    descripton: undefined,
    img: undefined,
    error: undefined

  }
  getWeather = async (e)=>{
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api_call.json();
    const msg = data.cod;
  
    if(city && country && msg !== '404'){
      console.log(data);
    
    this.setState({
      temprature: (data.main.temp-273.15).toFixed(2),
      city: data.name,
      country: data.sys.country,
      humidity: data.main.humidity,
      descripton: data.weather[0].description,
      img: "http://openweathermap.org/img/wn/"+data.weather[0].icon+"@2x.png",
      error: ""
    });
    }else{
      this.setState({
        temprature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        descripton: undefined,
        img: undefined,
        error: "Please enter the valid value!"
      });
    }
    
    //console.log(this.state.descripton);
  }
  render(){
    return (
      <div className="App">
       <Titles/>
       <Form getWeather={this.getWeather}/>
       <Weather temprature={
         this.state.temprature}
         city = {this.state.city}
         country = {this.state.country}
         humidity = {this.state.humidity}
         descripton = {this.state.descripton}
         img = {this.state.img}
         error = {this.state.error}
        />
      </div>
    );
  }
}


export default App;
