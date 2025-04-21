import "./Symptom_Form.css";
import React, { useState } from "react";

const SymptomForm = (props) => {
    const [inputs, setInputs] = useState({});
    const [result, setResult] = useState("");

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    }

    const formatTimeto12Hour = (time) => {
      let [hours, minutes] = time.split(":");
      let period = "AM";

      if (parseInt(hours) >= 12) {
        period = "PM";
        if (parseInt(hours) > 12) {
          hours -= 12;
        }
      } else if (hours === "00") {
        hours = "12";
      }
      minutes = minutes.padStart(2, "0"); // Ensure minutes are always two digits
      return `${hours}:${minutes} ${period}`;
    }

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formattedTime = formatTimeto12Hour(inputs.time);

        const symptomData = {
            symptom: inputs.symptom,
            duration: Number(inputs.duration),
            severity: Number(inputs.severity),
            date: inputs.date,
            time: formattedTime,
            notes: inputs.notes || "",
        }

        console.log("Symptom Data:", symptomData);

        const response = await fetch("https://sleep-tracker-server.onrender.com/api/sleep_symptoms", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
            body: JSON.stringify(symptomData)
        });
    
        if (response.status === 200) {
          setResult("Symptom Successfully Added");
          event.target.reset();
          props.addSymptom(await response.json());
        } else {
          console.log("Error adding symptom", response);
          setResult(response.message);
        }
    };

    return (
        <div id="symptom_form_container">
        <form id="symptom_form" onSubmit={onSubmit}>
          <label htmlFor="symptom">Symptom:</label>
          <select name="symptom" id="symptom" value={inputs.symptom || ""} onChange={handleChange} required>
                <option value="" disabled hidden>Select a symptom</option>
                <option value="snoring">Snoring</option>
                <option value="dry mouth after waking">Dry Mouth After Waking</option>
                <option value="headaches">Headaches</option>
                <option value="difficulty falling asleep">Difficulty Falling Asleep</option>
                <option value="difficulty concentrating">Difficulty Concentrating</option>
                <option value="irritability">Irritability</option>
                <option value="interrupted sleep">Interrupted Sleep</option>
                <option value="waking up too early">Waking Up Too Early</option>
                <option value="excessive daytime sleepiness">Excessive Daytime Sleepiness</option>
                <option value="cataplexy">Cataplexy</option>
                <option value="sleep paralysis">Sleep Paralysis</option>
                <option value="sleep-related hallucinations">Sleep-Related Hallucinations</option>
                <option value="sleep attack">Sleep Attack</option>
                <option value="uncomfortable sensation in legs">Uncomfortable Sensation in Legs</option>
                <option value="difficulty waking up">Difficulty Waking Up</option>
                <option value="excessive movement when sleeping">Excessive Movement When Sleeping</option>
                <option value="abnormal noises when sleeping">Abnormal Noises When Sleeping</option>
                <option value="remembering dreams vividly">Remembering Dreams Vividly</option>
                <option value="sleepwalking">Sleepwalking</option>
                <option value="sleep terror">Sleep Terror</option>
                <option value="sleep-related eating">Sleep-Related Eating</option>
            </select>

          <label htmlFor="duration">Duration in minutes:</label>
          <input type="number" id="duration" name="duration" value={inputs.duration || ""} onChange={handleChange} placeholder="Enter how long your symptom lasted" required></input>

          <label htmlFor="severity">Severity on a Scale from 1 to 10:</label>
          <input type="number" id="severity" name="severity" min="1" max="10" value={inputs.severity || ""} onChange={handleChange} placeholder="Enter how severe your symptom was on a scale from 1 to 10" required></input>

          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" value={inputs.date || ""} onChange={handleChange} required/>

          <label htmlFor="time">Time of Day:</label>
          <input type="time" id="time" name="time" value={inputs.time || ""} onChange={handleChange} required/>

          <label htmlFor="notes">Notes:</label>
          <textarea id="notes" name="notes" placeholder="Write your notes here" value={inputs.notes || ""} onChange={handleChange}></textarea>

          <button id="submit" type="submit">Submit</button>
          <div id="result">{result}</div>
        </form>
        </div>
    );
};

export default SymptomForm;