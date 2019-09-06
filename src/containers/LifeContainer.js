import React, { Component } from 'react';
import Level from '../components/Level';
import data from '../data/game_data.json';

class LifeContainer extends Component {

  state = {
    level: 0,
    montage: false
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
            <div className="initial-life-page-card">
              <img
                alt="me"
                src="images/me.jpg"
                />
            </div>
            <div className="initial-life-page-text">
              <h1>Play the game of my life!</h1>
              <button className="play-game-button" onClick={this.nextLevel}>Play</button>
              <div onClick={this.montage}>...</div>
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
