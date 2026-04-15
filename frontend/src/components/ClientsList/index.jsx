import { clients } from "./clients-list-bd";
import "./index.css";

function ClientsTable() {
  return (
    <div className="clients-table-container">
      <h2>Clients List</h2>
      <h3>Current customer management updated in real time.</h3>

      <table className="clients-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Document</th>
            <th>Account</th>
            <th>Manager</th>
            <th>Distributor</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {clients.map((client) => (              
            <tr key={client.id}>    
              <td>{client.name}</td>    
              <td>{client.document}</td>    
              <td>{client.account}</td> 
              <td>{client.manager}</td> 
              <td>{client.distributor}</td>
              <td>{client.email}</td>
              <td>
                <button className="edit-button">Edit</button>
                <button className="delete-button">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientsTable;