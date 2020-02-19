import React from 'react';

const Weather = (props) =>(
            <div className="weather-update">
                {props.city && props.country && <p>{props.city}, {props.country}</p>}
                {props.img && <img src={props.img} alt=""></img>}
                {props.descripton && <p>{props.descripton}</p>}
                {props.temprature && <h3>{props.temprature}°C</h3>}
                {props.humidity && <p>Humidity: {props.humidity}%</p>}
                {props.error && <p className="error">Error: {props.error}</p>}
            </div>
    );
/*class Weather extends React.Component{
    render(){(
        return(
            <div>
                {this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p>}
               {this.props.temprature && <p>Temperatyre: {this.props.temprature}</p>}
               {this.props.humidity && <p>Humidity: {this.props.humidity}</p>}
               {this.props.descripton && <p>descripton: {this.props.descripton}</p>}
               {this.props.error && <p>Error: {this.props.error}</p>}
            </div>
        );   
    }
}*/


export default Weather;