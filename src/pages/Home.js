import Slideshow from "../components/Slideshow";
import hourglass from "../images/hourglass_img.svg";
import beer from "../images/beer_img.svg";
import third from "../images/1_in_3_img.png";
import "../styles/home.css";

const Home = () => {
    return (
        <main>
            <h2>Who Needs Sleep?</h2>
            <p>Sleep's biological purpose remains a mystery.
                However, what we do know is that sleep is as essential to life as food and water— it is so important that the average person will spend a third of their life doing it.
                In fact, the world record for the person who went the longest without food (arguably an important resource for life) is 74 days, set by Angus Barbieri in 1965; however, the world record for the person who went the longest without sleep is 11 days and 25 minutes, set by Randy Gardner in 1964.
                That's a difference of 63 days! Therefore, sleep must be important. The question that remains is why?
                Sleep affects many parts of the body and plays a role in brain function, memory consolidation, heart function, metabolism, immune function, mood, and disease resistance.
                Most adults need around seven to nine hours of sleep every night. 
                Not getting enough sleep every night can increase the risk of problems like high blood pressure, cardiovascular disease, diabetes, depression, and obesity.
            </p>
            <p>Sleep disorders are conditions that can significantly affect the amount and quality of one's sleep. 
                These disorders can have far-reaching affects on a person's overall health, well-being, safety, and quality of life. 
                The consequences of untreated sleep disorders may include impaired cognitive function, weakened immune system, and increased risk of serious health conditions.
                Unfortunately, many individuals with sleep disorders remain undiagnosed. 
                Around 50% of people with narcolepsy and 90% of people with sleep apnea are undiagnosed, and therefore are also untreated.
                There are many barriers to diagnosis, ranging from a lack of access to a sleep physician to insufficient screening by healthcare providers.
                One important barrier to acknowledge is that symptoms of sleep disorders are often subtle or mistaken for other issues, leading to these symptoms getting overlooked by health care providers.
                Sleep Symptom Tracker exists to address this problem. Sleep Symptom Tracker helps people identify and track symptoms of sleep disorders.
                By doing so, the tracker aims to raise awareness and assist both patients and helathcare professionals in the diagnostic process, ultimately contributing to more timely disanoses and better treatment outcomes.
            </p>
            <h3>Sleep Fast Facts</h3>
            <div className="slideshow flex-container">
                <section class="aboutcol1of5 about_prev">
                    <p>&#10094;</p>
                </section>
                <Slideshow name="Hourglass"
                description="Long-term poor sleep can reduce lifespan by 4.7 years for women and 2.4 years for men."
                image={hourglass}/>
                <Slideshow name="One in Three"
                description="1 in 3 people do not get enough sleep at night— meaning one-third of the population is sleep-deprived."
                image={third}/>
                <Slideshow name="Sleeping and Driving"
                description="Being awake for 24 hours straight has the same effect as having a BAC of 0.10% (the legal limit is .08%)."
                image={beer}/>
                <section class="aboutcol1of5 about_next">
                    <p>&#10095;</p>
                </section>
            </div>
        </main>
    );
  };
  
  export default Home;