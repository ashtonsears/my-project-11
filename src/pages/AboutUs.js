import Contact from '../components/Contact';
import Slideshow from '../components/Slideshow';
import team from '../images/our_mission_img.jpg';
import nurse from '../images/nurse_team_img.jpg';
import programmer from '../images/programmer_team_img.jpg';
import doctor from '../images/doctor_team_img.jpeg';
import '../styles/about_us.css';

const AboutUs = () => {
    return (
        <main>
            <div className="flex-container">
                <section className="aboutcol1of2">
                    <img src={team} alt="Our website's team"/>
                </section>
                <section className="aboutcol1of2">
                    <h2>Our Mission</h2>
                    <p>Getting a diagnosis for a sleep disorder can be a long and frustrating journey.
                        Many individuals with sleep disorders experience an eight to nineteen year gap between onset of symptoms and diagnosis.
                        This is due to a variety of reasons, including lack of knowledge of symptoms, lack of access to a sleep clinician, and lack of primary care provider awareness.
                        Struggling with sleep disorder symptoms like chronic fatigue, insomnia, and breathing issues for a long period of time can severely impact sleep health, which affects overall well-being.
                    </p>
                    <p>At Sleep Symptom Tracker, we recognize the importance of a quick and accurate diagnosis for these disorders, which is why we have created this platform.
                        Sleep Symptom Tracker is a user-friendly tool that allows patients to document their sleep patterns and symptoms all in one place.
                        By equipping patients with detailed insights into their sleep patterns, we aim to make conversations with healthcare providers more productive and efficient.
                        Our platform is designed to help users recognize patterns, track changes over time, and present clear data that can help in the diagnostic process.

                    </p>
                </section>
            </div>
            <h2 className="our_team">Our Team</h2>
            <div className="slideshow flex-container">
                <section class="aboutcol1of5 about_prev">
                    <p>&#10094;</p>
                </section>
                <Slideshow name="Nurse"
                description="Nurse Fakeperson is a registered sleep technician in addition to being a registered nurse (RN). She contributed her knowledge to this website alongside Dr. Notreal."
                image={nurse}/>
                <Slideshow name="Programmer"
                description="Casey Imaginarylady is a website programmer who has been working in the industry for seven years. She helped to code this website."
                image={programmer}/>
                <Slideshow name="Doctor"
                description="Dr. Notreal is a board certified sleep medicine physician who came up with the idea for the Sleep Symptom Tracker. He provided the information for this website alongside Nurse Fakeperson."
                image={doctor}/>
                <section class="aboutcol1of5 about_next">
                    <p>&#10095;</p>
                </section>
            </div>
            <h2>Contact Us</h2>
            <div id="symptom_form">
                <Contact />
            </div>
        </main>
    );
  };
  
  export default AboutUs;