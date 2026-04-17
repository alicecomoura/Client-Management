import { TableRow, TableCell, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import { Client } from "../../../../shared/interfaces/Client.interface";

interface Props {
  client: Client;
  onEdit: (client: Client) => void;
  onDelete: (client: Client) => void;
}

export function ClientTableRow({ client, onEdit, onDelete }: Props) {
  return (
    <TableRow hover>
      <TableCell>{client.name}</TableCell>
      <TableCell>{client.document}</TableCell>
      <TableCell>{client.account}</TableCell>
      <TableCell>{client.manager}</TableCell>
      <TableCell>{client.distributor}</TableCell>
      <TableCell>{client.email}</TableCell>

      <TableCell>
        <IconButton onClick={() => onEdit(client)}>
          <EditIcon />
        </IconButton>

        <IconButton onClick={() => onDelete(client)}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}