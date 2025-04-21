import { useState } from "react";
import { Link } from "react-router-dom";
import './Header.css';
import logo from '../images/sleep_logo_img.png';

function Header() {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <header>
        <div className="flex-container">
            <section className="col1of2 header_logo">
                <img src={logo} alt="Sleep Tracker Logo"/>
                <h1>Sleep Symptom<br/>Tracker</h1>
            </section>
            <section className="col1of2 login_buttons">
                <button type="button">Log In</button>
                <button type="button">Sign Up</button>
            </section>
            <section id="toggle" class="col1of2" onClick={toggleMenu}>
              <div></div>
              <div></div>
              <div></div>
            </section>
        </div>
        <nav id="main_nav">
        <ul id="main_nav_items" className={menuOpen ? "" : "hidden"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sleeptracker">Log A Symptom</Link>
          </li>
          <li>
            <Link to="/disorders">Sleep-Wake Disorders</Link>
          </li>
          <li>
            <Link to="/statistics">Sleep Calendar</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;