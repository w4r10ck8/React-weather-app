import React from 'react';

const Form = (props) =>{
    return(
        <div className="row">
            <form onSubmit={props.getWeather}>
                <div className="col-40"><input type="text" name="city" placeholder="City"/></div>
                <div className="col-40"><input type="text" name="country" placeholder="Country"/></div>
                <div className="col-20"><button>Go</button></div>
            </form>
        </div>
        
    );  
}
/*
class Form extends React.Component{
    render(){
        return(
            <form onSubmit={this.props.getWeather}>
                <input type="text" name="city" placeholder="City"/>
                <input type="text" name="country" placeholder="Country"/>
                <button>Get Weather</button>
            </form>
        );   
    }
}*/


export default Form;