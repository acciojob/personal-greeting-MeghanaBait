
const { Component } = require("react/cjs/react.production.min");

class Greeting extends Component{
    constructor(props){
        super(props);
        this.state = {value:""};
    }

    onChangeText = (e) =>{
       const newValue = e.target.value;
       this.setState({value : newValue});
    }

    render(){

        return(
            <div>
                <label htmlFor="input">Enter your name:</label>
                <input type="text" id="input" value = {this.state.value} onChange={this.onChangeText}  />
                {this.state.value ? <p>Hello  {this.state.value}!</p> : null}
            </div>
        )
    }
}

export default Greeting;