import { Component } from 'react';
import ContactItem from '../contact-item/contact-item';
import contacts from '../../../contacts.json';


class ContactsList extends Component {

    state = {
        contacts: []
    }

    componentDidMount() {
        this.setState({ contacts });
    }

    render() {

        const { contacts } = this.state;
        return (

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">name</th>
                        <th scope="col">pictureUrl</th>
                        <th scope="col">popularity</th>
                        <th scope="col">id</th>
                    </tr>
                </thead>
                <tbody>
                   {contacts.map(contact => (
                       <p>{contact.name}</p>
                   )) } 
                </tbody>
            </table>

        )
    }



}

export default ContactsList;