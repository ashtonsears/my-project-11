import chart from '../images/sample_chart_img.png';
import '../styles/statistics.css';
import Symptom from '../components/Symptom';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Statistics = () => {
    const [symptoms, setSymptoms] = useState([]);
    const filteredSymptoms = symptoms.filter(symptom => symptom.symptom !== "Symptom Name");

    useEffect(() => {
        (async () => {
            const response = await axios.get("https://sleep-tracker-server.onrender.com/api/sleep_symptoms");
            setSymptoms(response.data);
        })();
    }, []);

    return (
        <main>
        <h2 id="stats_title">Your Sleep Statistics...</h2>
        <div id="calendar">
            <div class="month">
                <ul>
                    <li class="prev">&#10094;</li>
                    <li class="next">&#10095;</li>
                    <li><strong>February</strong></li>
                    <li>2025</li>
                </ul>
            </div>
        <ul class="weekdays">
            <li>Sun</li>
            <li>Mon</li>
            <li>Tues</li>
            <li>Wed</li>
            <li>Thurs</li>
            <li>Fri</li>
            <li>Sat</li>
        </ul>
        <ul class="days">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
            <li class="active">16</li>
            <li>17</li>
            <li>18</li>
            <li>19</li>
            <li>20</li>
            <li>21</li>
            <li>22</li>
            <li>23</li>
            <li>24</li>
            <li>25</li>
            <li>26</li>
            <li>27</li>
            <li>28</li>
        </ul>
    </div>
    <h2 id="symptom_title">View Your Symptoms</h2>
        <div id="symptom_container">
            {filteredSymptoms.map((symptom) => (
                <Symptom
                _id={symptom._id}
                symptom={symptom.symptom}
                duration={symptom.duration}
                severity={symptom.severity}
                date={symptom.date}
                time={symptom.time}
                notes={symptom.notes}
                />
            ))}
        </div>
    <h3>Average Daily Sleep for <span id="js_month">February</span></h3>
    <div class="chart">
        <img id="sample_chart" width="700" height="400" src={chart} alt="Sample Chart of Average Daily Sleep"/>
    </div>
    </main>
    );
  };
  
  export default Statistics;