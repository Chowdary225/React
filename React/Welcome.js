
import { render } from "@testing-library/react";
import React from "react";
class Welcome extends React.Component{
    constructor(){
        super()
        this.state={
            name:"",
        }
    }

    render(){
    return(
        <div>
            <label>Enter your name</label>
            <input type="text" onChange={event => {this.setState({
                name: event.target.value,
            })
        }}
        ></input>
        <h1>Hi {this.state.name} welcome to the university!!</h1>
        </div>
    )
}
}
export default Welcome;