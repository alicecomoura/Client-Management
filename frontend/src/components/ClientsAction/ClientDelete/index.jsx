import { useState } from "react";
import "./index.css";

export const ClientDelete = ({ client }) => {
    const [isCancel, setIsCancel] = useState(false);

    const handleClickDelete = () => {
        console.log(`Client ${client.name} deleted`);
        // Implement the logic to delete the client
    }

    const handleClickCancel = () => {
        console.log(`Client ${client.name} deletion cancelled`);
        setIsCancel(false);
        // Implement the logic to cancel the deletion
    }

    {isCancel && (
        <div className="client-delete-confirmation">
            <p>Are you sure you want to delete {client.name}?</p>
            <button onClick={handleClickDelete}>Yes, delete</button>
            <button onClick={handleClickCancel}>No, cancel</button>
        </div>
    )}
};