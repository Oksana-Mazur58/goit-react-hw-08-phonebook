import React, { Component } from "react";
import ContactList from '../../components/ContactList';
import ContactForm from '../../components/ContactForm';
import Filter from '../../components/Filter'


class ContactView extends Component {
    render() {

        return (

            <div>
                <h1>PhoneBook</h1>
                <ContactForm />
                <h1>Contacts </h1>
                <Filter />
                <ContactList />
            </div>


        )
    }
}
export default ContactView