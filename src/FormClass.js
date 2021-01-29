import React, { Component } from "react";

class FormClass extends Component {
    state = {
        name: "",
        password: "",
        email: "",
        mobile: "",
        dropdown:""
    };
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        // this.setState(preValue=>{
        //     console.log(preValue)
        //     return{
        //         ...preValue,
        //         [event.target.name]:event.target.value
        //     }
        // });
    };
    formSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.name);
        console.log(this.state.password);
        console.log(this.state.email);
        console.log(this.state.mobile);
        console.log(this.state.dropdown);
    }

    render() {
        return (
            <>
                <form onSubmit={this.formSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" onChange={this.handleChange} value={this.state.name} /><br /><br />
                    <label>Password</label>
                    <input type="text" name="password" onChange={this.handleChange} value={this.state.password} /><br /><br />
                    <label>Email</label>
                    <input type="text" name="email" onChange={this.handleChange} value={this.state.email} /><br /><br />
                    <label>Phone</label>
                    <input type="text" name="mobile" onChange={this.handleChange} value={this.state.mobile} /><br /><br />
                    <select value={this.state.dropdown} onChange={this.handleChange} name="dropdown">
                        <option value="0">Select</option>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>

            </>
        )
    }
}
export default FormClass;