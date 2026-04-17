import { useState } from "react";
import "./index.css";
import { ClientProps } from "../../../shared/interfaces/Client.interface";

export const ClientDelete = ({ client }: ClientProps) => {
    const [isCancel, setIsCancel] = useState(false);

    const handleClickDelete = ({client}: ClientProps) => {
        console.log(`Client ${client?.name} deleted`);
        // Implement the logic to delete the client
    }

    const handleClickCancel = ({client}: ClientProps) => {
        console.log(`Client ${client?.name} deletion cancelled`);
        // Implement the logic to cancel the deletion
    }

    return (
        <div className="overlay-container">
            <div className="delete-container">
                <div className="delete-actions">
                    <p>Are you sure you want to delete this client <strong>{client?.name}</strong> (document: {client?.document})?</p>
                    <div className="buttons-container">
                        <button onClick={() => handleClickDelete({client})}>Yes, delete</button>
                        <button onClick={() => handleClickCancel({client})}>No, cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
};