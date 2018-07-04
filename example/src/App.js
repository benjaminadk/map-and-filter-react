import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

var doctors = [
  { name: 'Smith', specialty: 'Pediatrics', testScore: 94 },
  { name: 'Jones', specialty: 'Pediatrics', testScore: 88 },
  { name: 'Williams', specialty: 'Cardiology', testScore: 91 },
  { name: 'Singh', specialty: 'Pediatrics', testScore: 99 },
  { name: 'Johnson', specialty: 'Immunology', testScore: 90 },
  { name: 'Spock', specialty: 'Space', testScore: 100 }
]

class App extends Component {
  state = {
    filter: false
  }

  renderTable = () =>
    doctors
      .filter(el => (this.state.filter ? el.specialty === 'Pediatrics' : true))
      .map(d => (
        <tr key={d.name}>
          <td>{d.name}</td>
          <td>{d.specialty}</td>
          <td>{d.testScore}</td>
        </tr>
      ))

  toggleFilter = () => this.setState({ filter: !this.state.filter })

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <table>
            <tr>
              <th>Name</th>
              <th>Specialty</th>
              <th>TestScore</th>
            </tr>
            {this.renderTable()}
          </table>
          <button onClick={this.toggleFilter}>View Cardiologists</button>
        </div>
      </div>
    )
  }
}

export default App
