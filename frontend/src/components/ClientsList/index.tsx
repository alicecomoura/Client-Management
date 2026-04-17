import { useState } from "react";
import { clients } from "./constants";
import { ClientEdit } from "../ClientsAction/ClientEdit";
import { ClientDelete } from "../ClientsAction/ClientDelete";
import "./index.css";
import { Client } from "../../shared/interfaces/Client.interface";
import { ActionState } from "../../shared/interfaces/Client.interface";
import { ClientsTable } from "../../features/clients/components/ClientsTable";

export const ClientsList = () => {
const [actionState, setActionState] = useState<ActionState>({
  isEditing: false,
  isDeleting: false,
  client: null,
});
const handleEditClientClick = (client: Client) => {
  setActionState({
    isEditing: true,
    isDeleting: false,
    client,
  });
};

  const handleDeleteClientClick = (client: Client) => {
    // Implement the logic to delete the client
    setActionState({
      isEditing: false,
      isDeleting: true,
      client
    });

    console.log(`Delete client ${client.name} ${actionState.isDeleting} clicked`);
  };
  return (
    <>
      <div className="clients-table-container">
        <h2>Clients List</h2>
        <h3>Current customer management updated in real time.</h3>
        <ClientsTable clients={clients} />
      </div>
      {actionState.isEditing && <ClientEdit client={actionState?.client} />}
      {actionState.isDeleting && <ClientDelete client={actionState?.client} />}
    </>
  );
}