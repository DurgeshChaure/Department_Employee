import React,{useEffect} from 'react';
import './About.css';
import { ListInlineItem } from 'reactstrap';

function About() {
    useEffect(() => {
        document.title = "About"; 
      }, []);
  return (
    <div>
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>D solutions is one of India’s leading technology provider with over a decade of experience in innovating engineering solutions across industries. Founded in 2004, by two technology enthusiasts, Durgesh Chaure and Nitesh Lakde. Over the years, both worked around the clock to build strategic solutions that made a difference in a wide range of AI and automation platforms for businesses. With a track record of successful clients, Winjit sublimed the outreach by establishing a presence at an international level, including the United States, United Kingdom, Australia, South Africa, and Singapore.</p>
        <p></p>
      </div>
   
     <div style={{ width: '100%'}}  >
      <h2 style={{ textAlign: 'center' }}>Our Team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img   src={require('../../img/CamScanner 08-10-2023 13.03 (1).jpg')}  alt="Jane" style={{ width: '50%' }} />
            <div className="container">
              <h2>Durgesh Chaure</h2>
              <p className="title">DEVELOPER</p>
              <p>Hello everyone i am durgesh chaure from Mumbai</p>
              <p>durgesh@dsolutions.com</p>
              <p><button className="button">Contact</button></p>
            </div>
          </div>
        </div>

      </div>
    </div>
    </div>
  );
}

export default About;