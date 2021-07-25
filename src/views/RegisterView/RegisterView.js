import React, { Component } from 'react';
import { connect } from 'react-redux'
import authOperations from '../../redux/auth/auth-operations'
import './Register.scss'


class RegisterView extends Component {
    state = {
        name: '',
        email: '',
        password: ''

    }
    handleChange = e => {
        const { name, value } = e.currentTarget;
      this.setState ({[name]: value}) 
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.onRegister(this.state)
        
        this.setState({name: '', email: '', password: ''})
        
    }

    render() {
        const { name, email, password } = this.state
        return (<div><h1>Register Page</h1>
            <form className="Form" onSubmit={this.handleSubmit}>
                <label>Name
                 <input type="text"
                        name='name'
                        value={name}
                        className="Form-input"
                    onChange= {this.handleChange}>
                    </input>

                </label>
                <label>Email
                 <input type="email"
                        name='email'
                        value={email}
                        className="Form-input"
                     onChange= {this.handleChange}>
                    </input>

                </label>
                <label>Password
                 <input type="password"
                        name='password'
                        value={password}
                        className="Form-input"
                     onChange= {this.handleChange}>
                    </input>

                </label>
                <button type="submit" className="Button">
                    Register</button>
            </form>
        </div>)
    }
}
// const mapStateToProps = {
//     onRegister: authOperations.register,
    
// }
const mapStateToProps = dispatch => ({
    onRegister: (data)=> dispatch(authOperations.register(data))
})

export default connect(null, mapStateToProps )(RegisterView) 