import axios from "axios";
import authActions from "./auth-actions";
import { connect } from 'react-redux'

axios.defaults.baseURL = 'https://connections-api.herokuapp.com'

const token = {
    
}
const register = credentials =>async dispatch => {
    dispatch(authActions.registerRequest());
    try {
        const response = await axios.post('/users/signup', credentials)
        dispatch(authActions.registerSuccess(response.data))
    } catch (error) {
        dispatch(authActions.registerError(error))
    }
 };

const logIn = credentials => dispatch => { };

const logOut = dispatch => [];

export default ({
    register,
    logIn,

})