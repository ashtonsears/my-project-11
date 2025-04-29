import "./Delete_Symptom.css";
import React, { useState } from "react";

const DeleteSymptom = (props) => {
    const [result, setResult] = useState("");

    const deleteSymptom = async (event) => {
        const response = await fetch(`https://sleep-tracker-server.onrender.com/api/sleep_symptoms/${props._id}`, {
            method:"DELETE"
        });

        if (response.status === 200) {
            setResult("Symptom Deleted Successfully");
            props.hideSymptom();
        } else {
            console.log("Error deleting symptom", response);
            setResult("Error deleting symptom");
        }
        props.closeDeleteDialog();
    };

    return (
        <div id="delete-dialog" className="w3-modal">
            <div className="w3-modal-content">
                <div className="w3-container">
                    <span
                        id="dialog-close"
                        className="w3-button w3-display-topright"
                        onClick={props.closeDeleteDialog}
                    >
                        &times;
                    </span>
                    <div id="delete-content">
                        <h2>Are you sure you want to delete this symptom?</h2>
                        <section>
                            <button className="delete-buttons" onClick = {deleteSymptom}>Yes</button>
                            <button className="delete-buttons" onClick={props.closeDeleteDialog}>No</button>
                        </section>
                        <span>{result}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DeleteSymptom;