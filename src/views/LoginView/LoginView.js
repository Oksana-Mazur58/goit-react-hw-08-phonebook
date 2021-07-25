import React, { Component } from 'react';
import './LoginView.scss'

class LoginView extends Component {
    state = {
        email: '',
        password: ''

    }
      handleChange = e => {
        e.preventDefault();
        const { name, value } = e.currentTarget;
      this.setState ({[name]: value}) 
    }
       handleSubmit = e => {
        e.preventDefault();
        this.setState({ email: '', password: ''})
        
    }
    render() {
        const { email, password } = this.state
        return (<div><h1>Login Page</h1>
            <form
                className="Form" onSubmit={this.handleSubmit}
            autoComplete ="off">

                <label className="Form-input">Email
                 <input type="email"
                        name='email'
                        value={email}>
                    </input>

                </label >
                <label className="Form-input">Password
                 <input type="password"
                        name='password'
                        value={password}>
                    </input>

                </label>
                <button type="submit" className="Button">
                    Log In</button>
            </form>
        </div>)
    }
}

export default LoginView