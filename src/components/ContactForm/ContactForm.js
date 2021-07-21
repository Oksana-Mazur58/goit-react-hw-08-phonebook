import React, { Component } from 'react';
import ContactFormStyle from './ContactForm.module.css'
import PropTypes from 'prop-types';
import {getLoading} from '../../redux/phonebook/contacts-selector'
import { connect } from 'react-redux'


import {contactsOperations} from "../../redux/phonebook";

class ContactForm extends Component {
    static = {
        onSubmit: PropTypes.func.isRequired
    }

    state = {
        name: '',
        number: '',
    };
    componentDidMount() {
        this.props.fetchContacts()
    }



    handleChangeName = e => {
        this.setState({ name: e.currentTarget.value })
    }
    handleChangeNumber = e => {
        this.setState({ number: e.currentTarget.value })
    }
    handleSubmit = e => {
        e.preventDefault();
        const { name, number } = this.state
        // if (name !== '' && number !== '') {
        this.props.onSubmit(name, number)
        this.reset()
        // }
        // alert ('Please add name and phone number')


    }

    reset() {
        this.setState({ name: '', number: '' });
    };

    render() {
        return (
            <div>
                {this.props.isLoadingContacts && <h1>Loading...</h1>}
            <form className={ContactFormStyle.Contacts__form} onSubmit={this.handleSubmit}>
                
                <p>Name</p>
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                    required
                    onChange={this.handleChangeName}

                />
                <p>Number</p>

                <input
                    type="tel"
                    name="number"
                    value={this.state.number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                    required
                    onChange={this.handleChangeNumber}
                />
                <button type="submit" className={ContactFormStyle.ContactForm__button}>Add contact</button>

                </form>
                </div>
        )
    }
}
const mapStateToProps = state => ({
    isLoadingContacts: getLoading(state),
})
const mapDispatchToProps = (dispatch) => ({
    onSubmit: (name, number) => dispatch(contactsOperations.addContacts(name, number)),
    fetchContacts: () => dispatch(contactsOperations.fetchContact())

})
export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)