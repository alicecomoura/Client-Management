import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { Client } from "../../../../shared/interfaces/Client.interface";
import { useState, useEffect } from "react";

interface Props {
  open: boolean;
  client: Client | null;
  onClose: () => void;
  onSave: (client: Client) => void;
}

export function EditClientModal({ open, client, onClose, onSave }: Props) {
  const [form, setForm] = useState<Client | null>(null);

  useEffect(() => {
    setForm(client);
  }, [client]);

  if (!form) return null;

  const handleChange = (field: keyof Client, value: string) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  return (
    <Dialog open={open} onClose={onClose} fullWidth>
      <DialogTitle>Editar Cliente</DialogTitle>

      <DialogContent>
        <TextField
          fullWidth
          margin="dense"
          label="Nome"
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
        />

        <TextField
          fullWidth
          margin="dense"
          label="Email"
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button
          variant="contained"
          onClick={() => form && onSave(form)}
        >
          Salvar
        </Button>
      </DialogActions>
    </Dialog>
  );
}