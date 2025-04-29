import './Symptom.css';
import React, { useState } from 'react';
import EditSymptom from './Edit_Symptom';
import DeleteSymptom from './Delete_Symptom';

const Symptom = (props) => {
  const [symptom, setSymptom] = useState(props);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [showSymptom, setShowSymptom] = useState(true);

  const imageSrc = `https://sleep-tracker-server.onrender.com/api/sleep_symptoms/${symptom.image}`;

  const openEditDialog = () => {
    setShowEditDialog(true);
  };

  const closeEditDialog = () => {
    setShowEditDialog(false);
  };

  const openDeleteDialog = () => {
    setShowDeleteDialog(true);
  };

  const closeDeleteDialog = () => {
    setShowDeleteDialog(false);
  };

  const hideSymptom = () => {
    setShowSymptom(false);
  };

  const editSymptom = (symptom) => {
    setSymptom(symptom);
  };

  return (
    <>
    {showSymptom?(
        <div>
          {showDeleteDialog?(
            <DeleteSymptom
              symptom={symptom}
              _id={symptom._id}
              closeDeleteDialog={closeDeleteDialog}
              hideSymptom={hideSymptom}
            />
            ) : ("")}

          {showEditDialog?(
            <EditSymptom
              _id={symptom._id}
              symptom={symptom.symptom}
              duration={symptom.duration}
              severity={symptom.severity}
              date={symptom.date}
              time={symptom.time}
              notes={symptom.notes}
              image={symptom.image}
              closeEditDialog={closeEditDialog}
              editSymptom={editSymptom}
            />
          ) : ("")}

          <div className="symptom">
            <div className="symptom-header">
              <h4 className="header-title">
                <strong>{symptom.date} {symptom.time}</strong>
                </h4>
                <div className="symptom-actions">
                  <a href="#" onClick={openEditDialog}>
                    &#9998; Edit
                  </a>
                    <a href="#" onClick={openDeleteDialog}>
                      &#x2715; Delete
                    </a>
                </div>
              </div>
              <div className="flex-container">
                <section className="symptom-col1of2, symptom-img">
                  <img src={imageSrc} alt={symptom.symptom} />
                </section>
                <section className="symptom-col1of2">
                        <h5><strong>Symptom: </strong>{symptom.symptom}</h5>
                        <h5><strong>Duration: </strong>{symptom.duration}</h5>
                        <h5><strong>Severity: </strong>{symptom.severity}</h5>
                        <h5><strong>Notes: </strong>{symptom.notes}</h5>
                </section>
              </div>
            </div>
      </div>
      ):("")}
    </>
  );
};

export default Symptom;