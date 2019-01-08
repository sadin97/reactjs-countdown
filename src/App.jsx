import React, { Component } from 'react';
import Clock from './Clock.jsx';
import './App.css';
import { Form, FormControl, Button } from 'react-bootstrap'

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      deadline: 'August 21, 2019',
      newDeadline: ''
    }
  }

  changeDeadline () {
    if (Date.parse(this.state.newDeadline) - Date.parse(new Date()) < 0) {
      alert('That day passed away.');
    } else {
      this.setState({deadline: this.state.newDeadline});
    }
  }

  render () {
    return (
      <div className="App">
        <div className="App-title">
        Countdown to {this.state.deadline}
        </div>
        <Clock
          deadline={this.state.deadline}
        />
        <Form inline>
          <FormControl
            className="Deadline-input"
            placeholder='new date'
            onChange={event => this.setState({newDeadline:event.target.value})}
          />
          <Button onClick={() => this.changeDeadline()}>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default App;
