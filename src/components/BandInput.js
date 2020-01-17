// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
  }

  handleOnChange = (e) => {
    this.setState({
      name: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    this.props.addBand(this.state.name)
    this.setState({
      name: ''
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleOnChange}
          />
          <button type="submit" className="btn btn-default">Add</button>
        </form>
      </div>
    )
  }
}


export default BandInput
