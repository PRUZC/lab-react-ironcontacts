

function ContactItem({ id, pictureUrl, name, popularity, onDeleteContact, onClick }) {

    return (
        <tr>

            <th scope="row"></th>
            <td rowspan="1"><img src={pictureUrl} width={70} alt=""></img></td>
            <td>{name}</td>
            <td>{popularity}</td>
            <button className="btn-outline-danger btn-sm" role="button" onClick={() => onDeleteContact(id)}>X</button>
        </tr>

    );
}

ContactItem.defaultProps = {
    onDeleteContact: () => { }
}

export default ContactItem;