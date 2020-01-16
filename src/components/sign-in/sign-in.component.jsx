import React, {Component} from 'react';

class SignIn extends Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      email: '',
      password: ''
    })
  }
  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    })
  }
  render(){
    return(
      <div className="signin">
        <h2>I already have an account</h2>
        <span>Sign In with your Email and Password</span>

        <form onSubmit={this.handleSubmit}>
          <input 
            type="email" 
            name="email" 
            value={this.state.email} 
            onChange={this.handleChange}
            required 
          />
          <label>Email:</label>
          <input 
            type="password" 
            name="password" 
            value={this.state.password} 
            onChange={this.handleChange}
            required 
          />
          <label>Password:</label>

          <input type="submit" value="SUBMIT FORM"/>
        </form>
      </div>
    )
  }
};

export default SignIn;