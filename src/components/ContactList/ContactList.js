import React from "react";
import { connect } from "react-redux";
import {contactsOperations} from "../../redux/phonebook";
import {getFilteredContacts} from '../../redux/phonebook/contacts-selector'
import "./ContactList.css";

const ContactsList = ({ filteredContacts, onDeleteContact }) => (


  <ul className="contact-list">
    {filteredContacts.map(({ name, number, id }) => (
      <li key={id} className="ContactList__item">
        <span className="contact-name">{name} : </span>
        <span className="ContactList__number"> {number}</span>
        <button
          className="ContactList__button"
          onClick={() => onDeleteContact(id)}>
          Удалить
        </button>
      </li>
    ))}
  </ul>
);

const mapStateToProps = (state) => ({
  filteredContacts: getFilteredContacts(state),
  
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(contactsOperations.deleteContact(id)),

});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);