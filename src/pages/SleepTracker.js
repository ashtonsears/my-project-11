import '../styles/sleep_tracker.css';
import SymptomForm from '../components/Symptom_Form';
import React, { useState, useEffect } from "react";
import axios from "axios";

const SleepTracker = () => {
    const [symptoms, setSymptoms] = useState([]);

    const addSymptom = (symptom) => {
        setSymptoms(symptoms => [...symptoms, symptom]);
    };

    useEffect(() => {
        (async () => {
            const response = await axios.get("https://sleep-tracker-server.onrender.com/api/sleep_symptoms");
            setSymptoms(response.data);
        })();
    }, []);

    return (
        <main>
        <h2>What Types of Symptoms Are There?</h2>
        <p>Sleep-wake disorders can have a variety of symptoms, but there are a number of common ones. 
            Some of the common sleep-wake disorder symptoms are: excessive daytime sleepiness, trouble falling asleep, atypical breathing patterns, feeling an urge to move that is uncomfortable when trying to sleep, moving too much while asleep, or other unusual activities like sleepwalking, sleep-eating, or sleep paralysis.
            These symptoms can impair daily functioning and can worsen both mental and physical health. 
        </p>
        <p>If you notice pattern of sleep-wake disorder symptoms, schedule a visit with your primary care provider.
            They will be able to refer you to a sleep medicine physician, who can order several diagnostic tests like a polysomnography, an electroencephalogram, or a multiple sleep latency test.
            These tests will help determine the cause of your symptoms and the best course of treatment.
        </p>
        <h2 id="symptom_title">Add a Sleep Symptom...</h2>
        <SymptomForm addSymptom={addSymptom}/>
    </main>
    );
  };
  
  export default SleepTracker;