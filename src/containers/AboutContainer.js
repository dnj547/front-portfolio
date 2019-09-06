import React, { Component } from 'react';

class AboutContainer extends Component {
  render() {
    return (
      <div className="about-container">
        <div className="about-container-stuff">
          <div className="about-me-card">
            <img alt="me" src="images/me.jpg"/><br/><br/>
            <a href="https://github.com/dnj547">
              <button className="about-me-button">GitHub</button>
            </a>
            <a href="https://medium.com/@devdanielle">
              <button className="about-me-button">Medium</button>
            </a>
            <a href="https://www.linkedin.com/in/daniellejasper/">
              <button className="about-me-button">LinkedIn</button>
            </a>
            <a href="https://docs.google.com/presentation/d/1LaTpyhd_-QaJcM2NbAiQJMTuIldh-axyvpzFLnIlpmc/edit?usp=sharing">
              <button className="about-me-button">Resumé</button>
            </a>
          </div>
          <div className="about-me-text">
            <h1>About Me</h1><br/>
            <p>Hi, I'm Danielle. I'm a full-stack software developer who just graduated from Flatiron School in NYC!</p><br className="other-br"/>
            <div className="about-me-text-text">
              <i><h2>Education</h2></i><br/>
              <p><i className="fas fa-star-of-life"></i><strong>  Flatiron School:</strong> July 2019</p><br/>
              <p className="list"><i>Full-stack web development: Ruby on Rails, JavaScript, React, Redux</i></p><br/>
              <p><i className="fas fa-star-of-life"></i><strong>  Louisiana State University:</strong> May 2016</p><br/>
              <p className="list"><i>Degree: Accounting</i></p>
            </div><br className="ending-br"/>
            <div className="about-me-text-text">
              <i><h2>Experience</h2></i><br/>
              <p><i className="fas fa-star-of-life"></i><strong>  PricewaterhouseCoopers:</strong> Oct 2016 - Dec 2017</p><br/>
              <p className="list"><i>Experienced Associate / Internal Auditor</i></p><br/>
              <p><i className="fas fa-star-of-life"></i><strong>  Louisiana State University:</strong> Aug 2013 - May 2016</p><br/>
              <p className="list"><i>Student Tutor, Laboratory Tech, Research Assistant</i></p><br className="ending-br"/>
            </div>
            <div className="about-me-text-text">
              <i><h2>Fun Stuff</h2></i><br/>
              <p><i className="fas fa-star-of-life"></i><strong>  AI Chatbot Hackathon:</strong> May 2019 (team won 3rd Place)</p><br/>
              <p><i className="fas fa-star-of-life"></i><strong>  Open Source ERPs Hackathon:</strong> May 2019</p>
              <br/><p>(Most Diverse Team & Unique Idea)</p><br/>
              <p><i className="fas fa-star-of-life"></i><strong>  HackFest:</strong> April 2019 (Gave an awesome presentation)</p><br/>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutContainer;
