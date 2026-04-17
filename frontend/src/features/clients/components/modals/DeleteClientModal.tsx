import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material";
import { Client } from "../../../../shared/interfaces/Client.interface";

interface Props {
  open: boolean;
  client: Client | null;
  onClose: () => void;
  onConfirm: () => void;
}

export function DeleteClientModal({
  open,
  client,
  onClose,
  onConfirm,
}: Props) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirmar exclusão</DialogTitle>

      <DialogContent>
        Tem certeza que deseja excluir{" "}
        <strong>{client?.name}</strong>?
      </DialogContent>

      <DialogActions>
        <Button onClick={onClose}>Cancelar</Button>
        <Button color="error" variant="contained" onClick={onConfirm}>
          Deletar
        </Button>
      </DialogActions>
    </Dialog>
  );
}