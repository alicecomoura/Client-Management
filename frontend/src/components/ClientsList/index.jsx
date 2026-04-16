import { useState } from "react";
import { clients } from "./constants";
import { ClientEdit } from "../ClientsAction/ClientEdit";
import { ClientDelete } from "../ClientsAction/ClientDelete";
import "./index.css";

export const ClientsList = () => {
  const [actionState, setActionState] = useState({
    isEditing: false,
    isDeleting: false,
    client: {
      id: null,
      name: "",
      document: "",
      account: "",
      manager: "",
      distributor: "",
    },
  });
  const handleEditClientClick = (client) => {
    // Implement the logic to edit the client
    setActionState({
      isEditing: true,
      isDeleting: false,
      client: client,
    });

    console.log(`Edit client ${client.name} ${actionState.isEditing} clicked`);
  };

  const handleDeleteClientClick = (client) => {
    // Implement the logic to delete the client
    setActionState({
      isEditing: false,
      isDeleting: true,
      client: client,
    });

    console.log(`Delete client ${client.name} ${actionState.isDeleting} clicked`);
  };
  return (
    <>
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
                  <button className="edit-button" onClick={() => handleEditClientClick(client)}>
                    Edit
                  </button>
                  <button className="delete-button" onClick={() => handleDeleteClientClick(client)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {actionState.isEditing && <ClientEdit client={actionState.client} />}
      {actionState.isDeleting && <ClientDelete client={actionState.client} />}
    </>
  );
}