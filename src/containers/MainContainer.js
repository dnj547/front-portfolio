import React, { Component } from 'react';
import AboutContainer from './AboutContainer';
import ProjectsContainer from './ProjectsContainer';
import LifeContainer from './LifeContainer';
import ContactContainer from './ContactContainer';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class MainContainer extends Component {
  state = {
    page: 'about'
  }

  about = () => {
    this.setState({
      page: 'about'
    })
  }

  projects = () => {
    this.setState({
      page: 'projects'
    })
  }

  life = () => {
    this.setState({
      page: 'life'
    })
  }

  contact = () => {
    this.setState({
      page: 'contact'
    })
  }

  componentDidMount() {
    if (window.location.href.includes('life')) {
      this.setState({
        page: 'life'
      })
    } else if (window.location.href.includes('contact')) {
      this.setState({
        page: 'contact'
      })
    } else if (window.location.href.includes('projects')) {
      this.setState({
        page: 'projects'
      })
    } else {
      this.setState({
        page: 'about'
      })
    }
  }

  render() {
    return (
      <div className="main-container">
          <Router>
            <div className="nav-bar">
              <div className="nav-links">
                {this.state.page === 'about' ? <Link className="nav-link-selected" onClick={this.about} to="/">About</Link> : <Link className="nav-link" onClick={this.about} to="/">About</Link>}
                {this.state.page === 'projects' ? <Link className="nav-link-selected" onClick={this.projects} to="/projects">Projects</Link> : <Link className="nav-link" onClick={this.projects} to="/projects">Projects</Link>}
                {this.state.page === 'life' ? <Link className="nav-link-selected" onClick={this.life} to="/life">Life</Link> : <Link className="nav-link" onClick={this.life} to="/life">Life</Link>}
                {this.state.page === 'contact' ? <Link className="nav-link-selected" onClick={this.contact} to="/contact">Contact</Link> : <Link className="nav-link" onClick={this.contact} to="/contact">Contact</Link>}
              </div>
              <h1 className="my-name">Danielle Jasper</h1>
            </div>
            <Route path="/" exact component={AboutContainer} />
            <Route path="/projects" exact component={ProjectsContainer} />
            <Route path="/life" exact component={LifeContainer} />
            <Route path="/contact" exact component={ContactContainer} />
          </Router>
      </div>
    );
  }
}

export default MainContainer;
