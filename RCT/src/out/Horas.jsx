import React, { Component } from "react";
class Relógio extends Component{
    constructor(props){
        super(props)
        this.state = {
            hora: "00:00:00"
        }
    }
    componentDidMount(){
        setInterval(
            _=>{
                this.setState(
                    {hora: new Date().toLocaleTimeString()}
                )
            }, 1000
        )
    }
    render(){
        return(
            <div>
                <h2>Hora exata: </h2>
                <p>{this.state.hora}</p>
            </div>
        )
    }
}; 
export default Relógio;