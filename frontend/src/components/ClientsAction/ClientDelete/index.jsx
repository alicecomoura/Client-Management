export const ClientDelete = ({ getClientId }) => {
    return (
        <div>
            <h3>Delete Client</h3>
            <p>Delete client with ID: {getClientId}</p>
        </div>
    );
};