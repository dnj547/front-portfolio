import React, { Component } from 'react';

class Project extends Component {
  state = {
    width: (window.innerWidth/2).toString(),
    height: ((window.innerWidth/2)*(472.5/840)).toString()
  }

  render() {
    console.log('Project props', this.props);
    return (
      <div className="project">
        <div className="project-stuff">
          <div className="video-container">
            <iframe title={this.props.project.id} width={this.state.width} height={this.state.height} src={this.props.project.video} frameBorder="0" allowFullScreen></iframe><br/><br/>
            <button className="arrow-icon">
              <i onClick={this.props.previousProject} className="fas fa-arrow-circle-left"></i>
            </button>
            <a href={this.props.project.github}>
              <button className="project-button">GitHub</button>
            </a>
            <a href={this.props.project.planning}>
              <button className="project-button">Planning Doc</button>
            </a>
            <button className="arrow-icon">
              <i onClick={this.props.nextProject} className="fas fa-arrow-circle-right"></i>
            </button>
          </div>
          <div className="project-info">
            <h1>{this.props.project.name}</h1>
            <h2 className="project-info-header">Description</h2>
            <p>{this.props.project.description}</p>
            <h2 className="project-info-header">Created</h2>
            <p>{this.props.project['date-created']}</p>
            <h2 className="project-info-header">Tech Used</h2>
            <p>{this.props.project['tech-used']}</p>
            <h2 className="project-info-header">Partner</h2><br/>
            <a href={this.props.project.partnerGitHub}>{this.props.project.partner}</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Project;
