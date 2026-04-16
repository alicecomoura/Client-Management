import React from 'react';
import { ClientProps } from '../../../utils/interfaces/Client.interface';

export const ClientEdit = ({ client }: ClientProps) => {
    console.log(client);
    return (
        <div>
            <h3>Edit Client</h3>
            <p>Editing client with ID: {client?.name}</p>
        </div>
    );
};