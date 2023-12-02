import React, { Component } from 'react'
import './Editor.css'

export default class Editor extends Component {
  constructor(props) {
    super(props);
    this.state =
     { 
        value: ''
    };
 
    this.handleChange = this.handleChange.bind(this);  
}

handleChange = (e)=>{
  this.setState({
    value : e.target.value
  })
}

  render() {
    return (
      <>
      <header className='head'>
        <h1>Kalvium's Note App</h1>
      </header>
      <div className="content">
          <div className="text" onSubmit={this.handleSubmit}>
            <div className="container">
            <div className='input'>Input</div>
            
            </div>
           
          </div>
         <div className="val">
         <input className='in' onChange={this.handleChange}/>
         <div className='value'>Pro Note</div>
          <div className="add">{this.state.value}</div>
         </div>
            </div>
      </>
    )
  }
}

