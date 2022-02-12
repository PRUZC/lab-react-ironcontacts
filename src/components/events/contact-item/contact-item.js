function ContactItem({ id, pictureUrl, name, popularity }) {

    return (
        <tr>
            <th scope="row">1</th>
            <td>{name}</td>
            <td>{pictureUrl}</td>
            <td>{popularity}</td>
            <td>{id}</td>
        </tr>

    );
}

export default ContactItem;