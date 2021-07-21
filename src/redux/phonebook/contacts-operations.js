
import axios from 'axios'
import { isError } from 'lodash';
import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,

} from './phonebook-actions'
import { number } from 'prop-types';

axios.defaults.baseURL = 'http://localhost:4040';
const fetchContact = () => dispatch => {
  dispatch(fetchContactRequest())
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch(error => dispatch(fetchContactError(error)))
}

const addContacts = (name, number) => dispatch => {
  const contact = {
    name,
    number
  };
  dispatch(addContactRequest())
  axios
    .post('/contacts', contact)
    .then(({ data }) =>
      dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)))

}
const deleteContact = contactId => dispatch => {
  dispatch(deleteContactRequest())
  axios
    .delete(`/contacts/${contactId}`)
    .then(() => dispatch(deleteContactSuccess(contactId)))
    .catch(error => dispatch(deleteContactError(error)))
}
export default {
  addContacts,
  deleteContact,
  fetchContact
}