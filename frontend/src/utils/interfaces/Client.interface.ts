export interface Client {
    id: number;
    name: string;
    document: string;
    account: string;
    manager: string;
    distributor: string;
    email: string;
}

export interface ActionState {
  isEditing: boolean;
  isDeleting: boolean;
  client: Client | null;
};

