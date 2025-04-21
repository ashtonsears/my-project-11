import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Grid from '../components/Grid.js';
import '../styles/disorders.css';

const Disorders = () => {
    const [disorders, setDisorders] = useState([]);

    //useEffect "delays" a piece of code from running until that render is reflected on screen
    useEffect(() => {
        (async () => {
            const response = await axios.get(
                "https://sleep-tracker-server.onrender.com/api/disorders"
            );
            setDisorders(response.data);
        })();
    }, []);

    useEffect(() => {
        window.closeModal = () => {
          document.getElementById("modal").style.display = "none";
        };
    }, []);

    return (
        <main>
            <h2>Sleep-Wake Disorders</h2>
            <p>Sleep-wake disorders involve problems with the amount, quality, and timing of sleep, which can impair daily functioning.
                These disorders fall under six major types: insomnia, or the ability to fall and stay asleep; sleep apnea, which affects sleep quality and oxygen levels; circadian rhythm disorders, which regulate what time one falls asleep at; movement disorders, which make it impossible to stay still at night; parasomnias, which are uncontrollable sleep episodes; and hypersomnia, or sleeping too often.
                There are over 80 different sleep-wake disorders, but the most common are the ones listed below.
                Click on a disorder to find out more about it.</p>
            <div id="grid" className="grid">
            {disorders.map((disorder) => (
                <Grid
                key={disorder._id}
                disorder={disorder}
                onClick={() => {
                    const imageSrc = `https://sleep-tracker-server.onrender.com/${disorder.image}`;
                    const modal = document.getElementById("modal");
                    const modalContent = document.getElementById("modal_content");
                    modalContent.innerHTML = `
                    <span class="close" onclick="closeModal()">&times;</span>
                    <h2 class="modal_center">${disorder.name}</h2>
                    <div class="modal_img"><img src="${imageSrc}" alt="${disorder.name}"></div>
                    <p class="modal_center">${disorder.description}</p>
            <h3>Symptoms</h3>
            <ul>${disorder.symptoms.map((symptom) => `<li>${symptom}</li>`).join("")}</ul>
            <h3>Diagnostic Tests</h3>
            <ul>${disorder.diagnostic_tests.map((test) => `<li>${test}</li>`).join("")}</ul>
            <h3>Prevalence</h3>
            <p class="modal_center">${disorder.prevalence}</p>
            <h3>Treatments</h3>
            <ul>${disorder.treatment.map((treatment) => `<li>${treatment}</li>`).join("")}</ul>
        `;
        modal.style.display = "block";
    }}
/>
    ))}
            </div>
            <div id="modal" className="modal">
                <div className="modal_content" id="modal_content"></div>
            </div>
        </main>
    );
  };
  
  export default Disorders;