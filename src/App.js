//import logo from './logo.svg';
import './App.css';
import React from 'react';
import ContactsForm from './Component/ContactsForm';
import ContactsList from './Component/ContactsList'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      contacts : [] //setting up an empty array here so that the contacts can be updated here
    }
  }

  render() {
    return(
      <div className="row" style ={{marginLeft : 40 , marginTop : 20}}>
        <div className='col-md-6'>
          <ContactsForm />
        </div>

        <div className='col-md-6'>
          <ContactsList contacts = {this.state.contacts}/>
        </div>

      </div>
    )
  }
}

export default App;
