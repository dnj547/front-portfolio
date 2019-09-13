import React, { Component } from 'react';
import PieChartWithCustomization from './Chart';

// const API_CARDS = 'https://backend-daniellejasper.herokuapp.com//api/v1/cards';
const API_VOTES = 'https://backend-daniellejasper.herokuapp.com/api/v1/votes';
const API_RESPONSES = 'https://backend-daniellejasper.herokuapp.com/api/v1/responses';

class Card extends Component {

  state = {
    clicked: [],
    responsesAndVotePercentages: [],
    highestResponse: [],
    correctAnswer: {}
  }

  resetState = () => {
    this.setState({
      clicked: [],
      responsesAndVotePercentages: [],
      highestResponse: [],
      correctAnswer: {}
    }, this.props.nextCardOrRestart())
  }

  rightWrongOrNothing = () => {
    if (this.state.clicked && this.state.correctAnswer) {
      if (this.state.clicked === this.state.correctAnswer.response_text) {
        return (<i className="good-icon fas fa-check-circle"></i>)
      } else {
        return (<i className="bad-icon fas fa-times-circle"></i>)
      }
    } else {
      return null
    }
  }

  showCard = () => {
    if (this.state.clicked.length>0) {
      return (
        <div className="card">
          <div className="card-analytics-container">
            <div className="answers-container">
              {this.rightWrongOrNothing()}
              <div className="your-answer">
                <p>You said:</p><button>{this.state.clicked}</button>
              </div>
              <div className="correct-answer">
                <p>Right answer: </p><button disabled>{this.state.correctAnswer['response_text']}</button>
              </div>
              <div className="survey-says">
                <p className="card-survey-says">Most people said:</p><button className="survey-says-button" disabled>{this.state.highestResponse[0]}</button>
              </div>
            </div>
            <div className="analytics">
              {this.state.clicked.length > 0 ?  <PieChartWithCustomization pieState={this.state}/> : null}
            </div>
          </div>
          <br/>
          <button onClick={this.resetState} className="response-button">Cool</button>
        </div>
      )
    } else if (this.props.card.text) {
      return (
        <div className="card">
          <div className="card-text-container">
            <p>{this.props.card.text}</p>
          </div>
          <br/>
          {this.showButtons()}
        </div>
      )
    } else {
      return (
        <div className="card">
          <div className="card-img-container">
            <img
              alt={this.props.card.id}
              src={this.props.card.image}/>
          </div>
          <br/>
          {this.showButtons()}
        </div>
      )
    }
  }

  showButtons = () => {
    return this.props.card.responses.map(response=>{
      return (
        <div className="response-button-container" key={response.id}>
          <button className="response-button" id={response.id} key={response.id} onClick={this.props.card.responses.length > 1 ? this.postToVotes : this.props.nextCardOrRestart}>{response.text}</button>
        </div>
      )
    })
  }

  fetchVotes = (responseClicked, cardClickedId) => {
    fetch(API_RESPONSES)
    .then(r=>r.json())
    .then(responses=>{
      let responsesForThisCard = responses.filter(response=>{
        return response.card_id === cardClickedId
      })
      let totalVotes = responsesForThisCard.map(response=>{
        return response.votes.length
      }).reduce((a,b) => a + b, 0)
      let responsesAndVotePercentages = []
      responsesForThisCard.map(response=>{
        return responsesAndVotePercentages.push([response.response_text, ((response.votes.length/totalVotes)*100).toFixed(0)+'%'])
      })
      let clicked = responseClicked.text
      let responsesSorted = responsesForThisCard.sort(function(a, b){return a.votes.length - b.votes.length})
      console.log(responsesSorted);
      let highestOne = responsesSorted[responsesSorted.length-1]
      let highest = []
      highest.push(highestOne['response_text'])
      highest.push(((highestOne['votes'].length/totalVotes)*100).toFixed(0)+'%')
      let correctAnswer = responses.find(r=>{
        return r.id === this.props.card.correct
      })
      console.log('correct', correctAnswer);
      this.setState({
        clicked: clicked,
        responsesAndVotePercentages: responsesAndVotePercentages,
        highestResponse: highest,
        correctAnswer: correctAnswer
      })
    })
    .catch(()=>console.log("Error fetching votes"))
  }

  postToVotes = (e) => {
    console.log('');
    console.log('posting to votes');
    let cardClickedId = this.props.card.id
    let responseClicked = this.props.card.responses.find(response=>{
      return response.id === parseInt(e.currentTarget.id, 10)
    })
    let responseClickedId = responseClicked.id
    fetch(API_VOTES, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "response_id": responseClickedId,
        "card_id": cardClickedId
      })
    })
    .then(r=>r.json())
    .then(vote=>{
      console.log('vote posted', vote);
      this.fetchVotes(responseClicked, cardClickedId)
    })
  }


  render() {
    return (
      <div className="card-container">
        {this.showCard()}
      </div>
    )
  }
}

export default Card;
