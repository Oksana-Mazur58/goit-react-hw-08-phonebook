
import React, { Component } from "react";
import HomeView from './views/HomeView';
import ContactView from './views/ContactsView'
import RegisterView from './views/RegisterView'
import LoginView from './views/LoginView'
import NotFoundPage from './views/NotFoundPage'

import Container from './components/Container/Container'
import AppBar from './components/AppBap/AppBar'

import { Route } from "react-router";


const App = () => (
  <Container>
    <AppBar/>

    <Route exact path="/" component={HomeView} />
    <Route path="/register" component={RegisterView} />
    <Route path="/login" component={LoginView} />
    <Route path="/contacts" component={ContactView} />
    <Route p component={NotFoundPage} />

  </Container>
)



// class App extends Component {

//   render() {

//     return (

//       <div>
//         <h1>PhoneBook</h1>
//         <ContactForm />
//         <h1>Contacts </h1>
//         <Filter />
//         <ContactList />
//       </div>


//     )
//   }

// }

export default App;
