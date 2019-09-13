import React, { Component } from 'react';
import Level from '../components/Level';
import data from '../data/game_data.json';

class LifeContainer extends Component {

  state = {
    level: 0,
    montage: false
  }

  startOver = () => {
    this.setState({
      level: 0,
      montage: false
    })
  }

  startOverButton = () => {
    if (!this.state.montage) {
      if (this.state.level > 0) {
        return <button className="play-game-button" onClick={this.startOver}>Start Over</button>
      }
    }
  }

  levelComponents = () => {
    if (!this.state.montage) {
      if (this.state.level > 0) {
        return data.map(level=>{
          return <Level key={level.id} level={level} nextLevel={this.nextLevel} currentLevel={this.state.level}/>
        })
      }
    }
  }

  nextLevel = () => {
    if (this.state.level <= 4) {
      this.setState({
        level: this.state.level + 1
      })
    } else {
      console.log("game over");
    }
  }

  montage = () => {
    this.setState({
      level: 1,
      montage: true
    })
  }

  showMontage = () => {
    return data.map(level=>{
      return <Level montage={this.state.montage} key={level.id} level={level} nextLevel={this.nextLevel} currentLevel={this.state.level}/>
    })
  }

  showInitialPage = () => {
    if (!this.state.montage) {
      if (this.state.level === 0) {
        return (
          <div className="initial-life-page">
            <div className="name">
              <h1>Danielle Jasper: The Game</h1>
            </div>
            <div className="initial-life-page-card">
              <img
                alt="me"
                src="images/me.jpg"
                />
              <button className="play-game-button" onClick={this.nextLevel}>Play</button>
            </div>
          </div>
        )
      }
    }
  }

  finishIt = () => {
    this.setState({
      level: 4
    })
  }

  render() {
    console.log('Life Container state', this.state);
    return (
      <div>
        {!this.state.montage ? (
          <div>
            <div className="life-container">
              {this.showInitialPage()}
              {this.startOverButton()}
              {this.levelComponents()}
            </div>
            <div onClick={this.finishIt}>...</div>
          </div>
        ) : (
          <div className="life-container">
            {this.showMontage()}
          </div>
        )}
      </div>
    );
  }
}

export default LifeContainer;
