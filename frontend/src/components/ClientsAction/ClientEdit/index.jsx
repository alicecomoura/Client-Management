export const ClientEdit = ({ client }) => {
    console.log(client);
    return (
        <div>
            <h3>Edit Client</h3>
            <p>Editing client with ID: {client?.name}</p>
        </div>
    );
};