import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import actions from "./phonebook-actions";
// import types from "./contacts-types";
// import contacts from "../../contacts-list";
// import contacts from "../../../db.json";
import {
  addContactSuccess,
  addContactRequest,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,

  changeFilter
} from './phonebook-actions'



const items = createReducer(([]), {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => {
    if (state.map(({ name }) => name).includes(payload.name)) {
      return alert(`${payload.name} is already in contacts`);
    }
    return [payload, ...state];
  },

  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const loading = createReducer(false, {
  // [fetchContacts.pending]: () => true,
  // [fetchContacts.fulfilled]: () => false,
  // [fetchContacts.rejected]: () => false,
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});


const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
  loading
});


// const contacts = (state =  contactsDefault, { type, payload }) => {
//     switch (type) {
//         case types.ADD:
//             return [...state, payload];

//         case types.DELETE:
//             return state.filter(contact=>contact.id !==payload)
//         default:
//             return state;
//     }

// }
// const filter = (state = '', { type, payload }) => {
//     switch (type) {
//         case types.CHANGE_FILTER:
//             return  payload;

//         case types.DELETE:
//             return state.filter(contact=>contact.id !==payload)
//         default:
//             return state;
//     }

// }

