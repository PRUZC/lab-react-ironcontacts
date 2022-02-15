import { Component } from 'react';
import ContactItem from '../contact-item/contact-item';
import contacts from '../../../contacts.json';
import faker from 'faker';


class ContactsList extends Component {

    state = {
        contacts: []
    }



    componentDidMount() {
        this.setState({ contacts });
    }

    handleDeleteContact(id) {
        this.setState((state, props) =>
            ({ contacts: state.contacts.filter(contact => contact.id !== id) })
        )
    }

    handleCreateRandomContact() {
        this.setState((state, props) => {
            const id = faker.random.uuid()
            const contact = {
                id,
                name: faker.name.findName(),
                pictureUrl: `https://loremflickr.com/600/800?lock=${id}`,


            }
            return {
                contacts: [...state.contacts, contact]
            }
        })
    }


    render() {

        const { contacts } = this.state
        return (

            <table >
                <thead className="table w-70 d-block justify-content-between table-bordered border-primary">
                    <div className="d-grid d-md-flex justify-content-md-end mb-3 w-70 mt-3">
                        <button className='btn btn-outline-primary btn-sm' onClick={() => this.handleCreateRandomContact()}>Add Random Contact</button>
                    </div>
                    <tr className='justify-content-space-between pd-2'>
                        <th scope="col">Picture</th>
                        <th scope="col pr-40">Name</th>
                        <th scope="col">Popularity</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody className='justify-content-space-between pd-7'>

                    <div className="row g-2 row-cols-1 row-cols-md-1 justify-content-end">
                        {contacts.map((contact) => (
                            <div key={contact.id} className="col">
                                <ContactItem {...contact} onDeleteContact={(id) => this.handleDeleteContact(id)} />
                            </div>
                            //{contacts.map(contact => (
                            // <tr key={contact.id}>
                            //<ContactItem {...contact} onDeleteContact={(id) => this.handleDeleteContact(id)}/>
                            // </tr>//

                        ))}
                    </div>
                </tbody>
            </table>

        )
    }



}




export default ContactsList;