import React, { Component } from 'react';
import data from '../data/project_data.json';
import Project from '../components/Project';

class ProjectsContainer extends Component {

  state = {
    currentProject: data[0],
    currentProjectIndex: 0
  }

  nextProject = () => {
    if (this.state.currentProjectIndex < data.length-1) {
      this.setState({
        currentProject: data[this.state.currentProjectIndex+1],
        currentProjectIndex: this.state.currentProjectIndex+1
      })
    }
  }

  previousProject = () => {
    if (this.state.currentProjectIndex > 0) {
      this.setState({
        currentProject: data[this.state.currentProjectIndex-1],
        currentProjectIndex: this.state.currentProjectIndex-1
      })
    }
  }
  render() {
    console.log('projects container data', data);
    return (
      <div>
        <div className="project-container">
          <Project key={this.state.currentProject.id} project={this.state.currentProject} nextProject={this.nextProject} previousProject={this.previousProject}/>
        </div>
      </div>
    );
  }
}

export default ProjectsContainer;
