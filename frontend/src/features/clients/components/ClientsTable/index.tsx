import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper
} from "@mui/material";

import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { Client } from "../../../../shared/interfaces/Client.interface";
import { useEffect, useState } from "react";
import { ClientTableRow } from "./ClientTableRow";
export function ClientsTable({ clients }: { clients: Client[] }) {
  const [localClients, setLocalClients] = useState<Client[]>(clients);

  const [selectedClient, setSelectedClient] = useState<Client | null>(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);

  useEffect(() => {
    setLocalClients(clients);
  }, [clients]);

  const handleEditClient = (client: Client) => {
    setSelectedClient(client);
    setIsEditOpen(true);
  };

  const handleSaveEditClient = (updatedClient: Client) => {
    setLocalClients((prev) =>
      prev.map((client) =>
        client.id === updatedClient.id ? updatedClient : client
      )
    );

    setIsEditOpen(false);
    setSelectedClient(null);
  };

  const handleDeleteClient = (client: Client) => {
    setSelectedClient(client);
    setIsDeleteOpen(true);
  };

  const handleConfirmDeleteClient = () => {
    if (!selectedClient) return;

    setLocalClients((prev) =>
      prev.filter((client) => client.id !== selectedClient.id)
    );

    setIsDeleteOpen(false);
    setSelectedClient(null);
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableBody>
          {localClients.map((client) => (
            <ClientTableRow
              key={client.id}
              client={client}
              onEdit={handleEditClient}
              onDelete={handleDeleteClient}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}