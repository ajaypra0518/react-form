import React, { Component } from "react";

export class ClassComponent extends Component {
  // constructor(props){
  //   super(props)
  //   this.state={
  //     value:""
  //   }
  // }


  state = {
    value: ""
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({ value: e.target.value })
  };
  handleLogin = (event) => {
    event.preventDefault();
    document.getElementById("myid").innerHTML=this.state.value;
  }

  render() {
    return (
      <>
     
        <form >
          <input type="text" name="name1" onChange={this.handleChange} value={this.state.value} />
          <button onClick={this.handleLogin}>Submit </button>
        </form>
        <h3 id="myid"></h3>
      </>
    )
  }


}

// export default ClassComponent;